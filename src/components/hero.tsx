import { profile } from "@/content/profile";

export function Hero() {
  const featuredDegree = profile.education.find((d) => d.featured);

  return (
    <section className="pt-12 pb-20 sm:pt-20 sm:pb-28">
      <p className="text-xs font-medium tracking-[0.18em] text-ink-muted uppercase">
        {profile.title}
        <span aria-hidden="true"> · </span>
        {profile.location}
      </p>

      <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
        {profile.name}
      </h1>

      <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
        {profile.tagline}
      </p>

      {featuredDegree && (
        <p className="mt-6 text-sm text-ink">
          {featuredDegree.degree} in {featuredDegree.field},{" "}
          <a
            href="#education"
            className="underline decoration-rule underline-offset-4 transition-colors hover:decoration-ink"
          >
            {featuredDegree.institution}
          </a>
        </p>
      )}

      <div className="mt-12 max-w-xl space-y-5 text-[17px] leading-relaxed text-ink/85">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <dl className="mt-12">
        <dt className="text-xs font-medium tracking-[0.18em] text-ink-muted uppercase">
          Focus
        </dt>
        <dd className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
          {profile.focus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </dd>
      </dl>
    </section>
  );
}
