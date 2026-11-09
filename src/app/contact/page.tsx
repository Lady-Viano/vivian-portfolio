import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import Container from "@/components/Container";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Let’s talk — Vivian Obidiegwu",
  description: "Have a project in mind? Get in touch with Vivian Obidiegwu.",
};

const details = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v.4l-9 5.6-9-5.6v-.4zm0 2.8V17.5A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5V9.3l-8.47 5.27a1 1 0 0 1-1.06 0L3 9.3z" />
    ),
  },
  {
    label: "Based in",
    value: site.location,
    icon: (
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    ),
  },
  {
    label: "Response time",
    value: "Within 24 hours",
    icon: <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />,
  },
];

export default function Contact() {
  return (
    <Container className="grid gap-14 pt-14 pb-24 lg:grid-cols-[1fr_568px] lg:gap-10 lg:pt-[130px] lg:pb-[124px]">
      <div className="lg:pt-[11px]">
        <BackLink />
        <p className="mt-12 font-script text-[40px] leading-none text-accent lg:mt-[44px]">
          Contact
        </p>
        <h1 className="mt-4 font-display text-[34px] leading-tight font-bold lg:text-[36px]">
          Let&rsquo;s talk..
        </h1>
        <p className="mt-6 max-w-[445px] text-[15px] leading-[1.35] sm:text-justify lg:text-[16px]">
          Have a project in mind? I&apos;d love to hear about it. Whether you&apos;re
          launching a product, refreshing a brand, or need a design partner, let&apos;s
          start the conversation.
        </p>

        <ul className="mt-12 space-y-[15px]">
          {details.map((d) => (
            <li key={d.label} className="flex items-center gap-[15px]">
              <span className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-lg bg-icon-bg text-brand">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  {d.icon}
                </svg>
              </span>
              <div className="text-[12px] leading-[1.45]">
                <p>{d.label}</p>
                {d.href ? (
                  <a href={d.href} className="font-semibold transition-colors hover:text-brand">
                    {d.value}
                  </a>
                ) : (
                  <p className="font-semibold">{d.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ContactForm />
    </Container>
  );
}
