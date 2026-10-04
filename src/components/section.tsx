import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export function Section({ id, label, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-10 border-t border-rule py-16 sm:py-20"
    >
      <h2
        id={headingId}
        className="mb-10 text-xs font-medium tracking-[0.18em] text-ink-muted uppercase"
      >
        {label}
      </h2>
      {children}
    </section>
  );
}
