"use client";

import CRMPage from "./crm";
import { NavBar } from "../components/NavBar";
import { Footer } from "../Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F6F8F7] text-[#414042]">
      <NavBar />
      <CRMPage />
      <Footer />
    </div>
  );
}
