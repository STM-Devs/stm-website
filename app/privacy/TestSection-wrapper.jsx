"use client";

import ScrollDesktop from "./TestSection-Desktop";
import ScrollMobile from "./TestSection-Mobile";

export default function ScrollSection() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <ScrollDesktop />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <ScrollMobile />
      </div>
    </>
  );
}