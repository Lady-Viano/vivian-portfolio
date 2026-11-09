"use client";

import { useEffect, useRef } from "react";

// Native <dialog> gives us focus trapping, Escape-to-close and the top layer.
export default function Modal({
  open,
  onClose,
  labelledBy,
  className = "",
  children,
}: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
    if (!open) document.documentElement.style.overflow = "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        // A click on the dialog element itself is a click on the backdrop.
        if (e.target === e.currentTarget) onClose();
      }}
      className={`modal-panel m-auto max-h-[calc(100dvh-24px)] w-[calc(100%-24px)] overflow-y-auto overscroll-contain p-0 backdrop:bg-[#1c1626]/55 backdrop:backdrop-blur-[2px] sm:max-h-[calc(100dvh-48px)] ${className}`}
    >
      {/* Focus lands on the panel (not the close button) so no ring shows on open. */}
      {open && (
        <div tabIndex={-1} autoFocus className="outline-none">
          {children}
        </div>
      )}
    </dialog>
  );
}

export function CloseButton({ onClick, className = "" }: { onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close"
      className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#6f6c70] text-[#6f6c70] transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
        <path d="M5 5l14 14M19 5L5 19" />
      </svg>
    </button>
  );
}

export function ModalFooter({
  backLabel,
  onBack,
  thanks,
  className = "",
}: {
  backLabel: string;
  onBack: () => void;
  thanks: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center justify-between gap-4 border-y py-[30px] ${className}`}>
      <button
        type="button"
        onClick={onBack}
        className="group inline-flex items-center gap-3 text-[12px] text-ink transition-colors hover:text-brand"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
          <path d="M21 12H3M9 5l-7 7 7 7" />
        </svg>
        {backLabel}
      </button>
      <p className="text-[12px] text-[#5d5a5f]">{thanks}</p>
    </div>
  );
}
