import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

/**
 * Two-column section: a small uppercase label on the left, content on the
 * right. Stacks on narrow screens.
 */
export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 border-t border-line py-14 md:grid md:grid-cols-[8rem_1fr] md:gap-x-12 md:py-16"
    >
      <h2
        id={headingId}
        className="mb-8 text-[11px] font-medium uppercase tracking-[0.2em] text-subtle md:mb-0 md:pt-1"
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
