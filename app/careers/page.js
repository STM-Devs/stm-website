"use client";

import Careers from "./careers";
import { NavBar } from "../components/NavBar";
import { Footer } from "../Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFF] text-[#414042]">
      <NavBar />
      <Careers />
      <Footer />
    </div>
  );
}
