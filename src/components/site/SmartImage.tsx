import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SmartImage({
  className,
  onLoad,
  onError,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");
  return (
    <span className="relative block h-full w-full overflow-hidden bg-muted">
      {state === "loading" && (
        <span className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
      )}
      {state === "error" && (
        <span className="absolute inset-0 grid place-items-center p-4 text-center text-xs text-muted-foreground">
          Image unavailable
        </span>
      )}
      <img
        {...props}
        className={cn(
          className,
          "transition-opacity duration-300",
          state === "loaded" ? "opacity-100" : "opacity-0",
        )}
        onLoad={(event) => {
          setState("loaded");
          onLoad?.(event);
        }}
        onError={(event) => {
          setState("error");
          onError?.(event);
        }}
      />
    </span>
  );
}
