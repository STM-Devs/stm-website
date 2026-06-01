import React from 'react';

import MissionAndPurpose from './components/missionAndPurpose';

import { motion } from "framer-motion";
import { scaleIn } from "../Data";
import { Section } from "../components/Section";
import AboutUsDetails from './components/aboutUsDetails';
import CoreValues from "./components/coreValues";

const AboutUs = () => {
  return (
    <div>
      <Section className="bg-[#F6F8F7]">

        <motion.div
          id='who-we-are'
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="who-we-are-container rounded-[1.5rem] sm:rounded-[2.25rem] bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] p-3 sm:p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-6"
        >
          <div className="who-we-are-card rounded-[1.25rem] sm:rounded-[1.9rem] border border-white/70 bg-white p-5 sm:p-7 md:p-10 lg:p-14 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] h-full">
            <h2 className="mx-auto mt-2 sm:mt-5 max-w-3xl text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#EFEEFE]">
              Who We Are
            </h2>
            <div className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-[#EFEEFE]">
              <AboutUsDetails />
            </div>
          </div>
        </motion.div>

         <motion.div
          id='mission-and-purpose'
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mission-and-purpose-container rounded-[1.5rem] sm:rounded-[2.25rem] bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] p-3 sm:p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-6 mt-10 sm:mt-16 md:mt-24 lg:mt-36"
        >
          <div className="mission-and-purpose-card rounded-[1.25rem] sm:rounded-[1.9rem] border border-white/70 bg-white p-5 sm:p-7 md:p-10 lg:p-14 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] h-full">
            <h2 className="mx-auto mt-2 sm:mt-5 max-w-3xl text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#5E645F]">
              Mission and Purpose
            </h2>
            <div className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-[#5E645F]">
              <MissionAndPurpose />
            </div>
          </div>
        </motion.div>

         <motion.div
          id='core-values'
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="who-we-are-container mt-10 rounded-[1.5rem] sm:rounded-[2.25rem] bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] p-3 sm:p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-6"
        >
          <div className="who-we-are-card rounded-[1.25rem] sm:rounded-[1.9rem] border border-white/70 bg-white p-5 sm:p-7 md:p-10 lg:p-14 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] h-full">
            <h2 className="mx-auto mt-2 sm:mt-5 max-w-3xl text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#EFEEFE]">
              Our Core Values
            </h2>
            <div className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-[#EFEEFE]">
              <CoreValues />
            </div>
          </div>
        </motion.div>

      </Section>
    </div>
  )
};

export default AboutUs;