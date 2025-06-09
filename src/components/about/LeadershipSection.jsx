import React from 'react';
import { motion } from 'framer-motion';

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

const LeadershipSection = () => {
  return (
    <motion.section
      key="leadership"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-5xl mx-auto"
      id="leadership-tab"
      aria-labelledby="leadership-btn"
      role="tabpanel"
    >
      <motion.div variants={fadeIn} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Visionary Leadership
        </h2>
        <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6" aria-hidden="true"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Guided by experience and driven by innovation
        </p>
      </motion.div>

      <motion.article variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden" aria-label="Profile of Dhiraj Kumar Gupta, Founder and Managing Director">
        <div className="md:flex">
          <div className="md:w-2/5 relative">
            <figure>
              <img 
                className="w-full h-full object-cover"
                src="/Images/2.webp" 
                alt="Dhiraj Kumar Gupta, Founder & Director of U-Link It Us" 
                loading="lazy"
              />
              <figcaption className="sr-only">
                Dhiraj Kumar Gupta, Founder and Managing Director of U-Link It Us
              </figcaption>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" aria-hidden="true"></div>
            </figure>
          </div>
          <div className="p-8 md:w-3/5">
            <header>
              <div className="uppercase tracking-wider text-sm text-[#b73235] font-semibold mb-2">
                Founder & Managing Director
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Dhiraj Kumar Gupta
              </h3>
            </header>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A seasoned business strategist with over 15 years of experience, Mr. Gupta founded U-Link It Us with a vision 
              to bridge global business opportunities through technology. His expertise in consultancy and business advisory 
              has been instrumental in shaping the company's growth trajectory.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Known for his dynamic leadership, Mr. Gupta has successfully navigated the company through market challenges 
              while maintaining a forward-looking approach to emerging business technologies.
            </p>
            
            <section aria-labelledby="leadership-attributes-heading">
              <h4 id="leadership-attributes-heading" className="font-semibold text-lg text-gray-800 mb-3">
                Leadership Attributes:
              </h4>
              <ul className="space-y-3">
                {[
                  "Strategic vision for digital transformation",
                  "Deep expertise in global e-commerce ecosystems",
                  "Proven track record in building strategic partnerships",
                  "Commitment to innovation and operational excellence"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#b73235] rounded-full p-1 mr-3 mt-1 flex-shrink-0" aria-hidden="true">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </motion.article>
    </motion.section>
  );
};

export default LeadershipSection;
