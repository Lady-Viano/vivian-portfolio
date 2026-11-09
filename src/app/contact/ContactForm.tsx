"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const inputClass =
  "mt-[14px] w-full rounded-md border border-chip-border bg-white px-[10px] text-[12.5px] text-ink placeholder:text-[#8f8c90] outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

// No backend yet: submitting opens the visitor's mail app with the message
// pre-filled. Swap this for an API route (e.g. Resend or Formspree) later.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `New project enquiry: ${data.get("project")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-fit rounded-lg border border-brand bg-white px-6 pt-[32px] pb-8"
    >
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-[23px]">
        <label className="block text-[12px]">
          Name
          <input name="name" required autoComplete="name" placeholder="Your name" className={`${inputClass} h-[38px]`} />
        </label>
        <label className="block text-[12px]">
          Email
          <input name="email" type="email" required autoComplete="email" placeholder="Your email" className={`${inputClass} h-[38px]`} />
        </label>
      </div>

      <label className="mt-[24px] block text-[12px]">
        Type of Project
        <input name="project" required placeholder="Project name" className={`${inputClass} h-[38px]`} />
      </label>

      <label className="mt-[24px] block text-[12px]">
        Tell me about your project
        <textarea
          name="message"
          required
          rows={6}
          placeholder="What are you working on? What problem are you trying to solve?"
          className={`${inputClass} h-[140px] resize-y py-[12px]`}
        />
      </label>

      <button
        type="submit"
        className="mt-[24px] h-[48px] w-full rounded-md bg-brand text-[12.5px] text-white transition-colors hover:bg-brand-dark"
      >
        Send a message
      </button>

      <p className="mt-[24px] text-center text-[12px] text-[#7d7a7e]" aria-live="polite">
        {sent
          ? "Your mail app should open with the message ready to send."
          : "I read every message and respond within 24 hours."}
      </p>
    </form>
  );
}
