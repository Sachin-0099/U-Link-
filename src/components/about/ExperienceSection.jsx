import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ExperienceSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [yearsExperience, setYearsExperience] = useState(0);
  
  useEffect(() => {
    setIsMounted(true);
    const startYear = 2011;
    const currentYear = new Date().getFullYear();
    
    let timeout;
    if (yearsExperience < (currentYear - startYear)) {
      timeout = setTimeout(() => {
        setYearsExperience(prev => prev + 1);
      }, 100);
    }
    
    return () => clearTimeout(timeout);
  }, [yearsExperience]);

  return (
    <motion.section
      key="experience"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid lg:grid-cols-2 gap-16 items-center"
      id="experience-tab"
      aria-labelledby="experience-btn"
      role="tabpanel"
    >
      <motion.div variants={fadeIn} className="relative order-2 lg:order-1">
        <figure className="relative overflow-hidden rounded-xl shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Our experienced team at U-Link It Us headquarters" 
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true"></div>
        </figure>
        <div 
          className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#b73235]"
          aria-label={`${isMounted ? yearsExperience : 15}+ Years of Industry Leadership`}
          role="region"
        >
          <div className="text-2xl font-bold text-gray-800" aria-live="polite" aria-atomic="true">
            {isMounted ? yearsExperience : '15'}+
          </div>
          <div className="text-gray-600">Industry Leadership</div>
        </div>
      </motion.div>

      <motion.article variants={fadeIn} className="order-1 lg:order-2">
        <header className="flex items-center mb-6">
          <div className="w-12 h-1 bg-[#b73235] mr-4"></div>
          <h2 id="experience-btn" className="text-2xl font-semibold text-gray-700">Our Journey</h2>
        </header>

        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          A Legacy of Innovation and Growth
        </h3>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          With over <strong>{isMounted ? yearsExperience : '15'} years</strong> of industry leadership, we've achieved numerous milestones 
          while continuously evolving our services. Our Business Vision 2025 initiative is setting new standards for 
          global commerce.
        </p>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Each project benefits from our extensive network and valuable industry connections, ensuring our clients 
          receive unparalleled advantages in their markets.
        </p>
        
        <section className="space-y-6" aria-label="Experience highlights and values">
          {[
            {
              icon: <FaShieldAlt className="text-xl text-[#b73235]" aria-hidden="true" />,
              title: 'Precision Execution',
              description: 'We combine strategic vision with operational excellence to deliver projects on time, every time.'
            },
            {
              icon: <FaUsers className="text-xl text-[#b73235]" aria-hidden="true" />,
              title: 'Expert Team',
              description: 'Our specialists bring deep expertise in e-commerce, supply chain management, and global trade.'
            }
          ].map((item, index) => (
            <article key={index} className="flex items-start">
              <div className="bg-[#b73235]/10 p-3 rounded-full mr-4 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </article>
          ))}
        </section>
      </motion.article>
    </motion.section>
  );
};

export default ExperienceSection;
