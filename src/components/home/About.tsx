import Image from "next/image";
import Container from "../Container";

export default function About() {
  return (
    <section id="about" className="py-20 lg:pt-[128px] lg:pb-[128px]">
      <Container className="grid items-center gap-12 lg:grid-cols-[386px_1fr] lg:gap-[89px]">
        <div className="mx-auto w-full max-w-[320px] rounded-[50%] bg-gradient-to-br from-[#9a4fcf] to-[#5f4783] p-[4px] lg:mx-0 lg:ml-2 lg:max-w-none">
          <div className="relative aspect-[386/419] overflow-hidden rounded-[50%]">
            <Image
              src="/images/vivian-about.png"
              alt="Vivian Obidiegwu"
              fill
              sizes="(min-width: 1024px) 386px, 320px"
              className="scale-[1.04] object-cover"
            />
          </div>
        </div>

        <div>
          <p className="font-script text-[26px] leading-none text-accent">
            How I got here...
          </p>
          <h2 className="mt-1 font-display text-[34px] leading-tight font-bold lg:text-[38px]">
            About Me
          </h2>
          <div className="mt-7 space-y-[21px] text-[15px] leading-[1.4] text-ink sm:text-justify">
            <p>
              I started out studying Engineering, but I was always drawn to the creative
              side of things. Alongside school, I spent years exploring graphic design,
              creating visual work, and learning how thoughtful design can shape the way
              people understand an idea.
            </p>
            <p>
              That curiosity eventually led me into product design. It changed the way I
              look at design. I don&apos;t just want something to look good. I want to
              understand the problem behind it, make sense of what people need, and turn
              that thinking into an experience that feels simple and intentional.
            </p>
            <p>
              Today, I work across product design, UI/UX, and visual design. I enjoy
              moving between the bigger picture and the little details, whether I&apos;m
              shaping a digital product, refining an interface, or creating visuals that
              give an idea its identity.
              <br />
              I&rsquo;m happiest when I&rsquo;m figuring things out, asking better
              questions, and turning something that started as an idea into something
              people can actually use, understand, and connect with.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
