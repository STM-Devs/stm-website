import React from 'react';
import { motion } from "framer-motion";
import {
  LaptopMinimalCheck,
  ChartNoAxesCombined,
  BadgeCheck,
  ClockArrowUp,
  GraduationCap,
  BicepsFlexed,
} from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const pageData = {
  benefits: [
    {
      icon: LaptopMinimalCheck,
      title: "Hybrid Work",
      body: "Work with flexibility while staying connected to a collaborative team rhythm.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Growth-Focused",
      body: "You’ll sharpen your thinking, expand your skillset, and take on meaningful responsibility.",
    },
    {
      icon: BadgeCheck,
      title: "Real Impact",
      body: "Your work won’t sit in a deck. It will influence campaigns, performance, and client growth.",
    },
    {
      icon: ClockArrowUp,
      title: "Flexible Hours",
      body: "We care more about quality output and accountability than rigid clock-watching.",
    },
    {
      icon: GraduationCap,
      title: "Learning Support",
      body: "We encourage experimentation, strategic thinking, and continuous improvement.",
    },
    {
      icon: BicepsFlexed,
      title: "Strong Team",
      body: "Join a team that values clear communication, ownership, and ambition.",
    },
  ],
};

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

const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center pc-hero">
      <Container>
        <div className="items-center rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:p-6 md:p-8 lg:p-10">
          <SectionHeader
            center
            eyebrow="Benefits"
            title="What you get"
            body="We invest in the team’s growth, well-being, and environment so people can do their best work."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
          {pageData.benefits.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group rounded-[1.25rem] sm:rounded-[1.75rem] border border-[#E6EBE7] bg-white p-5 sm:p-6 md:p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)] transition hover:bg-[#F6FAF3] duration-450"
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
    </section >
  );
}

export default BenefitsSection;