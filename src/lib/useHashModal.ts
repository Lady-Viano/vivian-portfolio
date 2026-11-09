"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Keeps the open modal in the URL hash (e.g. /ui-ux-works#talent-flow) so a
// project can be linked directly and the browser back button closes it.
export function useHashModal(slugs: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const pushed = useRef(false);
  const key = slugs.join(",");

  useEffect(() => {
    const valid = key.split(",");
    const sync = () => {
      const slug = window.location.hash.slice(1);
      setActive(valid.includes(slug) ? slug : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, [key]);

  const open = useCallback((slug: string) => {
    window.history.pushState(null, "", `#${slug}`);
    pushed.current = true;
    setActive(slug);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    if (pushed.current) {
      pushed.current = false;
      window.history.back();
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return { active, open, close };
}
