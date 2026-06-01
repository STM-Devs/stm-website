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

const LifeAtSTMSection = () => {

  const items = [{
    src: 'https://www.stmconsulting.io/wp-content/uploads/2025/12/leadership-program.jpg'
  }, {
    src: 'https://www.stmconsulting.io/wp-content/uploads/2025/12/Stronger-Together-1.jpg'
  }, {
    src: 'https://www.stmconsulting.io/wp-content/uploads/2025/12/Stronger-Together.jpg'
  }, {
    src: 'https://www.stmconsulting.io/wp-content/uploads/2026/04/stm-events-everydaylife.jpg'
  }, {
    src: 'https://www.stmconsulting.io/wp-content/uploads/2025/12/Team-event.jpg'
  }, {
    src: 'https://www.stmconsulting.io/wp-content/uploads/2024/05/IMG_0473-copy.jpg'
  }];

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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#EFEFEF]">{title}</h2>
        {body && <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-[#FFF]">{body}</p>}
      </motion.div>
    );
  }

  return (
    <section className="bg-[#414042] py-12 sm:py-16 md:py-20 lg:py-24 text-white">
      <Container>
        <SectionHeader
          center
          eyebrow="Life at STM"
          title="A glimpse inside the team"
          body="We work hard, move fast, and celebrate wins together. Here are a few moments from our journey so far."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,#313431,#1F211F)] p-2 sm:p-3"
            >
              <img loading="lazy" src={item.src} alt="Life at STM" className="h-44 sm:h-52 md:h-56 w-full rounded-[1rem] sm:rounded-[1.3rem] object-cover" width={600} height={480} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default LifeAtSTMSection;
