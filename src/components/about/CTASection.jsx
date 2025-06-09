import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section 
      className="relative bg-gray-900 text-white py-24 overflow-hidden" 
      aria-labelledby="cta-heading"
    >
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20" 
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Business Growth?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Partner with U-Link It Us for comprehensive IT, e-commerce, and procurement solutions tailored to your 
            specific business requirements and market objectives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-[#b73235] hover:bg-[#9c2a2d] text-white font-semibold py-3 px-8 rounded-md text-lg transition-colors shadow-lg inline-block text-center"
              aria-label="Contact Our Team"
            >
              Contact Our Team
            </a>
            <a 
              href="/services" 
              className="bg-white hover:bg-gray-100 text-[#b73235] font-semibold py-3 px-8 rounded-md text-lg transition-colors shadow-lg inline-block text-center"
              aria-label="Explore Services"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
