"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-[1000] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-[#8DC53E] text-2xl text-black shadow-[0_4px_6px_rgba(0,0,0,0.2)] sm:bottom-8 sm:right-8 sm:h-[50px] sm:w-[50px] sm:text-[38px]"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
