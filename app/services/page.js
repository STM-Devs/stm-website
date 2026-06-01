import React from 'react';
import { NavBar } from '../components/NavBar';
import ServicePage from './services';
import { Footer } from '../Footer';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#414042]">
      <NavBar />
      <ServicePage />
      <Footer />
    </div>
  )
}

export default Page;