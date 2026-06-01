"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, siteData } from "../Data";
import { Section } from "./Section";

export function ProcessSection() {

  const arrowElements = [];
  for (let i = 0; i < 3; i++) {
    arrowElements.push(<img className="arrow-img" key={i} src={`/arrow.png`} alt={`Step ${i + 1}`} width={448} height={120} loading="lazy" />);
  }

  return (
    <Section
      id="process"
      eyebrow="Process"
      title="We guide you step by step, from planning your strategy to growing your business."
      body="We use a clear process for every project, so you always know what to expect and can easily track progress."
      className=""
      innerClassName="rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:p-6 md:p-8 lg:p-10"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-[#DDE4DE] xl:block" />
        {siteData.process.map((step) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            className="relative rounded-[1.75rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)]"
          >
            <motion.div
              whileInView={{ scale: [0.9, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#8DC53E] text-sm font-bold text-[#414042]"
            >
              <p className="font-semibold text-lg">{step.number}</p>
            </motion.div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#414042]">{step.title}</h3>
            <p className="mt-3 text-base leading-7 text-[#5E645F]">{step.body}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="arrow-container">
        <div className="arrow-box">{arrowElements}</div>
      </div>
    </Section>
  );
}
