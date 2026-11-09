"use client";

import Image from "next/image";
import { caseStudies } from "@/lib/caseStudies";
import { useHashModal } from "@/lib/useHashModal";
import Modal from "../Modal";
import CaseStudyContent from "./CaseStudyContent";

type Project = {
  title: string;
  subtitle: string;
  tags: string[];
  meta?: string;
  image: string;
  caseStudy?: string;
  comingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Sentinel GRC Advisory",
    subtitle: "Business Website · Mobile and Web Design",
    tags: ["Product Strategy", "UI Design", "Prototyping"],
    meta: "Sole Product Designer · 3 months",
    image: "sentinel",
    caseStudy: "sentinel",
  },
  {
    title: "Talent Flow",
    subtitle: "Learning Platform . Product Design",
    tags: ["UX Research", "UI Design", "Prototyping"],
    meta: "UI/UX Designer · 2 months",
    image: "talent-flow",
    caseStudy: "talent-flow",
  },
  {
    title: "Chuks Kitchen",
    subtitle: "Food Ordering App . Mobile App Design",
    tags: ["User Flow", "UI Design", "Prototyping"],
    meta: "Product Designer · 2 months",
    image: "chuks-kitchen",
    caseStudy: "chuks-kitchen",
  },
  {
    title: "Minzo",
    subtitle: "Health Directory App · Mobile App Design",
    tags: ["Landing Page", "UI Design", "Prototyping"],
    image: "minzo",
    comingSoon: true,
  },
];

function CardBody({ p }: { p: Project }) {
  return (
    <>
      <div className="relative aspect-[1102/810] overflow-hidden">
        <Image
          src={`/images/projects/${p.image}.png`}
          alt={`${p.title} project preview`}
          fill
          sizes="(min-width: 768px) 552px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="px-6 pt-6 pb-10 lg:px-[44px] lg:pt-6 lg:pb-[36px]">
        <ul className="flex flex-wrap gap-3">
          {p.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-tag px-[10px] py-[11px] text-[12px] leading-none text-tag-ink">
              {tag}
            </li>
          ))}
        </ul>
        <h2 className="mt-7 font-display text-[24px] font-semibold">{p.title}</h2>
        <p className="mt-2 text-[15px]">{p.subtitle}</p>
        {p.comingSoon ? (
          <p className="mt-4 font-script text-[24px] leading-none text-tag-ink">Coming Soon!</p>
        ) : (
          <p className="mt-6 text-[12px]">{p.meta}</p>
        )}
      </div>
    </>
  );
}

export default function WorksGrid() {
  const { active, open, close } = useHashModal(caseStudies.map((c) => c.slug));
  const study = caseStudies.find((c) => c.slug === active);

  return (
    <>
      <div className="mx-auto grid max-w-[1190px] gap-10 md:grid-cols-2 lg:gap-x-[84px] lg:gap-y-[60px]">
        {projects.map((p) => {
          const card = "group block w-full overflow-hidden rounded-[20px] bg-white text-left";
          return p.caseStudy ? (
            <button
              key={p.title}
              type="button"
              onClick={() => open(p.caseStudy!)}
              aria-label={`Read the ${p.title} case study`}
              className={`${card} cursor-pointer transition-shadow hover:shadow-[0_12px_40px_-16px_rgba(74,61,93,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand`}
            >
              <CardBody p={p} />
            </button>
          ) : (
            <article key={p.title} className={card}>
              <CardBody p={p} />
            </article>
          );
        })}
      </div>

      <Modal open={!!study} onClose={close} labelledBy="modal-title" className="max-w-[900px] rounded-[28px] bg-white sm:rounded-[38px]">
        {study && <CaseStudyContent study={study} onClose={close} />}
      </Modal>
    </>
  );
}
