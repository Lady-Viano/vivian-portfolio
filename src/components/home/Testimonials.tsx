"use client";

import Image from "next/image";
import { useDragScroll } from "@/lib/useDragScroll";

const testimonials = [
  {
    quote:
      "Vivian has a good eye for design, and I like how she pays attention to the little things. She puts real thought into the designs she does for Sentinel and is always looking for ways to make our brand look and feel better.",
    name: "Stacey Patrick",
    role: "Director of Communications - Sentinel GRC Advisory",
    avatar: "stacey",
  },
  {
    quote:
      "Vivian has been a great help with our designs for events and different programs. She's willing to contribute her creativity whenever there's work to be done, and I appreciate all her efforts.",
    name: "Ogbu Esther",
    role: "Director of Marketing and Publicity - EOTI",
    avatar: "esther",
  },
  {
    quote:
      "I really liked seeing the FarmSabi brand come together. Vivian worked on the design materials, and it was nice to see everything start to feel connected.",
    name: "John Ajibade",
    role: "Co-Founder - FarmSabi",
    avatar: "john",
  },
  {
    // TODO: the design crops this card — confirm the full quote, name and role.
    quote:
      "One thing I appreciate about Vivian is that she wants to understand the why behind a design decision. She's curious, pays attention to detail, and is willing to listen, learn and try again when something isn't working. I've enjoyed seeing her grow in confidence and approach.",
    name: "Deborah Ayoola",
    role: "Product designer",
    avatar: "deborah",
  },
];

export default function Testimonials() {
  const dragScroll = useDragScroll<HTMLDivElement>();

  return (
    <section id="testimonials" className="bg-brand-deep pt-20 pb-16 text-white lg:pt-[128px] lg:pb-[96px]">
      <div className="px-5 text-center">
        <p className="font-script text-[26px] leading-none">Testimonials</p>
        <h2 className="mt-2 font-display text-[28px] leading-tight font-semibold lg:text-[31px]">
          Kind words from kind people
        </h2>
        <p className="mt-2 text-[12px] text-white/90">
          A little feedback from the people I&apos;ve had the pleasure of working with.
        </p>
        <p aria-hidden className="mt-9 font-display text-[40px] leading-none">
          &ldquo;
        </p>
      </div>

      <div
        {...dragScroll}
        tabIndex={0}
        aria-label="Testimonials"
        className="no-scrollbar mx-auto mt-12 flex max-w-[1320px] cursor-grab snap-x snap-mandatory gap-12 overflow-x-auto px-5 select-none active:cursor-grabbing lg:mt-[70px] lg:px-0"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex min-h-[320px] w-[300px] shrink-0 snap-start flex-col justify-between rounded-3xl border border-[#8c74b8] px-5 pt-[50px] pb-[44px] sm:w-[326px]"
          >
            <blockquote className="text-[15px] leading-[1.4]">{t.quote}</blockquote>
            <figcaption className="mt-10 flex items-center gap-3">
              <Image
                src={`/images/avatars/${t.avatar}.png`}
                alt=""
                width={96}
                height={96}
                draggable={false}
                loading="eager"
                className="h-[38px] w-[38px] shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="text-[12px]">{t.name}</p>
                <p className="mt-1 text-[11px] leading-[1.35] text-white/90">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-16 flex items-center justify-center gap-3 text-[11px] lg:mt-[110px]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5a1.5 1.5 0 0 1 3 0V11m0-.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-.5a6 6 0 0 1-4.7-2.3L5 15.5a1.5 1.5 0 0 1 2.3-1.9L9 15.5" />
          <path d="M4 4l2 2M3 8h2" />
        </svg>
        Swipe to read each piece
      </p>
    </section>
  );
}
