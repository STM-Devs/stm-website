"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Phone, Send } from "lucide-react";
import { fadeUp, scaleIn } from "../Data";
import { Section } from "./Section";
import { Button } from "./Buttons";
import { Field } from "./Field";

export function ContactSection() {
  return (
    <Section className="pt-8 sm:pt-0">
      <div id="contact" className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-[#E6EBE7] bg-white p-8 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:p-10"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-[#414042]">Contact us</h3>
          <div className="mt-8 grid gap-4">
            {[
              { icon: Mail, label: "Email", value: "info@stmconsulting.io" },
              /*{ icon: Phone, label: "Phone", value: "+230 000 0000" },*/
              { icon: Globe, label: "Location", value: "8th Floor, Nexteracom 1, Ebène, Mauritius" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl bg-[#F8FAF9] p-4">
                <div className="rounded-2xl bg-[#EAF5DA] p-3 text-[#5A7B24]">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#414042]">{item.label}</div>
                  <div className="mt-1 text-sm text-[#5E645F]">{item.value}</div>
                </div>
              </div>
            ))}
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.395179281549!2d57.48591977654895!3d-20.24243914811641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5ae1d1f68fc9%3A0xf67722ad33dc19d!2sNeXTeracom%20Tower%201%2C%20Quatre%20Bornes%2072201%2C%20Mauritius!5e0!3m2!1sen!2sus!4v1774521487873!5m2!1sen!2sus"  className="w-full rounded-xl"
                height="190"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="STM Office Location"></iframe>
            </div>
          </div>
        </motion.div>

        <motion.form
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-[#E6EBE7] bg-white p-8 shadow-[0_8px_24px_rgba(24,32,28,0.05)] md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@company.com" type="email" />
            <Field label="Company" placeholder="Company name" />
            <Field label="Service" placeholder="SEO, Digital Media, CRM..." />
          </div>
          <div className="mt-5">
            <Field as="textarea" label="Message" placeholder="Tell us about your goals" rows={6} />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <Button icon={<Send size={16} />}>Send Message</Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
