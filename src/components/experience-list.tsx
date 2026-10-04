import type { Role } from "@/content/profile";

export function ExperienceList({ roles }: { roles: Role[] }) {
  return (
    <ol className="space-y-12">
      {roles.map((role) => (
        <li
          key={`${role.organization}-${role.start}`}
          className="grid gap-2 md:grid-cols-[9rem_1fr] md:gap-8"
        >
          <p className="text-sm text-ink-muted tabular-nums md:pt-0.5">
            {role.start} — {role.end}
          </p>
          <div>
            <h3 className="font-medium text-ink">{role.title}</h3>
            <p className="mt-0.5 text-ink-muted">
              {role.organization}
              {role.location && (
                <>
                  <span aria-hidden="true"> · </span>
                  {role.location}
                </>
              )}
            </p>
            {role.summary && (
              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
                {role.summary}
              </p>
            )}
            {role.highlights.length > 0 && (
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink/85">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span aria-hidden="true" className="text-ink-faint select-none">
                      –
                    </span>
                    <span>{highlight}</span>
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
