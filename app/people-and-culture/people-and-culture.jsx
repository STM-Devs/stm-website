import React from 'react'
import PeopleAndCultureHero from './components/PeopleAndCultureHero';
import CultureSection from './components/CultureSection';
import LifeAtSTMSection from './components/LifeAtSTMSection';
import BenefitsSection from './components/BenefitsSection';
import FitSection from './components/FitSection';

const PeopleAndCulture = () => {
  return (
     <main className="min-h-screen bg-[#F6F8F7] text-[#414042]">
      <PeopleAndCultureHero />
      <CultureSection />
      <FitSection />
      <LifeAtSTMSection />
      <BenefitsSection />
    </main>
  )
}

export default PeopleAndCulture