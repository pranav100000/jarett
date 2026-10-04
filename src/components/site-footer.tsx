import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-rule py-10 text-sm text-ink-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors hover:text-ink"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
