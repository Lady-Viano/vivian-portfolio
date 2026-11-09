import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import Container from "@/components/Container";
import CtaCard from "@/components/CtaCard";
import GraphicsGrid from "@/components/graphics/GraphicsGrid";

export const metadata: Metadata = {
  title: "Graphic Design — Vivian Obidiegwu",
  description: "Brand identity, flyers, social media, logo and print design by Vivian Obidiegwu.",
};

// The listing layout mirrors UI/UX Works until a dedicated design is ready.
export default function GraphicDesign() {
  return (
    <>
      <Container className="pt-14 lg:pt-[140px]">
        <BackLink />
        <p className="mt-4 text-[18px] font-semibold text-tag-ink">Graphic Design</p>
        <h1 className="mt-4 font-display text-[34px] leading-[1.15] font-bold sm:text-[42px] lg:text-[46px]">
          Visual design <span className="text-accent">projects</span>
        </h1>
        <p className="mt-8 max-w-[400px] text-[14.5px] leading-[1.4]">
          Brand identities, flyers, social media graphics and more — work for brands,
          communities and clients. Click any project to swipe through the designs.
        </p>
      </Container>

      <Container className="mt-16 lg:mt-[120px]">
        <GraphicsGrid />
      </Container>

      <CtaCard />
    </>
  );
}
