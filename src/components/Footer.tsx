import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import { navLinks } from "@/lib/site";

const footerNav = [...navLinks, { href: "/contact", label: "Let’s Talk" }];

const services = ["UI/UX Design", "Graphic Design", "Brand Design", "Product Strategy"];

export default function Footer() {
  return (
    <footer className="bg-mist shadow-[inset_48px_0_60px_-40px_rgba(255,255,255,0.7),inset_-48px_0_60px_-40px_rgba(255,255,255,0.7)]">
      <Container className="pt-20 pb-14 lg:pt-[130px] lg:pb-[94px]">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-16 lg:gap-0 lg:grid-cols-[670px_275px_1fr]">
          <div>
            <Logo className="w-[88px]" />
            <p className="mt-8 max-w-[360px] text-[12px] leading-[1.4] text-ink">
              Product designer &amp; visual storyteller creating beautiful,{" "}
              <br className="hidden sm:inline" />
              purposeful experiences for people and brands.
              <br />
              Got a project, a job opportunity, or just want to say hi?{" "}
              <br className="hidden sm:inline" />
              Send it over. I&rsquo;d love to hear from you.
            </p>
            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>

          <div className="lg:pt-3">
            <h2 className="text-[14.5px] text-ink">Navigate</h2>
            <ul className="mt-6 space-y-[18px] text-[12px]">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-3">
            <h2 className="text-[14.5px] text-ink">Services</h2>
            <ul className="mt-6 space-y-[18px] text-[12px]">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="mx-auto max-w-[1252px] border-t border-[#dcd9db]" />

      <Container className="flex flex-col gap-3 py-8 text-[12px] text-ink-soft sm:flex-row sm:items-center sm:justify-between lg:pt-[44px] lg:pb-[64px]">
        <p>&copy; 2026 Vivian Obidiegwu. All rights reserved.</p>
        <p>
          Designed &amp; built with <span aria-label="love">❤️</span> by Viano
        </p>
      </Container>
    </footer>
  );
}
