import { profile } from "@/content/profile";

export function Contact() {
  return (
    <div>
      <p className="max-w-xl text-lg leading-relaxed text-ink">
        I am currently taking on new consulting engagements. If you are working
        on a public health problem that needs rigorous evidence behind it, I
        would like to hear about it.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block font-serif text-2xl text-ink underline decoration-rule underline-offset-[6px] transition-colors hover:decoration-ink sm:text-3xl"
      >
        {profile.email}
      </a>
      {profile.links.length > 0 && (
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
