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

const PeopleAndCultureHero = () => {
  return (
    <div>
      <section className="pc-hero relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-24 md:pt-20">
        <div className='relative rounded-lg overflow-hidden object-center w-full'>
          <Container>
            <div className="items-center rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:p-6 md:p-8 lg:p-10">
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeUp}>
                  <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
                    People & Culture at STM
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  className="mt-4 sm:mt-6 max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] sm:leading-[1.05] md:leading-[1.02] tracking-[-0.04em] text-[#414042]"
                >
                  Built on <span className="text-[#7FAF2D] italic">expertise</span>. Driven by <span className="text-[#7FAF2D] italic">collaboration</span>.
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  A team of specialists working seamlessly to deliver consistent, high-quality outcomes across every market we serve.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
              >
              </motion.div>
            </div>
          </Container>
        </div>
      </section >
    </div >
  )
};

export default PeopleAndCultureHero;
