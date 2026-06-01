import { motion } from "framer-motion";
import ServiceSection, { fadeUp } from "./ServiceSection";

export default function GraphicDesign() {
  return (
    <ServiceSection
      id="graphic-design"
      eyebrow="Graphic Design"
      title="Where Graphic Design Meets Business Excellence"
      className="app-bckgrnd lg:min-h-[820px]"
    >
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        At STM Consulting, we craft bold, conversion-focused graphic design tailored specifically for corporates and businesses across a wide range of industries. From corporate branding and marketing collateral to digital assets and full brand identities, we understand the visual language that builds credibility and leaves a lasting impression. Our team combines creative excellence with a deep understanding of the business world to deliver designs that don&apos;t just look great - they perform. We stay ahead of design trends and industry innovations so that every asset we produce feels fresh, relevant, and perfectly aligned with the expectations of today&apos;s discerning business audience.
      </motion.p>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
        Your Brand, Built for a Competitive Market.
      </motion.p>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        The business landscape moves fast, and standing out demands more than a polished logo. STM Consulting partners with startups, established businesses, and corporate enterprises to create cohesive visual experiences that elevate your brand at every touchpoint. Whether you&apos;re launching a new venture or refreshing an existing identity, we bring the strategic creativity and business acumen to make your brand impossible to ignore. From initial concept through to final delivery, we work closely with our clients to ensure every design decision is purposeful, on-brand, and built to drive real results in an increasingly competitive marketplace.
      </motion.p>
    </ServiceSection>
  );
}
