import React from 'react';

const GtaMap = () => {
  return (
    <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden select-none font-sans rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Desktop/Tablet Image View */}
      <div className="hidden md:block w-full h-full">
        <img 
          src="/images/los_customs_map.webp" 
          alt="Los Customs Map Desktop" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Image View */}
      <div className="block md:hidden w-full h-full">
        <img 
          src="/images/tel_s_map.webp" 
          alt="Los Customs Map Mobile" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vignette Overlay for extra depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none rounded-xl"></div>
    </div>
  );
};

export default GtaMap;
