import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { FaPhone } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();

  const navItems = ['Home', 'About-Us', 'Services', 'Portfolio', 'Blog'];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-8xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center" aria-label="Main navigation">
        {/* Logo */}
        <div className="w-32 md:w-60">
          <a href="/" aria-label="Ulink Home">
            <img src="/Images/Ulink.png" alt="Ulink Logo" className="w-full h-auto" loading="lazy" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-[#2b2b2b] font-medium">
          {navItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-[#b73235] transition-transform duration-200 hover:scale-105">
              <Link to={`/${item.toLowerCase().replace(/ /g, '')}`}>{item}</Link>
            </li>
          ))}
          <li>
            <a
              href="tel:8750518844"
              className="flex items-center gap-2 px-4 py-3 text-[#b73235] border border-[#b73235] rounded-md hover:bg-green-100 transition hover:scale-105"
            >
              
              <span>Call Us</span>
              <FaPhone size={18} />
            </a>
          </li>
          <li>
            <Link to="/schedule" className="px-4 py-3 bg-[#b73235] text-white rounded-md hover:bg-[#b73235] transition font-semibold hover:scale-105 inline-block">
              Schedule a Call
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Items */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href="tel:8750518844"
            className="flex items-center gap-1 px-2 py-1 text-[#b73235] border border-[#b73235] rounded-md hover:bg-green-100 transition text-sm"
            aria-label="Call Us"
          >
            <FaPhone size={14} />
            <span className="hidden sm:inline">Call Us</span>
          </a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-[#2b2b2b]" 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div 
          ref={mobileMenuRef} 
          className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4 text-[#2b2b2b] font-medium"
        >
          {navItems.map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase().replace(/ /g, '')}`} 
              className="block hover:text-[#b73235] transition hover:translate-x-1"
            >
              {item}
            </Link>
          ))}
          <Link 
            to="/schedule" 
            className="block px-4 py-2 bg-[#b73235] text-white rounded-md hover:bg-[#b73235] transition font-semibold hover:scale-105 text-center"
          >
            Schedule a Call
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
