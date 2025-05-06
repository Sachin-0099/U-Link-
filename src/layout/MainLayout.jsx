// src/layout/MainLayout.jsx
import React from 'react';
import Navbar from '../components/HeaderNav';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Add padding-top to push content below the fixed navbar */}
      <main className="flex-grow pt-30">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
