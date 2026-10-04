import Link from "next/link";
import { profile } from "@/content/profile";

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-3xl px-6">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-paper focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="flex items-center justify-between py-8 text-sm"
      >
        <Link href="/" className="font-medium text-ink">
          {profile.name}
        </Link>
        <ul className="flex gap-5 sm:gap-7">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
