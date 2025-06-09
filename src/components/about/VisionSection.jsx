import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';

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

const VisionSection = () => {
  return (
    <motion.section
      key="vision"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 md:p-16"
      id="vision-tab"
      aria-labelledby="vision-heading"
      role="region"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeIn} className="mb-12">
          <div 
            className="inline-flex items-center justify-center bg-white p-4 rounded-full shadow-lg mb-6"
            role="img"
            aria-label="Chart line icon representing vision"
          >
            <FaChartLine className="text-4xl text-[#b73235]" />
          </div>
          <h2 id="vision-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Vision for the Future
          </h2>
          <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6" role="presentation" aria-hidden="true"></div>
          <p className="text-2xl text-gray-700 font-medium leading-relaxed">
            To establish ourselves as the premier global connectivity platform for procurement and trading, 
            revolutionizing how businesses interact worldwide.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} 
          className="grid md:grid-cols-2 gap-8 text-left"
          role="list"
          aria-label="Vision pillars and initiatives"
        >
          {[
            {
              title: 'SP-API & SPP',
              description: 'Driving the future of e-commerce by leveraging Amazon SP-API to automate operations, streamline seller management, and lead the transformation to the new Selling Partner Platform (SPP) era.'
            },
            {
              title: 'Business 2025 Initiative',
              description: 'Our strategic roadmap is transforming global business operations through digital innovation and expanded market access.'
            },
            {
              title: 'Universal Business Platform',
              description: 'Developing an integrated ecosystem that connects industry players worldwide with seamless communication tools.'
            },
            {
              title: 'AI-Powered Business Intelligence',
              description: 'Implementing AI solutions to deliver predictive analytics, intelligent recommendations, and performance insights for global sellers.'
            },
            {
              title: 'Global Trade Automation',
              description: 'Building tools to automate procurement, compliance, and payment flows for cross-border trade.'
            },
            {
              title: 'Seller Success Ecosystem',
              description: 'Creating a full-service ecosystem that supports sellers from onboarding to growth with expert-driven, tech-supported solutions.'
            },
            {
              title: 'Cloud-First Architecture',
              description: 'Migrating core infrastructure to a scalable cloud environment to ensure speed, security, and global availability.'
            },
            {
              title: 'Multi-Marketplace Expansion',
              description: 'Expanding seller access to new marketplaces beyond Amazon, including Walmart, eBay, Noon, and regional B2B hubs.'
            },
            {
              title: 'End-to-End Logistics Innovation',
              description: 'Integrating smart warehousing, real-time tracking, and last-mile delivery partnerships into our logistics services.'
            }
          ].map((item, index) => (
            <motion.article 
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              role="listitem"
              tabIndex={0}
            >
              <h3 className="text-xl font-semibold mb-3 text-[#b73235]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisionSection;
