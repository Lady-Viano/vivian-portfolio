import { site } from "@/lib/site";

const iconClass =
  "flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gradient-to-br from-[#9a4fcf] to-[#6f45a0] text-white transition-opacity hover:opacity-85";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-[20px]">
      <a href={site.linkedin} aria-label="LinkedIn" className={iconClass} target="_blank" rel="noreferrer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56v4.92h-4v-11z" />
        </svg>
      </a>
      <a href={site.x} aria-label="X (Twitter)" className={iconClass} target="_blank" rel="noreferrer">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2z" />
        </svg>
      </a>
      <a href={`mailto:${site.email}`} aria-label="Email" className={iconClass}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      </a>
    </div>
  );
}
