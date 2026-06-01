"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "../Data";
import { Container } from "../Container";
import { Button } from "./Buttons";

export function HeroSection() {
  const videoRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  function handleContactBtn() {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
      window.location.href = "/#contact";
    }
  }

  function handleServicesBtn() {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
      window.location.href = "/#services";
    }
  }

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 md:px-8 md:pb-28 md:pt-24 lg:pb-32 lg:pt-32">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/STM-Office.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm" />
      <Container className="relative z-20">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E6EBE7] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm backdrop-blur">
                <Sparkles size={14} className="text-[#8DC53E]" /> Growth Marketing Company
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#414042] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Take your business to the <span className="text-[#7FAF2D] italic text-shadow-[1px_1px_1px_rgba(55,55,55,0.5)]">next level</span>.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-7 text-[#5E645F] sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
              A marketing agency that does all the heavy-lifting for you, so you can focus on what matters most, your business.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button icon={<ArrowRight size={16} />} onClick={handleServicesBtn}>
                View Services
              </Button>
              <Button variant="secondary" onClick={handleContactBtn}>
                Contact Us
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
