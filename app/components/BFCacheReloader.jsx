"use client";

import { useEffect } from "react";

/**
 * Forces a real navigation when the browser restores the page from the
 * back-forward cache (bfcache). Without this, framer-motion's
 * `whileInView` + `viewport={{ once: true }}` sections can stay at their
 * initial hidden state on Back navigation because the IntersectionObserver
 * does not re-fire on bfcache restore.
 */
export default function BFCacheReloader() {
  useEffect(() => {
    const handler = (event) => {
      if (event.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", handler);
    return () => window.removeEventListener("pageshow", handler);
  }, []);

  return null;
}
