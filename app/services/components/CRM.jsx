import { motion } from "framer-motion";
import ServiceSection, { fadeUp } from "./ServiceSection";

export default function CRM() {
  return (
    <ServiceSection
      id="crm"
      eyebrow="CRM"
      title="Finding customers is important—but retaining them is even more valuable."
      className="services-bckgrnd lg:min-h-[820px]"
    >
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        For marketing-focused businesses, CRM is essential for improving communication and increasing conversions. It enables you to deliver targeted messages to the right audience at the right time. Whether through personalized offers, follow-up campaigns, or retention strategies, CRM helps maintain relevance and consistency.
      </motion.p>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        At STM, we help you set up and optimize CRM systems that fit your business goals. We handle everything from reporting to performance tracking, making sure your CRM supports your marketing efforts smoothly.
      </motion.p>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        This leads to better customer experiences, stronger loyalty, and smarter business decisions based on real data.
      </motion.p>
    </ServiceSection>
  );
}
