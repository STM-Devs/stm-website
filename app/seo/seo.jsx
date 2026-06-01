import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Search, Target } from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const seoData = {
  services: [
    { icon: Search, title: "Keyword Research & Strategy", body: "Finding the right keywords and mapping them to user intent is key to success." },
    { icon: Target, title: "On-Page Optimization", body: "Optimizing content, structure, and metadata to align with search engine requirements." },
    { icon: Globe, title: "Global & Local SEO", body: "Building authority both locally and internationally for greater visibility." },
    { icon: BarChart3, title: "SEO Audits & Reports", body: "Regular audits and performance reports to ensure constant improvement and tracking." },
  ],
};

// Section for SEO Services
function SEOServiceCard({ icon: Icon, title, body }) {
  return (
    <motion.div variants={fadeUp} className="rounded-[1.75rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)]">
      <div className="mb-5 inline-flex rounded-2xl bg-[#EAF5DA] p-3 text-[#5A7B24]">
        <Icon size={18} />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-[#414042]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#5E645F]">{body}</p>
    </motion.div>
  );
}

// SEO Page Component
export default function SEOPage() {
  return (
    <div className="bg-[#F6F8F7] text-[#414042]">
      <section className="py-24 px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight text-[#414042]">Performance-Driven SEO Services</h1>
          <p className="mt-4 text-lg text-[#5E645F]">
            We provide tailored SEO strategies that grow visibility and drive targeted traffic to your business.
          </p>
          <div className="mt-6 flex gap-4">
            <motion.button whileHover={{ y: -4 }} className="px-6 py-3 rounded-xl bg-[#8DC53E] text-white font-semibold">
              Get Started
            </motion.button>
            <motion.button whileHover={{ y: -4 }} className="px-6 py-3 rounded-xl bg-white text-[#414042] border border-[#E6EBE7] font-semibold">
              See Our Results
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {seoData.services.map((service, idx) => (
              <SEOServiceCard key={idx} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-3xl font-semibold text-[#414042]">
            Ready to Grow Your Organic Traffic?
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" className="mt-4 text-lg text-[#5E645F]">
            Let's work together to craft an SEO strategy that aligns with your business goals.
          </motion.p>
          <div className="mt-6">
            <motion.button whileHover={{ y: -4 }} className="px-6 py-3 rounded-xl bg-[#8DC53E] text-white font-semibold">
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}