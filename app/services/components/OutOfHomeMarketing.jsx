import { motion } from "framer-motion";
import ServiceSection, { fadeUp } from "./ServiceSection";

export default function OutOfHomeMarketing() {
  return (
    <ServiceSection
      id="on-the-ground-marketing"
      eyebrow="On The Ground Marketing"
      title="Strategic outdoor presence, built for measurable brand impact."
      className="app-bckgrnd lg:min-h-[720px]"
    >
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        We deliver end-to-end out-of-home marketing, from site selection and creative development to vendor management and post-campaign reporting. Whether it&apos;s billboards, transit media, branded environments, or experiential activations, we ensure each placement aligns with your audience, your geography, and your business objectives.
      </motion.p>
    </ServiceSection>
  );
}
