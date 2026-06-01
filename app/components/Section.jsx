"use client";

import { motion } from "framer-motion";
import { cx, fadeUp } from "../Data";

export function Section({ id, eyebrow, title, body, children, className, titleClassName, bodyClassName, innerClassName, centerHeader }) {
  const header = (eyebrow || title || body) && (
    <motion.div
      className={cx("mb-12 max-w-2xl", centerHeader && "mx-auto text-center")}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex rounded-full border border-[#E6EBE7] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className={cx("text-2xl font-semibold tracking-tight text-[#414042] sm:text-3xl md:text-5xl", titleClassName)}>
          {title}
        </h2>
      )}
      {body && <p className={cx("mt-5 text-lg leading-8 text-[#5E645F]", bodyClassName)}>{body}</p>}
    </motion.div>
  );

  return (
    <section id={id} className={cx("px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        {innerClassName ? (
          <div className={innerClassName}>
            {header}
            {children}
          </div>
        ) : (
          <>
            {header}
            {children}
          </>
        )}
      </div>
    </section>
  );
}
