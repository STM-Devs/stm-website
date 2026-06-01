import { motion } from "framer-motion";
import ServiceSection, { fadeUp } from "./ServiceSection";

export default function ServicesHero() {
  return (
    <ServiceSection
      eyebrow="Services"
      title={<><span>Elevate Your Brand with Our Comprehensive Services</span>.</>}
      className="services-hero lg:min-h-[955px]"
    >
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        We offer a complete suite of services designed to elevate your brand and drive growth. From strategic digital marketing to innovative graphic design, our team is dedicated to delivering results that exceed expectations.
      </motion.p>
    </ServiceSection>
  );
}
