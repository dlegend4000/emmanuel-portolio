"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between py-8 flex-wrap gap-y-2">
      {/* Breadcrumb */}
      <div className="flex flex-row items-center gap-1.5 whitespace-nowrap">
        <Link
          href="/"
          className="font-sentient italic text-sm font-medium no-underline"
          style={{ color: "var(--gray-900)", textDecoration: "none" }}
        >
          Emmanuel Karibiye
        </Link>
        <span className="text-sm" style={{ color: "var(--gray-500)" }}>—</span>
        <span
          className="text-sm italic font-sentient"
          style={{ color: "var(--gray-600)" }}
        >
          Founder &amp; Builder
        </span>
      </div>

      {/* Nav */}
      <nav aria-label="Main navigation">
        <ul className="flex items-center gap-4 list-none">
          <li><ThemeToggle /></li>
          {navLinks.map(({ href, label }) => {
            const isActive = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm no-underline transition-colors"
                  style={{
                    color: isActive ? "var(--gray-900)" : "var(--gray-600)",
                    fontWeight: isActive ? 500 : 400,
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
