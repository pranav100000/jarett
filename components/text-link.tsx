import type { ComponentProps } from "react";

/** Understated underlined link used throughout the site. */
export function TextLink({ className = "", ...props }: ComponentProps<"a">) {
  const external = props.href?.startsWith("http");
  return (
    <a
      {...props}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`underline decoration-subtle underline-offset-4 transition-colors hover:decoration-foreground ${className}`}
    />
  );
}
