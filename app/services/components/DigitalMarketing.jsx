import { motion } from "framer-motion";
import ServiceSection, { fadeUp } from "./ServiceSection";

export default function DigitalMarketing() {
  return (
    <ServiceSection
      id="digital-marketing"
      eyebrow="Digital Marketing"
      title="Getting your brand in front of the right people at the right time is key."
      className="bg-[#414042] lg:min-h-[820px]"
    >
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        We create and manage marketing campaigns across platforms like Google, Facebook, Instagram, and more. Whether it&apos;s ads, content, or strategy, we focus on bringing in real customers—not just clicks.
      </motion.p>

      <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
        Our Social Media Services
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        We deliver measurable impact on all social media platforms by combining innovative implementation with strategic thinking.
      </motion.p>

      <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
        Strategy for Organic Growth
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        We create organised content strategies and engagement techniques to enhance brand visibility and foster long-term audience growth.
      </motion.p>

      <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
        Paid Advertising &amp; Social Media Strategy
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        Our staff creates data-driven plans that align with your company&apos;s goals, ensuring that each campaign delivers significant results.
      </motion.p>

      <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
        Creation and Management of Ads
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        We develop effective ad creatives and oversee campaigns from conception to implementation to optimise reach, engagement, and conversions.
      </motion.p>

      <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
        Content Development and Creative Guidance
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        We create captivating content, such as images, video ideas, and screenplays, designed to draw viewers in and effectively convey your brand.
      </motion.p>

      <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
        Influencer Marketing &amp; Content Cooperation
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        To ensure authenticity, relevance, and measurable impact, we identify and partner with the best influencers to spread your message.
      </motion.p>
    </ServiceSection>
  );
}
