import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { 
  FaGlobe, FaShieldAlt, FaSearchDollar, 
  FaBoxes, FaHandshake, FaShippingFast 
} from 'react-icons/fa';

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

const ServicesSection = () => {
  return (
    <motion.section
      key="services"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      id="services-tab"
      aria-labelledby="services-heading"
      role="region"
    >
      <motion.div variants={fadeIn} className="text-center mb-16">
        {/* Use a meaningful heading with an id referenced by aria-labelledby */}
        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Comprehensive Business Solutions
        </h2>
        <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6" aria-hidden="true"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer end-to-end services designed to accelerate your business growth in the digital economy.
        </p>
      </motion.div>

      {/* Use a semantic container for the list of services */}
      <motion.div 
        variants={staggerContainer} 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        role="list"
        aria-label="List of business services"
      >
        {[
          {
            icon: <FaGlobe className="text-3xl" aria-hidden="true" />,
            title: "Global Expansion",
            description: "Facilitating business growth in international markets including USA, UK, and Middle East and Other Gulf Countries"
          },
          {
            icon: <FaShieldAlt className="text-3xl" aria-hidden="true" />,
            title: "IT Infrastructure",
            description: "Secure and scalable technology solutions with robust data protection"
          },
          {
            icon: <FaSearchDollar className="text-3xl" aria-hidden="true" />,
            title: "Market Intelligence",
            description: "Comprehensive data collection and research to inform strategic decisions"
          },
          {
            icon: <FaBoxes className="text-3xl" aria-hidden="true" />,
            title: "Global Procurement",
            description: "End-to-end supply chain solutions for international markets"
          },
          {
            icon: <FaHandshake className="text-3xl" aria-hidden="true" />,
            title: "Seller Ecosystem",
            description: "Management services for over 2.5 million sellers across diverse categories"
          },
          {
            icon: <FaShippingFast className="text-3xl" aria-hidden="true" />,
            title: "Logistics Network",
            description: "Efficient global distribution and fulfillment solutions"
          }
        ].map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            role="listitem"
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;
