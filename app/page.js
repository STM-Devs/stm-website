import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProcessSection } from "./components/ProcessSection";
import { CareersSection } from "./components/CareersSection";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./Footer";

export default function STMPremiumUILibrary() {
  return (
    <div className="min-h-screen bg-[#F6F8F7] text-[#414042]">
      <NavBar />
      <HeroSection />
      <main className="main-container">
        <AboutSection />
        <ServicesSection />
        { /*<ProcessSection /> */}
        <CTASection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
