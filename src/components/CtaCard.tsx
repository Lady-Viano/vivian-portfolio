import Link from "next/link";

export default function CtaCard() {
  return (
    <section className="flex justify-center px-5 py-24 lg:pt-[128px] lg:pb-[128px]">
      <div className="flex w-full max-w-[306px] flex-col items-center rounded-3xl bg-mist px-6 pt-8 pb-8">
        <p className="text-[14.5px] text-ink">Interested in working together?</p>
        <Link
          href="/contact"
          className="mt-[22px] inline-flex h-12 w-[180px] items-center justify-center rounded-full bg-brand text-[12px] font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
