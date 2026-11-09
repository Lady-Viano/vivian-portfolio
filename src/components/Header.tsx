"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/95 backdrop-blur">
      <Container className="flex h-[76px] items-center justify-between lg:h-[94px]">
        <Logo className="w-[88px] lg:w-[108px]" />

        <nav className="hidden items-center md:flex">
          <ul className="flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-2 text-[12.5px] transition-colors hover:text-brand ${
                    isActive(link.href)
                      ? "text-brand-dark after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-brand-dark"
                      : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="ml-14 inline-flex h-12 w-[180px] items-center justify-center rounded-lg bg-brand text-[12.5px] text-white transition-colors hover:bg-brand-dark lg:ml-[86px]"
          >
            Let&rsquo;s Talk
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-page md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-3 text-base ${
                  isActive(link.href) ? "text-brand-dark" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-lg bg-brand text-white"
            >
              Let&rsquo;s Talk
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
