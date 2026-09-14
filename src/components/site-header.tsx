import Link from "next/link";
import { navigation, profile } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

// On mobile the name takes the first row and the nav and theme toggle share the second,
// so the visual order always matches the DOM (and keyboard) order.
export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center gap-x-4 py-5">
      <Link href="/" className="w-full font-semibold tracking-tight sm:w-auto">
        {profile.name}
      </Link>
      <nav aria-label="Main" className="flex-1 sm:flex sm:justify-end">
        <ul className="-ml-3 flex items-center gap-1 text-sm sm:ml-0">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-block rounded-full px-3 py-2 text-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
