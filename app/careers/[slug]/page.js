"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../Footer";
import { Button } from "../../components/Buttons";
import { SendCVModal } from "../../components/SendCVModal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function JobOpeningPage() {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    fetch(`https://cms.stmconsulting.io/wp-json/wp/v2/job-openings?slug=${slug}&_embed`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setJob(data[0]);
        } else {
          setError("Job opening not found.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, [slug]);

  if (!job && !error) {
    return (
      <div className="min-h-screen bg-[#FFF] text-[#414042]">
        <NavBar />
        <main className="min-h-screen bg-[#F6F8F7] py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
            <p className="py-20 text-center text-lg text-[#5E645F]">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FFF] text-[#414042]">
        <NavBar />
        <main className="min-h-screen bg-[#F6F8F7] py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 text-center py-20">
            <p className="text-lg text-[#5E645F]">{error}</p>
            <Button variant="secondary" onClick={() => window.location.href = "/careers#open-roles"} icon={<ArrowLeft size={16} />} className="mt-6">
              Back to Careers
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF] text-[#414042]">
      <NavBar />
      <main className="min-h-screen bg-[#F6F8F7] py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Button variant="secondary" onClick={() => window.location.href = "/careers#open-roles"} icon={<ArrowLeft size={16} />} className="mb-6">
              Back to Careers
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="rounded-2xl border border-[#E6EBE7] bg-white p-6 shadow-[0_16px_40px_rgba(24,32,28,0.06)] sm:rounded-[2rem] sm:p-8 md:p-10"
          >
            <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
              Job Opening
            </span>

            <h1
              className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#414042] sm:mt-6 sm:text-3xl md:text-4xl"
              dangerouslySetInnerHTML={{ __html: job.title.rendered }}
            />

            <div
              className="job-content mt-6 prose prose-lg max-w-none text-[#5E645F] sm:mt-8
                prose-headings:text-[#414042] prose-headings:tracking-[-0.02em]
                prose-p:leading-7 prose-p:text-[#5E645F]
                prose-li:text-[#5E645F]
                prose-a:text-[#7FAF2D] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#414042]"
              dangerouslySetInnerHTML={{ __html: job.content.rendered }}
            />

            <div className="mt-8 flex flex-wrap gap-3 border-t border-[#E6EBE7] pt-8">
              <Button variant="primary" onClick={() => setIsCVModalOpen(true)}>
                Apply Now
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = "/careers#open-roles"}>
                View Other Roles
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <SendCVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      <Footer />
    </div>
  );
}
