import { BulletList } from "@/components/bullet-list";
import { DateRange } from "@/components/date-range";
import { profile } from "@/content/profile";

export function Education() {
  return (
    <ol className="space-y-12">
      {profile.education.map((entry) => (
        <li key={`${entry.institution}-${entry.degree}`}>
          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3
                className={
                  entry.featured
                    ? "font-serif text-2xl leading-snug tracking-tight"
                    : "font-medium"
                }
              >
                {entry.degree}, {entry.field}
              </h3>
              <DateRange start={entry.start} end={entry.end} />
            </div>
            <p
              className={`mt-1 text-muted ${entry.featured ? "text-base" : "text-sm"}`}
            >
              {entry.institution}
              {entry.school ? `, ${entry.school}` : ""} · {entry.location}
            </p>
            {entry.description ? (
              <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted">
                {entry.description}
              </p>
            ) : null}
            {entry.highlights?.length ? (
              <BulletList items={entry.highlights} className="mt-4" />
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
