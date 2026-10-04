import { profile } from "@/content/profile";

export function Experience() {
  return (
    <ol className="space-y-12">
      {profile.experience.map((job) => (
        <li key={`${job.organization}-${job.role}`}>
          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-medium">{job.role}</h3>
              <p className="text-sm tabular-nums text-subtle">
                {job.start} — {job.end}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted">
              {job.organization} · {job.location}
            </p>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
              {job.summary.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-line" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
