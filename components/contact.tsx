import { TextLink } from "@/components/text-link";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <div>
      <h3 className="font-serif text-2xl leading-snug tracking-tight">
        {profile.contact.heading}
      </h3>
      <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted">
        {profile.contact.body}
      </p>
      <ul className="mt-8 space-y-2 text-[15px]">
        <li>
          <TextLink href={`mailto:${profile.email}`}>{profile.email}</TextLink>
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
    </div>
  );
}
