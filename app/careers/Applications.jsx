import React from 'react';
import OpenApplication from './OpenApplication';
import OpenRoles from './OpenRoles';

const Applications = () => {
  return (
    <div id="open-roles" className="app-bckgrnd mx-3 sm:mx-auto max-w-7xl px-3 sm:px-6 md:px-8 py-6 sm:py-10 bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] shadow-[0_16px_40px_rgba(24,32,28,0.06)] mt-6 sm:mt-10">
      <div className="grid items-left gap-5 rounded-2xl sm:rounded-[2rem] border border-[#E6EBE7] bg-white/70 p-4 sm:p-6 backdrop-blur md:p-8 lg:w-full lg:grid-cols-[1.05fr_1.05fr] lg:p-10 lg:gap-10">
        <OpenRoles />
        <OpenApplication />
      </div>
    </div>
  )
}

export default Applications;