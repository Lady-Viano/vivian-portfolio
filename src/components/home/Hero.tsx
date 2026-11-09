import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Hero() {
  return (
    <section className="hero-ribbons relative overflow-hidden">
      <Container className="grid items-end gap-10 pt-16 lg:min-h-[723px] lg:grid-cols-[583px_512px] lg:gap-0 lg:pt-0">
        <div className="self-center">
          <p className="font-script text-[40px] leading-none text-ink lg:text-[42px]">
            Hey there, I am
          </p>
          <h1 className="name-gradient mt-2 font-display text-[38px] leading-[1.15] font-bold sm:text-[44px] lg:text-[46px]">
            Vivian Obidiegwu
          </h1>
          <p className="mt-6 max-w-[445px] text-[15px] leading-[1.4] text-ink">
            I like making things that are easy to use, good to look at, and worth
            remembering. I care about the little details that make a difference.
          </p>
          <div className="mt-7 flex flex-wrap gap-6">
            <Link
              href="/ui-ux-works"
              className="inline-flex h-12 w-[180px] items-center justify-center rounded-md bg-brand text-[12px] text-white transition-colors hover:bg-brand-dark"
            >
              View UI/UX Works
            </Link>
            <Link
              href="/graphic-design"
              className="inline-flex h-12 w-[180px] items-center justify-center rounded-md border border-ink bg-white/40 text-[12px] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Graphic Design
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
          <Image
            src="/images/vivian-hero.png"
            alt="Portrait of Vivian Obidiegwu"
            width={1080}
            height={1176}
            preload
            sizes="(min-width: 1024px) 512px, 420px"
            className="h-auto w-full [mask-image:linear-gradient(to_right,transparent_0%,#000_6%,#000_94%,transparent_100%)]"
          />
        </div>
      </Container>
    </section>
  );
}
