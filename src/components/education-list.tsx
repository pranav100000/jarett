import type { Degree } from "@/content/profile";

export function EducationList({ degrees }: { degrees: Degree[] }) {
  const ordered = [...degrees].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <ol className="space-y-12">
      {ordered.map((degree) => (
        <li
          key={`${degree.institution}-${degree.start}`}
          className="grid gap-2 md:grid-cols-[9rem_1fr] md:gap-8"
        >
          <p className="text-sm text-ink-muted tabular-nums md:pt-1">
            {degree.start} — {degree.end}
          </p>
          <div>
            {degree.featured ? (
              <h3 className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
                {degree.degree} in {degree.field}
              </h3>
            ) : (
              <h3 className="font-medium text-ink">
                {degree.degree} in {degree.field}
              </h3>
            )}
            <p className={degree.featured ? "mt-2 text-ink" : "mt-0.5 text-ink-muted"}>
              {degree.institution}
              {degree.school && (
                <>
                  <span aria-hidden="true"> · </span>
                  {degree.school}
                </>
              )}
            </p>
            {degree.details && degree.details.length > 0 && (
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink/85">
                {degree.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span aria-hidden="true" className="text-ink-faint select-none">
                      –
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
