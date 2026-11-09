import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import Container from "@/components/Container";
import CtaCard from "@/components/CtaCard";
import WorksGrid from "@/components/works/WorksGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "UI/UX Works — Vivian Obidiegwu",
  description: "Product design case studies by Vivian Obidiegwu.",
};

export default function UiUxWorks() {
  return (
    <>
      <Container className="pt-14 lg:pt-[140px]">
        <BackLink />
        <p className="mt-4 text-[18px] font-semibold text-tag-ink">UI/UX Design</p>
        <h1 className="mt-4 font-display text-[34px] leading-[1.15] font-bold sm:text-[42px] lg:text-[46px]">
          Product design <span className="text-accent">case studies</span>
        </h1>
        <p className="mt-8 max-w-[400px] text-[14.5px] leading-[1.4]">
          Four projects that shaped how I think about design — from research to pixels,
          and everything in between. Click any project to read the full story.
        </p>
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex h-[54px] items-center gap-3 rounded-lg border border-line bg-white/60 px-5 text-[12.5px] transition-colors hover:border-brand hover:text-brand"
        >
          View My UI/UX Resume
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </Container>

      <Container className="mt-16 lg:mt-[148px]">
        <WorksGrid />
      </Container>

      <CtaCard />
    </>
  );
}
