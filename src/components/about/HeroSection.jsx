import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section 
      className="relative bg-[#b73235] text-white py-24 overflow-hidden" 
      aria-label="Hero section introducing U-Link It Us global business solutions"
      role="region"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#a52a2d] to-[#d13a3d] opacity-95" 
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Pioneering Global Business Solutions Since 2011
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            U-Link It Us is transforming industries through innovative <strong>IT</strong>, <strong>e-commerce</strong>, and <strong>procurement solutions</strong> across USA, UK, UAE, and Middle East markets.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
