import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaNetworkWired, FaLightbulb } from 'react-icons/fa';

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

const MissionSection = () => {
  return (
    <motion.section
      key="mission"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-5xl mx-auto text-center"
      id="mission-tab"
      aria-labelledby="mission-heading"
      role="tabpanel"
    >
      <motion.header variants={fadeIn} className="mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-[#b73235]/10 p-4 rounded-full">
            <FaLightbulb className="text-4xl text-[#b73235]" aria-hidden="true" />
          </div>
        </div>
        <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Guiding Principles
        </h2>
        <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6" aria-hidden="true"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          To deliver unparalleled business solutions through innovation, quality, and client-centric services that drive sustainable growth.
        </p>
      </motion.header>

      <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaShieldAlt className="text-3xl" aria-hidden="true" />,
            title: 'Quality Assurance',
            description: 'Continuous innovation of tools and services to meet evolving industry standards and exceed client expectations.'
          },
          {
            icon: <FaUsers className="text-3xl" aria-hidden="true" />,
            title: 'Client Success',
            description: 'Tailored solutions designed to empower businesses with comprehensive, intuitive tools for digital transformation.'
          },
          {
            icon: <FaNetworkWired className="text-3xl" aria-hidden="true" />,
            title: 'Global Network',
            description: "Strategic partnerships including our role as Amazon's channel partner for pan-India business development."
          }
        ].map((item, index) => (
          <motion.article
            key={index}
            variants={fadeIn}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#b73235]"
            tabIndex={0}
            aria-label={item.title}
          >
            <div className="text-[#b73235] mb-5 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MissionSection;
