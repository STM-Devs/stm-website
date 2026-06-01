"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scaleIn } from "../Data";
import { Section } from "./Section";
import { Button } from "./Buttons";

export function CTASection() {
  
  const [open, setOpen] = React.useState(false);

  function handleContactBtn() {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
      window.location.href = "/#contact";
    }
  }

  return (
    <Section className="bg-[#F6F8F7] py-0 sm:py-0 md:py-0">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="rounded-[2.25rem] bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-6"
      >
        <div className="rounded-[1.9rem] border border-white/70 bg-white p-8 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-14">
          <span className="inline-flex rounded-full bg-[#F1F4F2] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F]">
            Let&apos;s build your next growth phase
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-[#414042] sm:text-3xl md:text-5xl">
            Ready to grow with a partner that thinks beyond campaigns?
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button onClick={handleContactBtn} icon={<ArrowRight size={16} />}>Contact Us</Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
