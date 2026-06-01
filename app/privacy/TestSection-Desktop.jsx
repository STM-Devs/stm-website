"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  { image: "/stm-waves.webp", text: "Strategy begins with insight." },
  { image: "/stm-works.webp", text: "Design creates connection." },
  { image: "/stm-waves.webp", text: "Technology powers execution." },
  { image: "/stm-works.webp", text: "Data drives optimization." },
];

export default function ScrollDesktop() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[400vh] bg-[#F6F8F7]">
      <div className="sticky top-0 h-screen flex overflow-hidden">

        {/* LEFT - IMAGES */}
        <div className="w-1/2 flex items-center justify-center relative">
          {items.map((item, i) => {
            const start = i / items.length;
            const end = (i + 1) / items.length;

            const y = useTransform(scrollYProgress, [start, end], [120, -120]);
            const opacity = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0, 1, 0]
            );

            return (
              <motion.img
                key={i}
                src={item.image}
                loading="lazy"
                style={{ y, opacity }}
                className="absolute w-[70%] rounded-2xl shadow-xl"
              />
            );
          })}
        </div>

        {/* RIGHT - TEXT */}
        <div className="w-1/2 flex items-center justify-center relative px-12">
          {items.map((item, i) => {
            const start = i / items.length;
            const end = (i + 1) / items.length;

            const y = useTransform(scrollYProgress, [start, end], [-120, 120]);
            const opacity = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0, 1, 0]
            );

            return (
              <motion.div
                key={i}
                style={{ y, opacity }}
                className="absolute text-center max-w-md"
              >
                <h2 className="text-4xl font-bold mb-4">
                  Step {i + 1}
                </h2>
                <p className="text-lg text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}