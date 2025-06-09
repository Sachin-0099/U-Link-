import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/about/HeroSection'
import NavigationTabs from '../components/about/NavigationTabs';
import AboutSection from '../components/about/AboutSection';
import MissionSection from '../components/about/MissionSection';
import VisionSection from '../components/about/VisionSection';
import ExperienceSection from '../components/about/ExperienceSection';
import ServicesSection from '../components/about/ServicesSection';
import LeadershipSection from '../components/about/LeadershipSection';
import PartnersSection from '../components/about/PartnersSection';
import StatsSection from '../components/about/StatsSection';
import CTASection from '../components/about/CTASection';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  return (
    <>
      <Helmet>
        <title>About U-Link It Us - Global IT, E-commerce & Procurement Solutions</title>
        <meta name="description" content="Discover U-Link It Us - a leader in global IT solutions, e-commerce platforms, and procurement services with 15+ years of experience serving businesses worldwide." />
        <meta name="keywords" content="IT solutions, e-commerce services, global procurement, business consulting, Amazon partner, digital transformation" />
        <meta property="og:title" content="About U-Link It Us - Global Business Solutions Provider" />
        <meta property="og:description" content="Leading provider of innovative IT, e-commerce, and procurement solutions with a global network spanning USA, UK, and Middle East markets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ulinkitus.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About U-Link It Us | Global Business Solutions" />
        <meta name="twitter:description" content="15+ years of excellence in delivering cutting-edge IT, e-commerce, and procurement solutions to businesses worldwide." />
        <link rel="canonical" href="https://www.ulinkitus.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "U-Link It Us",
              "url": "https://www.ulinkitus.com",
              "logo": "https://www.ulinkitus.com/logo.png",
              "description": "Global provider of IT solutions, e-commerce platforms, and procurement services",
              "foundingDate": "2011",
              "founder": {
                "@type": "Person",
                "name": "Dhiraj Kumar Gupta"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "hasPart": [
                {
                  "@type": "WebSite",
                  "name": "Ulinkit Global",
                  "url": "https://www.ulinkit.com"
                },
                {
                  "@type": "WebSite",
                  "name": "Ulink Gulf",
                  "url": "https://www.ulinkgulf.com"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <HeroSection />
        <NavigationTabs activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="container mx-auto px-6 py-16">
          <AnimatePresence mode="wait">
            {activeSection === 'about' && <AboutSection />}
            {activeSection === 'mission' && <MissionSection />}
            {activeSection === 'vision' && <VisionSection />}
            {activeSection === 'experience' && <ExperienceSection />}
            {activeSection === 'services' && <ServicesSection />}
            {activeSection === 'leadership' && <LeadershipSection />}
            {activeSection === 'partners' && <PartnersSection />}
          </AnimatePresence>
        </main>

        <StatsSection />
        <CTASection />
      </div>
    </>
  );
};

export default AboutUs;