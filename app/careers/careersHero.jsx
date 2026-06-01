import React from 'react';

import { motion } from "framer-motion";

const cx = (...classes) => classes.filter(Boolean).join(" ");

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

function Container({ children, className }) {
  return <div className={cx("mx-auto max-w-7xl px-4 sm:px-6 md:px-8", className)}>{children}</div>;
}


const careersHero = () => {
 return (
    <section className="careers-hero relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-24 md:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_75%_15%,rgba(141,197,62,0.20),transparent_25%),linear-gradient(180deg,#FFFFFF_0%,#F6F8F7_100%)]" />
      <Container>
        <div className="grid items-center gap-6 rounded-2xl border border-[#E6EBE7] bg-white/80 p-4 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:gap-8 sm:rounded-[2rem] sm:p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
                Careers at STM
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-[#414042] sm:mt-6 sm:text-4xl sm:leading-[1.05] sm:tracking-[-0.04em] md:text-5xl lg:text-6xl"
            >
              Join a team building smarter <span className="text-[#7FAF2D] italic">digital growth</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-7 text-[#5E645F] sm:mt-6 sm:text-lg sm:leading-8">
              We partner with ambitious brands, move fast, solve real problems, and focus on measurable results. If you like
              clarity, challenge, and impact, you’ll feel at home here.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="col-span-2 h-40 rounded-[1.5rem] bg-[linear-gradient(135deg,#DCEBC1,#F7FAF5)] p-2 shadow-sm sm:h-48 sm:rounded-[1.75rem] sm:p-3 md:h-56">
              <div className="h-full rounded-[1.2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(141,197,62,0.25),transparent_18%),linear-gradient(135deg,#2C2E2C,#4A4D4A)] sm:rounded-[1.35rem]">
                <img loading="lazy" src="/career-desktop2-small.webp" alt="STM Careers Header" width={800} height={400} className="h-full w-full rounded-[1.2rem] object-cover sm:rounded-[1.35rem]" />
              </div>
            </div>
            <div className="h-24 rounded-[1.25rem] bg-[linear-gradient(135deg,#EAF5DA,#F8FBF5)] p-2 shadow-sm sm:h-32 sm:rounded-[1.5rem] sm:p-3 md:h-36">
              <div className="h-full rounded-[1rem] sm:rounded-[1.2rem]">
                <img loading="lazy" src="/career-desktop-small.webp" alt="STM Careers Header" width={400} height={240} className="h-full w-full rounded-[1rem] object-cover sm:rounded-[1.2rem]" />
              </div>
            </div>
            <div className="h-24 rounded-[1.25rem] bg-[linear-gradient(135deg,#F3F6F3,#EAF5DA)] p-2 shadow-sm sm:h-32 sm:rounded-[1.5rem] sm:p-3 md:h-36">
              <div className="h-full rounded-[1rem] sm:rounded-[1.2rem]">
                <img loading="lazy" src="/career-desktop3-small.webp" alt="STM Careers Header" width={400} height={240} className="h-full w-full rounded-[1rem] object-cover sm:rounded-[1.2rem]" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default careersHero;