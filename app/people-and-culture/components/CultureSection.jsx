import React from 'react';
import { motion } from "framer-motion";
import {
  Briefcase,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

function Container({ children, className }) {
  return <div className={cx("mx-auto max-w-7xl px-4 sm:px-6 md:px-8", className)}>{children}</div>;
}

function SectionHeader({ eyebrow, title, body, center }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cx("mb-8 sm:mb-10 md:mb-12 max-w-3xl", center && "mx-auto text-center")}
    >
      {eyebrow && (
        <span className="mb-3 sm:mb-4 inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#414042]">{title}</h2>
      {body && <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-[#000]">{body}</p>}
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const pageData = {
  culture: [
    {
      icon: Sparkles,
      title: "Strategy-first",
      body: "We solve the right problems before jumping into execution. Every channel has a purpose.",
    },
    {
      icon: Briefcase,
      title: "Performance-led",
      body: "Decisions are driven by data, testing, and curiosity. We optimize relentlessly.",
    },
    {
      icon: HeartHandshake,
      title: "No fluff",
      body: "We value clarity, efficiency, and real impact over busy work and corporate noise.",
    },
  ],
}

const CultureSection = () => {
  return (
    <section className="app-bckgrnd mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mb-6 sm:mb-10 py-8 sm:py-10 bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] rounded-[1.75rem] sm:rounded-[2.5rem] md:rounded-[4rem] shadow-[0_16px_40px_rgba(24,32,28,0.06)] mt-6 sm:mt-10">
      <Container>
        <div className='<div className="grid items-left gap-5 rounded-2xl sm:rounded-[2rem] border border-[#E6EBE7] bg-white/70 p-4 sm:p-6 backdrop-blur md:p-8 lg:w-full lg:grid-cols-[1.05fr_1.05fr] lg:p-10 lg:gap-10">'>
        <SectionHeader
          center
          eyebrow="Culture"
          title="How we work"
          body="Our culture is built on clarity, ownership, and a bias for measurable progress. We care about the thinking behind the work as much as the results."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {pageData.culture.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group rounded-[1.25rem] sm:rounded-[1.75rem] border border-[#E6EBE7] bg-white p-5 sm:p-6 md:p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)]  hover:bg-[#F6FAF3] transition duration-450"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#EAF5DA] text-[#414042] transition group-hover:bg-[#C3E48B] group-hover:text-[#5A7B24] duration-450">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#414042] mt-4 sm:mt-5">{item.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-[#5E645F]">{item.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default CultureSection;
