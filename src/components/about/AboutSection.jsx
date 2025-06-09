import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const AboutSection = () => {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

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
    <>
      <Helmet>
        <title>Ulinkitus - Global IT Services & E-commerce Solutions Since 2011</title>
        <meta name="description" content="Ulinkitus offers IT services, e-commerce solutions, and procurement innovations worldwide. Empowering global businesses with technology and expertise since 2011." />
  
      </Helmet>

      <motion.section
        id="about-tab"
        key="about"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid lg:grid-cols-2 gap-16 items-center py-12"
        aria-labelledby="about-btn"
        role="tabpanel"
      >
        {/* Text Content */}
        <motion.div variants={fadeIn}>
          <header className="mb-6">
            <div className="flex items-center">
              <div className="w-12 h-1 bg-[#b73235] mr-4"></div>
              <h2 className="text-2xl font-semibold text-gray-700" id="about-btn">Our Company</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 leading-tight">
              Redefining Business Solutions Since 2011
            </h3>
          </header>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Ulinkitus is a global leader in IT services, e-commerce solutions, and procurement process innovation. Headquartered in India, 
            we empower businesses across the globe through next-gen technology, strategic consulting, and digital transformation expertise.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Backed by over a decade of industry experience and an expert team, we deliver tailored solutions that enable sustainable 
            growth across markets such as the USA, UK, UAE, and other Gulf countries.
          </p>

          {/* Global Presence Card */}
          <section className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#b73235]" aria-label="Global Market Presence">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Global Business Aggregator</h4>
            <p className="text-gray-600 mb-4">
              Our operations span key international markets, providing strategic support and scalable technology to global businesses.
            </p>
            <ul className="grid grid-cols-2 gap-4 list-none pl-0">
              {['USA', 'UK', 'UAE', 'Other Gulf Countries'].map((country) => (
                <li key={country} className="flex items-center">
                  <span className="w-2 h-2 bg-[#b73235] rounded-full mr-2 inline-block" aria-hidden="true"></span>
                  <span className="text-gray-700">{country}</span>
                </li>
              ))}
            </ul>
          </section>
        </motion.div>

        {/* Image + Years Counter */}
        <motion.div variants={fadeIn} className="relative" aria-label="Years of Industry Experience">
          <figure className="relative overflow-hidden rounded-xl shadow-2xl">
            <img 
              src="/Images/Order.avif" 
              alt="Team of Ulinkitus collaborating in modern workspace" 
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <figcaption className="sr-only">Ulinkitus team working in an office environment</figcaption>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </figure>

          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#b73235]">
            <div className="text-4xl font-bold text-[#b73235] mb-1">
              {isMounted ? yearsExperience : '0'}+
            </div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default AboutSection;
