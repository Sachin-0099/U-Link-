// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';
import CustomCursor from './components/CustomCursor'; // Import CustomCursor
import WhatsAppButton from './components/WhatsAppButton';
import MarketplaceOnboarding from './components/MarketplaceOnboarding';
import CrossBorderEcommerce from './components/CrossBorderEcommerce';
import InventoryManagement from './components/InventoryManagement';
import LastMileDelivery from './components/LastMileDelivery';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <CustomCursor /> {/* Add CustomCursor here */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/market" element={<MarketplaceOnboarding/>} />
          <Route path="/cross-border" element={<CrossBorderEcommerce/>} />
          <Route path="/inventory-management" element={<InventoryManagement/>} />
          <Route path="/last-mile" element={<LastMileDelivery/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
      <WhatsAppButton/>
    </Router>
  );
}

export default App;
