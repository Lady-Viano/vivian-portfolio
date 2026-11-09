"use client";

import Image from "next/image";
import type { GraphicProject } from "@/lib/graphicProjects";
import { useDragScroll } from "@/lib/useDragScroll";
import { CloseButton, ModalFooter } from "../Modal";

export default function GraphicProjectContent({
  project,
  onClose,
}: {
  project: GraphicProject;
  onClose: () => void;
}) {
  const dragScroll = useDragScroll<HTMLDivElement>();

  return (
    <article className="relative px-5 pt-[37px] pb-[37px] sm:px-[35px]" style={{ backgroundColor: project.bg }}>
      <div className="flex items-start justify-between gap-4">
        <ul className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-brand-deep/[0.09] px-[10px] py-3 text-[12px] leading-none text-tag-ink">
              {tag}
            </li>
          ))}
        </ul>
        <CloseButton onClick={onClose} className="mt-1 sm:mr-1" />
      </div>

      <h2 id="modal-title" className="mt-[26px] font-display text-[23px] leading-tight font-bold">
        {project.title}
      </h2>
      <p className="mt-2 text-[12px]">{project.subtitle}</p>
      <p className="mt-[28px] max-w-[815px] text-[14.8px] leading-[1.42] whitespace-pre-line">{project.description}</p>

      <div
        {...dragScroll}
        tabIndex={0}
        aria-label={`${project.title} designs`}
        className="no-scrollbar -mx-5 mt-12 flex cursor-grab snap-x snap-mandatory scroll-pl-5 gap-[44px] overflow-x-auto px-5 select-none sm:scroll-pl-[22px] active:cursor-grabbing sm:mx-0 sm:pl-[22px] sm:pr-0"
      >
        {project.images.map((img) => (
          <div key={img.src} className="relative aspect-[254/358] w-[220px] shrink-0 snap-start sm:w-[255px]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              draggable={false}
              sizes="255px"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <p className="mt-[52px] flex items-center gap-[14px] text-[12px] text-[#5d5a5f]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-ink" aria-hidden>
          <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5a1.5 1.5 0 0 1 3 0V11m0-.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-.5a6 6 0 0 1-4.7-2.3L5 15.5a1.5 1.5 0 0 1 2.3-1.9L9 15.5" />
          <path d="M3 4.5h5M3 4.5l1.5-1.5M3 4.5L4.5 6" />
        </svg>
        Swipe to view each piece
      </p>

      <ModalFooter
        className="mt-[33px] border-black/10"
        backLabel="Back to Graphic Design"
        onBack={onClose}
        thanks={
          <>
            {project.shortName} · Thanks for Watching <span aria-label="love">❤️</span>
          </>
        }
      />
    </article>
  );
}
