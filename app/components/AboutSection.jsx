"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { cx, fadeUp, stagger } from "../Data";
import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section
      className="app-bckgrnd sm:mt-10 max-w-8xl mx-auto"
      id="about"
      eyebrow="About"
      title="Our agency is designed to focus on performance, transparency, and delivering value for your business."
      body="We bring together strategy, creative ideas, with clear, visible results in one system. This allows brands grow with confidence."
      innerClassName="rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur p-5 sm:p-6 md:p-8 lg:p-10"
      centerHeader
    >
        <div className="mx-auto w-full max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col rounded-[1.5rem] border border-[#E6EBE7] bg-white p-5 shadow-[0_8px_24px_rgba(24,32,28,0.04)] sm:rounded-[2rem] sm:p-8 md:p-10"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#858C86] sm:text-sm">Why brands choose STM</div>
              <p className="mt-4 text-base leading-7 text-[#5E645F] sm:mt-5 sm:text-lg sm:leading-8">
                We don't rely on aimless tactics. Instead, we define unified approach for acquisition, retention, analytics, and messaging.
                This approach gives you peace of mind and critical data to focus on what matters.
              </p>
            </div>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4">
              {[
                "Expertise in Africa",
                "Data-backed decision making",
                "Clear communication and delivery rhythm",
                "Built to scale, not just launch",
              ].map((item) => (
                <div key={item} className="group flex items-start gap-3 rounded-[1.25rem] border border-[#E6EBE7] bg-white p-4 shadow-[0_8px_24px_rgba(24,32,28,0.03)] transition-transform duration-450 hover:bg-[#F6FAF3] sm:gap-4 sm:rounded-[1.5rem] sm:p-5 sm:hover:translate-x-4 lg:hover:translate-x-8">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#8DC53E]" />
                  <span className="text-sm font-medium text-[#414042] sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
    </Section>
  );
}
