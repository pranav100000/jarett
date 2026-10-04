import { profile } from "@/content/profile";

export function Expertise() {
  return (
    <dl className="space-y-6">
      {profile.expertise.map((group) => (
        <div
          key={group.area}
          className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6"
        >
          <dt className="text-sm font-medium">{group.area}</dt>
          <dd className="text-[15px] leading-relaxed text-muted">
            {group.items.join(", ")}
          </dd>
        </div>
      ))}
    </dl>
  );
}
