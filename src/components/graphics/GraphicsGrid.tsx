"use client";

import Image from "next/image";
import { graphicProjects } from "@/lib/graphicProjects";
import { useHashModal } from "@/lib/useHashModal";
import Modal from "../Modal";
import GraphicProjectContent from "./GraphicProjectContent";

export default function GraphicsGrid() {
  const { active, open, close } = useHashModal(graphicProjects.map((p) => p.slug));
  const project = graphicProjects.find((p) => p.slug === active);

  return (
    <>
      <div className="mx-auto grid max-w-[1190px] gap-10 md:grid-cols-2 lg:gap-x-[84px] lg:gap-y-[60px]">
        {graphicProjects.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => open(p.slug)}
            aria-label={`View ${p.title} designs`}
            className="group block w-full cursor-pointer overflow-hidden rounded-[20px] bg-white text-left transition-shadow hover:shadow-[0_12px_40px_-16px_rgba(74,61,93,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <div className="flex aspect-[1102/810] items-center justify-center gap-5 overflow-hidden px-8" style={{ backgroundColor: p.bg }}>
              {p.images.slice(0, 2).map((img, i) => (
                <div
                  key={img.src}
                  className={`relative aspect-[254/358] w-[40%] drop-shadow-[0_10px_18px_rgba(0,0,0,0.22)] transition-transform duration-500 ${
                    i === 0 ? "-rotate-3 group-hover:-rotate-6" : "rotate-3 group-hover:rotate-6"
                  }`}
                >
                  <Image src={img.src} alt="" fill sizes="(min-width: 768px) 220px, 40vw" className="object-contain" />
                </div>
              ))}
            </div>
            <div className="px-6 pt-6 pb-10 lg:px-[44px] lg:pt-6 lg:pb-[36px]">
              <ul className="flex flex-wrap gap-3">
                {p.tags.slice(0, 3).map((tag) => (
                  <li key={tag} className="rounded-full bg-tag px-[10px] py-[11px] text-[12px] leading-none text-tag-ink">
                    {tag}
                  </li>
                ))}
              </ul>
              <h2 className="mt-7 font-display text-[24px] font-semibold">{p.title}</h2>
              <p className="mt-2 text-[15px]">{p.subtitle}</p>
            </div>
          </button>
        ))}
      </div>

      <Modal open={!!project} onClose={close} labelledBy="modal-title" className="max-w-[900px] rounded-[28px] sm:rounded-[48px]">
        {project && <GraphicProjectContent project={project} onClose={close} />}
      </Modal>
    </>
  );
}
