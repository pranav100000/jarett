import { profile } from "@/content/profile";

const navigation = [
  { label: "Experience", href: "#experience", mobile: false },
  { label: "Education", href: "#education", mobile: false },
  { label: "Expertise", href: "#expertise", mobile: false },
  { label: "Contact", href: "#contact", mobile: true },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-[17px] tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Primary">
          <ul className="flex gap-5 text-[13px] text-muted">
            {navigation.map((item) => (
              <li
                key={item.href}
                className={item.mobile ? undefined : "hidden sm:block"}
              >
                <a
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
