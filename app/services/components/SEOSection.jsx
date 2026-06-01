import { motion } from "framer-motion";
import ServiceSection, { fadeUp } from "./ServiceSection";

export default function SEOSection() {
  return (
    <ServiceSection
      id="seo"
      eyebrow="SEO"
      title="Dominate Search Rankings with STM SEO Services"
      className="services-bckgrnd lg:min-h-[820px]"
    >
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        Our SEO department delivers a full suite of services designed to strengthen your online presence and drive sustainable growth. We focus on high-quality link building to increase your website&apos;s authority, helping it compete more effectively in search engine rankings. Through detailed keyword research, we identify high-trending and relevant search terms that position your brand to capture demand and dominate your market.
      </motion.p>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        We also manage technical SEO to ensure your website is fully optimized for search engine crawling, indexing, and performance. This includes enhancing site speed, improving structure, and ensuring a smooth user experience across all devices. Our team creates and optimizes landing pages aligned with user intent, turning traffic into measurable conversions.
      </motion.p>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        In addition, we implement strategic on-page and off-page SEO activities that help search engines better understand your content and connect it with what users are actively searching for. Every action is guided by data and aligned with Google&apos;s best practices. We also implement advanced SEO strategies including Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), ensuring your content is optimized not only for search engines but also for AI-driven search experiences.
      </motion.p>
      <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
        SEO is a long-term strategy, and when executed correctly, it delivers lasting visibility, consistent organic traffic, and sustainable business growth over time.
      </motion.p>
    </ServiceSection>
  );
}
