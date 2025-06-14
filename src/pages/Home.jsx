// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import MissionVisionSection from '../components/MissionVisionSection';

import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServiceSection';
import TeamSection from '../components/TeamSection';
import About from '../components/About';
import Journey from '../components/Journey';
import TeamShowcase from '../components/TeamShowCase';
import PartnerTestimonials from '../components/Testimonials';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
<Helmet>
  <title>Ulinkit - U-Link It Us | Proven Success in IT & E-commerce</title>
  <meta
    name="description"
    content="Ulinkitus is your trusted partner for innovative IT solutions, global e-commerce platforms, and seamless procurement services. Empowering businesses worldwide to grow and succeed."
  />
</Helmet>

    <Hero/>
    <About/>
    <Journey/>
      <div style={{ margin: '40px auto', textAlign: 'center', maxWidth: '800px', fontSize: '16px', lineHeight: '1.6' }}>
        <p>
          Ulinkitus is part of the Ulinkit global network — alongside{' '}
          <a href="https://ulinkit.com" target="_blank" rel="noopener noreferrer">Ulinkit.com</a> and{' '}
          <a href="https://ulinkgulf.com" target="_blank" rel="noopener noreferrer">Ulinkgulf.com</a>
        </p>
      </div>
    <MissionVisionSection/>
  
   
    <ServicesSection/>
 
    <StatsSection/>
    <TeamShowcase/>
    <PartnerTestimonials/>

  
    </div>
  );
}

export default Home;
