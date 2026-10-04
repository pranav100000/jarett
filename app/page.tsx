import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Expertise } from "@/components/expertise";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { profile } from "@/content/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: profile.tagline,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: profile.location },
  sameAs: profile.links.map((link) => link.href),
  alumniOf: profile.education.map((entry) => ({
    "@type": "CollegeOrUniversity",
    name: entry.institution,
  })),
  knowsAbout: profile.expertise.flatMap((group) => group.items),
};

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section id="top" className="pt-20 pb-16 md:pt-28 md:pb-20">
        {profile.availability ? (
          <p className="mb-6 flex items-center gap-2.5 text-[13px] text-muted">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.availability}
          </p>
        ) : null}
        <h1 className="font-serif text-5xl leading-none tracking-tight md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg text-muted md:text-xl">{profile.title}</p>
        <div className="mt-8 max-w-prose space-y-4 text-[15.5px] leading-relaxed text-muted">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <TextLink href={`mailto:${profile.email}`}>Email</TextLink>
          </li>
          {profile.links.map((link) => (
            <li key={link.href}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </li>
          ))}
          {profile.cvUrl ? (
            <li>
              <TextLink href={profile.cvUrl}>Download CV</TextLink>
            </li>
          ) : null}
        </ul>
      </section>

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>

      <Section id="expertise" title="Expertise">
        <Expertise />
      </Section>

      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </div>
  );
}
