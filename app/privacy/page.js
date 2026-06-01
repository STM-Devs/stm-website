"use client";

import Privacy from "./privacy.jsx";
import { NavBar } from "../components/NavBar";
import { Footer } from "../Footer";
import ScrollSection from "./TestSection-wrapper.jsx";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#F6F8F7] text-[#414042]">
      <NavBar />
      <Privacy />
      <Footer />
    </div>
  );
}
