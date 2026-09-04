# Cloudflare Workers deployment

This application is deployed as a Cloudflare Worker with static assets and
server-side rendering. `wrangler.jsonc` is the source configuration. The
Cloudflare Vite plugin writes the deployable configuration to
`dist/server/wrangler.json` during the production build; do not edit that
generated file.

## Prerequisites

- Node.js 22 or a compatible active LTS release.
- A Cloudflare account with permission to deploy Workers.
- Wrangler authentication, either through `npx wrangler login` locally or a
  scoped `CLOUDFLARE_API_TOKEN` in CI.

`SITE_URL` is only a build-time override for sitemap and robots generation and
defaults to `https://target-printer.com`.

## Contact email with Resend

Contact email is prepared but intentionally disabled by
`CONTACT_EMAIL_ENABLED="false"` in `wrangler.jsonc`. While disabled, a valid
form submission falls back to the visitor's email client. The Resend API key is
never exposed to the browser.

To activate it after the production domain is ready:

1. Add `mail.target-printer.com` in Resend and publish the SPF and DKIM records
   Resend provides in Cloudflare DNS. Wait until Resend reports `verified`.
2. Create a Resend API key with sending access.
3. Add it to the Worker as an encrypted secret:

   ```sh
   npx wrangler secret put RESEND_API_KEY
   ```

4. Confirm `CONTACT_EMAIL_FROM` and `CONTACT_EMAIL_TO` in `wrangler.jsonc`, set
   `CONTACT_EMAIL_ENABLED` to `true`, then deploy.
5. Submit one real test inquiry and verify delivery, Reply-To behavior, the
   plain-text fallback, and Resend's delivery log.

For local configuration, copy `.dev.vars.example` to `.dev.vars` and keep the
real key only in the ignored `.dev.vars` file. The bilingual notification
template is maintained in `src/server/contact-email.ts`.

Before enabling public sending, add a Cloudflare rate-limiting rule for
`POST /api/contact`. The endpoint also validates payload size and fields and
includes a honeypot, but edge rate limiting is the durable abuse control.

## Verify a release

```sh
npm ci
npm run lint
npm run deploy:dry-run
```

The dry run performs a fresh production build and validates the exact Worker
and static-asset bundle without uploading it.

## Deploy

```sh
npm run deploy
```

Wrangler prints the generated `workers.dev` address and deployment version.
Run the responsive and RTL/LTR checks in `docs/QA-CHECKLIST.md` against that
address before attaching or promoting the production domain.

## Production domain

Attach `target-printer.com` and `www.target-printer.com` to the Worker from
Cloudflare's Workers & Pages dashboard under the Worker's Domains & Routes.
Keep DNS proxied through Cloudflare. Confirm that the apex and `www` hostname
resolve to one canonical origin and that `/robots.txt` and `/sitemap.xml` use
`https://target-printer.com`.

## Rollback

Use the Cloudflare dashboard's Worker deployment history to roll back to the
last verified version. Do not rebuild an old commit merely to reproduce an
earlier deployment when its immutable Worker version is available.
