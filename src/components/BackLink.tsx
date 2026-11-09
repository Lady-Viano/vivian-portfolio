import Link from "next/link";

export default function BackLink() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-4 text-[12px] text-ink transition-colors hover:text-brand"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
        <path d="M20 12H4M10 6l-6 6 6 6" />
      </svg>
      Back to home
    </Link>
  );
}
