import { BulletList } from "@/components/bullet-list";
import { DateRange } from "@/components/date-range";
import { profile } from "@/content/profile";

export function Experience() {
  return (
    <ol className="space-y-12">
      {profile.experience.map((job) => (
        <li key={`${job.organization}-${job.role}`}>
          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-medium">{job.role}</h3>
              <DateRange start={job.start} end={job.end} />
            </div>
            <p className="mt-1 text-sm text-muted">
              {job.organization} · {job.location}
            </p>
            <BulletList items={job.summary} className="mt-4" />
          </article>
        </li>
      ))}
    </ol>
  );
}
