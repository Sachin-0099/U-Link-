import React from 'react';
import { motion } from 'framer-motion';
import StatItem from './StatItem';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const StatsSection = () => {
  return (
    <section 
      className="bg-[#b73235] text-white py-20" 
      aria-labelledby="stats-heading"
      role="region"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold mb-4">
            By The Numbers
          </h2>
          <div className="w-24 h-1 bg-white/80 mx-auto mb-6" role="presentation" aria-hidden="true"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Quantifying our impact and reach in the global business ecosystem
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
          role="list"
          aria-label="Company statistics"
        >
          <StatItem 
            number="25+" 
            label="Lakh Sellers" 
            description="Networked across diverse product categories" 
            role="listitem"
          />
          <StatItem 
            number="15+" 
            label="Years Experience" 
            description="Delivering business solutions since 2011" 
            role="listitem"
          />
          <StatItem 
            number="50+" 
            label="Experts" 
            description="Dedicated professionals across our divisions" 
            role="listitem"
          />
          <StatItem 
            number="1000+" 
            label="Clients" 
            description="Businesses empowered through our services" 
            role="listitem"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
