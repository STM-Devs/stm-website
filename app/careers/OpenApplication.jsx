'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../Data";
import { SendCVModal } from "../components/SendCVModal";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

function Button({ children, variant = "primary", className, ...props }) {
    const styles = {
        primary:
            "bg-[#8DC53E] text-[#414042] shadow-[0_8px_24px_rgba(24,32,28,0.08)] hover:bg-[#7FB436] hover:-translate-y-0.5",
        secondary:
            "border border-[#E6EBE7] bg-white text-[#414042] shadow-sm hover:bg-[#F8FAF9] hover:-translate-y-0.5",
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={cx(
                "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200",
                styles[variant],
                className
            )}
            {...props}
            type="button"
        >
            {children}
        </motion.button>
    );
}

function Container({ children, className }) {
    return <div className={cx("mx-auto max-w-7xl px-0 sm:px-6 md:px-8", className)}>{children}</div>;
}

const OpenRoles = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Container>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="rounded-[2.1rem]"
                >
                    <div className="rounded-2xl sm:rounded-[1.8rem] border border-white/70 bg-[#F6F8F7] p-4 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] sm:p-8 md:p-12">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.div variants={fadeUp}>
                                <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
                                    Connect with us
                                </span>
                            </motion.div>
                            <motion.h1
                                variants={fadeUp}
                                className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#414042] sm:mt-6 sm:text-3xl sm:leading-[1.1] sm:tracking-[-0.04em] md:text-4xl lg:text-5xl"
                            >
                                Don’t see a role that fits?
                            </motion.h1>
                        </motion.div>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5E645F] sm:mt-5 sm:text-lg sm:leading-8">
                            We’re always open to meeting great talent. If you think you’d add value to the team, send us your profile anyway.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
                        <Button variant='secondary' onClick={() => setIsOpen(true)}>
                                Send Your CV
                            </Button>
                        </div>

                        <SendCVModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                    </div>
                </motion.div>
            </Container>
        </div >
    )
}

export default OpenRoles;