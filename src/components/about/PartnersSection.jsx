import React, { useState } from 'react';
import { motion } from 'framer-motion';
import partners from '../../data/partners';
import AutoRotateCarousel from './AutoRotateCarousel';
import PartnerCard from './PartnerCard';

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

const PartnersSection = () => {
  const [activePartner, setActivePartner] = useState(0);

  return (
    <motion.section
      key="partners"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      id="partners-tab"
      aria-labelledby="partners-btn"
      role="tabpanel"
      tabIndex={0}
    >
      <motion.div variants={fadeIn} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Strategic Global Partnerships
        </h2>
        <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Collaborating with industry leaders to deliver exceptional value
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto overflow-hidden" aria-roledescription="carousel" aria-label="Partners carousel">
        {/* Carousel Track */}
        <div className="relative h-[600px]">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center px-4"
              initial={{ opacity: 0, x: index === 0 ? 0 : 100 }}
              animate={{ 
                opacity: activePartner === index ? 1 : 0,
                x: activePartner === index ? 0 : (index < activePartner ? -100 : 100)
              }}
              transition={{ duration: 0.5 }}
              role="tabpanel"
              aria-labelledby={`partner-${index}-label`}
              tabIndex={activePartner === index ? 0 : -1}
              hidden={activePartner !== index}
            >
              <article className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 p-6 rounded-full mb-8">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} official logo`} 
                      className="h-12 max-w-[180px] object-contain"
                      loading="lazy"
                      width={180}
                      height={48}
                    />
                  </div>
                  <h3 id={`partner-${index}-label`} className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 mb-8 text-center leading-relaxed">
                    {partner.description}
                  </p>
                  <section aria-labelledby={`benefits-${index}`} className="w-full bg-gray-50 rounded-lg p-6">
                    <h4 id={`benefits-${index}`} className="font-semibold text-lg text-gray-800 mb-4">Partnership Advantages:</h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {partner.benefits.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-[#b73235] rounded-full p-1 mr-3 mt-1 flex-shrink-0" aria-hidden="true">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => setActivePartner(prev => (prev === 0 ? partners.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          aria-label="Previous partner"
        >
          <svg className="w-6 h-6 text-[#b73235]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setActivePartner(prev => (prev === partners.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          aria-label="Next partner"
        >
          <svg className="w-6 h-6 text-[#b73235]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2" role="tablist" aria-label="Partners navigation tabs">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePartner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${activePartner === index ? 'bg-[#b73235]' : 'bg-gray-300 hover:bg-[#b73235]/50'}`}
              aria-label={`Go to partner ${index + 1}`}
              role="tab"
              aria-selected={activePartner === index}
              aria-controls={`partner-${index}-panel`}
              id={`partner-${index}-btn`}
            />
          ))}
        </div>
      </div>

      {/* Auto-rotation effect */}
      <AutoRotateCarousel 
        items={partners} 
        activeIndex={activePartner}
        setActiveIndex={setActivePartner}
        interval={5000}
      />

      {/* Regional Partners Grid */}
      <motion.div 
        variants={staggerContainer} 
        className="grid md:grid-cols-3 gap-8 mt-16"
      >
        {[
          {
            region: "North America",
            description: "Strategic alliances with leading technology and e-commerce firms across the United States",
            countries: ["USA", "Canada"]
          },
          {
            region: "Europe",
            description: "Collaborations with procurement specialists and logistics providers throughout the UK and EU",
            countries: ["UK", "Germany", "France"]
          },
          {
            region: "Middle East",
            description: "Established network of trade partners and business aggregators in key Gulf markets",
            countries: ["UAE", "Saudi Arabia", "Qatar"]
          }
        ].map((item, index) => (
          <PartnerCard 
            key={index}
            region={item.region}
            description={item.description}
            countries={item.countries}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default PartnersSection;
