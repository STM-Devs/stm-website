"use client";

import PeopleAndCulture from "./people-and-culture.jsx";
import { NavBar } from "../components/NavBar";
import { Footer } from "../Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFF] text-[#414042]">
      <NavBar />
      <PeopleAndCulture />
      <Footer />
    </div>
  );
}
