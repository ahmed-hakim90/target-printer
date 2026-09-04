import { z } from "zod";

export type ContactEmailEnv = {
  CONTACT_EMAIL_ENABLED?: string;
  CONTACT_EMAIL_FROM?: string;
  CONTACT_EMAIL_TO?: string;
  RESEND_API_KEY?: string;
};

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  phone: z
    .string()
    .trim()
    .min(5)
    .max(30)
    .regex(/^[0-9+\-()\s]+$/),
  product: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().min(10).max(1000),
  website: z.string().max(0).optional().default(""),
});

type ContactRequest = z.infer<typeof contactSchema>;

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]!,
  );

export function renderContactEmail(data: ContactRequest) {
  const rows = [
    ["Name / الاسم", data.name],
    ["Company / الشركة", data.company],
    ["Email / البريد", data.email],
    ["Phone / الهاتف", data.phone],
    ...(data.product ? [["Product / المنتج", data.product]] : []),
  ];
  const subject = `New inquiry — ${data.name}${data.product ? ` — ${data.product}` : ""}`;
  const text = [
    "New website inquiry / طلب جديد من الموقع",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message / الرسالة:",
    data.message,
  ].join("\n");
  const html = `<!doctype html>
<html lang="en" dir="ltr">
  <body style="margin:0;background:#eef5ff;font-family:Arial,'Cairo',sans-serif;color:#10213d">
    <div style="display:none;max-height:0;overflow:hidden">New inquiry from ${escapeHtml(data.name)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef5ff;padding:32px 12px">
      <tr><td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#fff;border:1px solid #dbe7f6;border-radius:16px;overflow:hidden">
          <tr><td style="background:#06377c;padding:24px 28px;color:#fff">
            <div style="font-size:12px;letter-spacing:1.5px;color:#8fc2ff;font-weight:700">TARGET PRINTERS</div>
            <h1 style="margin:8px 0 0;font-size:24px;line-height:1.35">New website inquiry</h1>
            <div dir="rtl" style="margin-top:4px;font-size:17px;color:#dceaff">طلب جديد من الموقع</div>
          </td></tr>
          <tr><td style="padding:28px">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${rows
                .map(
                  ([label, value]) => `<tr>
                    <td style="padding:11px 0;border-bottom:1px solid #e8eef7;font-size:13px;color:#63708a;width:38%">${escapeHtml(label)}</td>
                    <td style="padding:11px 0;border-bottom:1px solid #e8eef7;font-size:14px;font-weight:700;word-break:break-word">${escapeHtml(value)}</td>
                  </tr>`,
                )
                .join("")}
            </table>
            <div style="margin-top:24px;font-size:13px;color:#63708a">Message / الرسالة</div>
            <div style="margin-top:8px;padding:16px;background:#f5f8fc;border-radius:10px;white-space:pre-wrap;line-height:1.7;font-size:15px">${escapeHtml(data.message)}</div>
            <div style="margin-top:24px">
              <a href="mailto:${encodeURIComponent(data.email)}" style="display:inline-block;background:#1670e8;color:#fff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:700">Reply to customer / الرد على العميل</a>
            </div>
          </td></tr>
          <tr><td style="padding:18px 28px;background:#f7f9fc;color:#758096;font-size:12px">Sent securely from the Target Printers website.</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
  return { subject, text, html };
}

const json = (body: unknown, status: number) =>
  Response.json(body, { status, headers: { "cache-control": "no-store" } });

export async function handleContactEmail(request: Request, env: ContactEmailEnv) {
  if (request.method !== "POST") return json({ ok: false, code: "method_not_allowed" }, 405);
  if (env.CONTACT_EMAIL_ENABLED !== "true") {
    return json({ ok: false, code: "email_disabled" }, 503);
  }
  if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL_FROM || !env.CONTACT_EMAIL_TO) {
    console.error("Contact email is enabled but its Resend configuration is incomplete.");
    return json({ ok: false, code: "email_unavailable" }, 503);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_384) return json({ ok: false, code: "payload_too_large" }, 413);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, code: "invalid_request" }, 400);
  }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return json({ ok: false, code: "validation_failed" }, 400);
  if (parsed.data.website) return json({ ok: true }, 200);

  const email = renderContactEmail(parsed.data);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
      "idempotency-key": crypto.randomUUID(),
    },
    body: JSON.stringify({
      from: env.CONTACT_EMAIL_FROM,
      to: [env.CONTACT_EMAIL_TO],
      reply_to: parsed.data.email,
      subject: email.subject,
      html: email.html,
      text: email.text,
    }),
  });
  if (!response.ok) {
    console.error("Resend contact email failed", response.status, await response.text());
    return json({ ok: false, code: "send_failed" }, 502);
  }
  return json({ ok: true }, 200);
}
