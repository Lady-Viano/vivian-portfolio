import Image from "next/image";
import Container from "../Container";

const services = [
  {
    title: "UI/UX Design",
    icon: "uiux",
    bg: "bg-card-rose",
    items: [
      "User Research & Interviews",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Usability Testing",
      "Design Systems",
    ],
  },
  {
    title: "Graphic Design",
    icon: "graphic",
    bg: "bg-card-blue",
    items: [
      "Poster & Print Design",
      "Editorial & Layout",
      "Packaging Design",
      "Social Media Kits",
      "Marketing Collaterals",
    ],
  },
  {
    title: "Brand Identity",
    icon: "brand",
    bg: "bg-card-sage",
    items: [
      "Logo & Visual Identity",
      "Brand Strategy & Voice",
      "Colour & Typography Systems",
      "Brand Guidelines",
      "Stationery & Collateral",
    ],
  },
  {
    title: "Product Strategy",
    icon: "strategy",
    bg: "bg-card-sand",
    items: [
      "Product Discovery",
      "Information Architecture",
      "User Journey Mapping",
      "Competitive Analysis",
      "Workshop Facilitation",
    ],
  },
];

const tools = [
  { name: "Figma", icon: "figma" },
  { name: "Framer", icon: "framer" },
  { name: "Canva", icon: "canva" },
  { name: "CorelDRAW", icon: "coreldraw" },
  { name: "Photoshop", icon: "photoshop" },
  { name: "Pixellab", icon: "pixellab" },
  { name: "Miro", icon: "miro" },
  { name: "Google Form", icon: "google-form" },
  { name: "Notion", icon: "notion" },
  { name: "ChatGPT", icon: "chatgpt" },
  { name: "Claude", icon: "claude" },
];

export default function Services() {
  return (
    <section id="services" className="bg-mist py-20 lg:pt-[128px] lg:pb-[128px]">
      <Container>
        <p className="font-script text-[26px] leading-none text-accent">What I do</p>
        <h2 className="mt-1 font-display text-[32px] leading-tight font-bold lg:text-[38px]">
          Services &amp; expertise
        </h2>
        <p className="mt-4 max-w-[576px] text-[15px] leading-[1.4] sm:text-justify">
          I enjoy designing digital products and visual experiences that are thoughtful,
          easy to understand, and enjoyable to use. I like bringing clarity to ideas while
          giving them a visual personality of their own.
        </p>

        <div className="mt-[52px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[52px]">
          {services.map((s) => (
            <article
              key={s.title}
              className={`${s.bg} rounded-3xl pt-10 pr-4 pb-10 pl-[30px] lg:min-h-[326px]`}
            >
              <Image
                src={`/images/icons/${s.icon}.png`}
                alt=""
                width={84}
                height={84}
                className="-ml-[6px] h-[42px] w-[42px]"
              />
              <h3 className="mt-[18px] font-display text-[21px] font-semibold">
                {s.title}
              </h3>
              <ul className="mt-[14px] space-y-[17px] pl-2 text-[12px] leading-[1.4]">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-[10px]">
                    <span aria-hidden>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div id="toolkit" className="mt-20 lg:mt-[100px]">
          <h2 className="font-display text-[28px] leading-tight font-bold lg:text-[30px]">
            My Toolkit
          </h2>
          <p className="mt-4 text-[15px]">These are the tools I work with.</p>

          <ul className="mt-10 grid grid-cols-2 gap-[19px] sm:grid-cols-4 lg:grid-cols-8">
            {tools.map((t) => (
              <li
                key={t.name}
                className="flex h-[53px] items-center justify-center gap-3 rounded-lg border border-chip-border text-[12px]"
              >
                <Image
                  src={`/images/tools/${t.icon}.png`}
                  alt=""
                  width={60}
                  height={60}
                  className="h-[26px] w-[26px]"
                />
                {t.name}
              </li>
            ))}
            <li className="flex h-[53px] items-center justify-center gap-3 rounded-lg border border-[#b9b6b9] text-[12px] text-[#a8a5a8]">
              <span aria-hidden className="text-xl leading-none">+</span>
              more
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
