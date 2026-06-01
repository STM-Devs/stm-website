import React from 'react'
import PortfolioPage from './Portfolio';
import { motion } from "framer-motion";

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

const OpenRoles = () => {
    return (
        <div className="min-w-0 rounded-2xl border border-white/70 bg-[#F6F8F7] p-4 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] sm:rounded-[1.8rem] sm:p-6 md:p-8 lg:p-12">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeUp}>
                    <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
                        Open Roles
                    </span>
                </motion.div>
                <motion.h1
                    variants={fadeUp}
                    className="mx-auto mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#414042] sm:mt-6 sm:text-3xl sm:leading-[1.1] sm:tracking-[-0.04em] md:text-3xl lg:text-5xl"
                >
                    Opportunities to join the team:
                </motion.h1>
            </motion.div>
            <PortfolioPage />
        </div>
    )
};

export default OpenRoles;