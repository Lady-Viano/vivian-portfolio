import Image from "next/image";
import type { CaseStudy } from "@/lib/caseStudies";
import { CloseButton, ModalFooter } from "../Modal";

const body = "text-[14.5px] leading-[1.45] whitespace-pre-line";

function Callout({ title, text, className }: { title: string; text: string; className: string }) {
  return (
    <section className={`rounded-2xl px-4 pt-[26px] pb-[34px] sm:px-[16px] ${className}`}>
      <h3 className="text-[14px] font-semibold">{title}</h3>
      <p className={`mt-[14px] ${body}`}>{text}</p>
    </section>
  );
}

export default function CaseStudyContent({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <article className="bg-white">
      <header className="sticky top-0 z-10 flex items-center justify-between gap-6 border-b border-line bg-page px-5 py-6 sm:h-[136px] sm:px-[37px]">
        <div>
          <p className="text-[12px]">{study.eyebrow}</p>
          <h2 id="modal-title" className="mt-2 font-display text-[20px] leading-tight font-semibold sm:text-[24px]">
            {study.title}
          </h2>
        </div>
        <CloseButton onClick={onClose} className="sm:mr-[2px]" />
      </header>

      <div className="px-5 pt-[26px] sm:px-[37px]">
        <div className="relative aspect-[1652/1132] overflow-hidden rounded-[20px] sm:rounded-[32px]">
          <Image src={study.hero.src} alt={study.hero.alt} fill sizes="(min-width: 900px) 826px, 100vw" className="object-cover" preload />
        </div>

        <ul className="mt-[49px] flex flex-wrap gap-3">
          {study.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-tag px-[13px] py-[11px] text-[12px] leading-none text-tag-ink">
              {tag}
            </li>
          ))}
        </ul>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-[#9a979b] py-8 sm:grid-cols-[177px_239px_128px_1fr] sm:items-end sm:gap-0">
          {study.meta.map((m) => (
            <div key={m.label} className="sm:pr-6">
              <dt className="text-[11px]">{m.label}</dt>
              <dd className="mt-[6px] text-[14.5px] leading-[1.3]">{m.value}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-12">
          <h3 className="font-display text-[20px] font-semibold text-brand-deep">Overview</h3>
          <p className={`mt-3 ${body}`}>{study.overview}</p>
        </section>

        <Callout title="The problem" text={study.problem} className="mt-[57px] bg-[#fdf2f1] text-ink [&_h3]:text-brand-deep" />

        <section className="mt-[51px]">
          <h3 className="font-display text-[20px] font-semibold text-brand-deep">The Design Process</h3>
          <p className={`mt-4 ${body}`}>{study.processIntro}</p>

          <div className="mt-12 space-y-12">
            {study.steps.map((step, i) => {
              const imageFirst = i % 2 === 1;
              return (
                <div
                  key={step.image.src}
                  className={`grid items-center gap-6 sm:gap-[28px] ${
                    imageFirst ? "sm:grid-cols-[500px_1fr]" : "sm:grid-cols-[295px_500px] sm:justify-between"
                  }`}
                >
                  <div className={imageFirst ? "sm:order-2" : ""}>
                    {step.heading && (
                      <h4 className="mb-[18px] max-w-[240px] text-[15px] leading-[1.4] font-medium text-[#6b4a8e]">
                        {step.heading}
                      </h4>
                    )}
                    <p className={body}>{step.body}</p>
                  </div>
                  <div className={imageFirst ? "sm:order-1" : ""}>
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={step.image.width}
                      height={step.image.height}
                      sizes="(min-width: 640px) 500px, 100vw"
                      style={{ maxWidth: step.image.width / 2 }}
                      className="h-auto w-full rounded-[20px] sm:rounded-[32px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Callout title="The solution" text={study.solution} className="mt-12 bg-[#f2f7ff] text-ink [&_h3]:text-brand-deep" />
        <Callout title="Outcome" text={study.outcome} className="mt-12 bg-brand-deep text-white" />

        <ModalFooter
          className="mt-[49px] mb-[67px] border-line"
          backLabel="Back to UI/UX Works"
          onBack={onClose}
          thanks={`${study.shortName} · Thanks for reading`}
        />
      </div>
    </article>
  );
}
