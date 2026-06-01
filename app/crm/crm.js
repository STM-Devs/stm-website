import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, UserCheck, Users, Shield, Settings } from "lucide-react";

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

const crmData = {
  services: [
    { icon: Users, title: "Customer Segmentation", body: "Organize your customers into meaningful segments for more personalized communication." },
    { icon: Shield, title: "Customer Security", body: "Protect sensitive data with top-tier security features for a safer experience." },
    { icon: UserCheck, title: "Automation & Workflows", body: "Automate your customer communications and enhance engagement with workflow systems." },
    { icon: Settings, title: "CRM Integrations", body: "Seamlessly integrate CRM systems with your existing tools for a unified approach." },
  ],
};

// Section for CRM Services
function CRMServiceCard({ icon: Icon, title, body }) {
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

// CRM Page Component
export default function CRMPage() {
  return (
    <div className="bg-[#F6F8F7] text-[#414042]">
      <section className="py-24 px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight text-[#414042]">Revolutionize Your Customer Relationship with CRM</h1>
          <p className="mt-4 text-lg text-[#5E645F]">
            Enhance engagement, streamline workflows, and boost customer retention with a modern CRM solution tailored to your business.
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
            {crmData.services.map((service, idx) => (
              <CRMServiceCard key={idx} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-3xl font-semibold text-[#414042]">
            Ready to Optimize Your Customer Relationships?
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" className="mt-4 text-lg text-[#5E645F]">
            Let’s build a CRM solution that brings you closer to your customers and increases lifetime value.
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
