import { motion } from "framer-motion";
import ServiceSection, { fadeUp } from "./ServiceSection";

export default function Analytics() {
  return (
    <ServiceSection
      id="analytics"
      eyebrow="Analytics &amp; CRO"
      title="It's not just about traffic—it's about results."
      className="services-bckgrnd lg:min-h-[820px]"
    >
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        We analyze how people use your website and product, and find ways to improve it so more visitors take action, whether that&apos;s signing up, buying, or contacting you. From A/B testing to user behavior analysis, we help you turn more visitors into customers.
      </motion.p>
    </ServiceSection>
  );
}
