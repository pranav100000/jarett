import type { Publication } from "@/content/profile";

export function WritingList({ items }: { items: Publication[] }) {
  return (
    <ul className="space-y-7">
      {items.map((item) => (
        <li
          key={`${item.title}-${item.year}`}
          className="grid gap-1 md:grid-cols-[9rem_1fr] md:gap-8"
        >
          <p className="text-sm text-ink-muted tabular-nums md:pt-0.5">
            {item.year}
          </p>
          <div>
            <p className="text-ink">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-rule underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </p>
            <p className="mt-0.5 text-sm text-ink-muted">{item.venue}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
