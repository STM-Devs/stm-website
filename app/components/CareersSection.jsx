"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp, stagger, siteData } from "../Data";
import { Section } from "./Section";
import { Button } from "./Buttons";
import { SendCVModal } from "./SendCVModal";

export function CareersSection() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <>
    <Section
      className="app-bckgrnd py-0 sm:py-0 md:py-0"
      id="careers"
      eyebrow="Careers"
      title="Be part of a team that drives smarter digital growth."
      body="Our agency is a place for strategic thinkers, creative problem-solvers, and marketers who care about results."
      innerClassName="rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:p-6 md:p-8 lg:p-10"
      centerHeader
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex h-full flex-col justify-between rounded-[2rem] border border-[#E6EBE7] bg-white p-8 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:p-10"
        >
          <p className="text-lg leading-8 text-[#5E645F]">
            We build our teams on curiosity, accountability, and measurable impact. Our culture thrives by supporting energy, ambition, and high-quality client work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => location.href='/careers#open-roles'} >
              View Roles
            </Button>
            <Button variant="secondary" onClick={() => setIsCVModalOpen(true)}>
              Send Your CV
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5"
        >
          {siteData.culture.map((item) => (
            <motion.div key={item} variants={fadeUp} whileHover={{ y: -4 }} className="group flex items-start gap-3 sm:gap-4 rounded-[1.25rem] sm:rounded-[1.5rem] border border-[#E6EBE7] bg-white p-4 sm:p-5 shadow-[0_8px_24px_rgba(24,32,28,0.03)] transition-transform duration-450 sm:hover:translate-x-4 lg:hover:translate-x-8 hover:bg-[#F6FAF3]">
              <div className="flex items-center gap-3 text-[#414042]">
                <div className="rounded-2xl bg-[#EAF5DA] p-3 text-[#5A7B24]">
                  <Sparkles size={18} />
                </div>
                <span className="text-base font-semibold">{item}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
    <SendCVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </>
  );
}
