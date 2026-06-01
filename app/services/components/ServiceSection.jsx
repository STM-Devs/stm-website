"use client";

import { motion } from "framer-motion";
import { cx } from "../../Data";
import { Container } from "../../Container";

export const fadeUp = {
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

export default function ServiceSection({ id, eyebrow, title, className, children }) {
  return (
    <div id={id}>
      <section
        className={cx(
          "relative flex min-h-[600px] items-center justify-center overflow-hidden px-4 py-8 sm:py-12 md:min-h-[720px] md:py-16",
          className
        )}
      >
        <div className="relative w-full rounded-lg overflow-hidden object-center">
          <Container className="px-4 sm:px-6 md:px-8">
            <div className="items-center rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:p-6 md:p-8 lg:p-10">
              <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
                <motion.div variants={fadeUp}>
                  <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
                    {eyebrow}
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  className="mx-auto mt-4 sm:mt-6 max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] sm:leading-[1.05] md:leading-[1.02] tracking-[-0.04em] text-[#414042]"
                >
                  {title}
                </motion.h1>
                {children}
              </motion.div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
