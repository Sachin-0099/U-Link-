import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-8xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center" aria-label="Main navigation">
        {/* Logo */}
        <div className="w-32 md:w-48">
          <a href="/" aria-label="Ulink Home">
            <img src="/Images/Ulink.png" alt="Ulink Logo" className="w-full h-auto" loading="lazy" />
          </a>
        </div>

        {/* Desktop Menu - Only shows on large screens (lg and above) */}
        <ul className="hidden lg:flex items-center gap-6 text-[#2b2b2b] font-medium">
        {['Home', 'About Us', 'Services', 'Portfolio', 'Blog'].map((item) => (
  <li key={item} className="cursor-pointer hover:text-[#b73235] transition">
    <Link to={`/${item.toLowerCase().replace(/ /g, '')}`}>{item}</Link>
  </li>
))}

<li>
  <Link to="/contact" className="px-4 py-3 border border-[#b73235] text-[#b73235] rounded-md hover:bg-red-100 transition">
    Contact Us
  </Link>
</li>
<li>
  <Link to="/schedule" className="px-4 py-3 bg-[#b73235] text-white rounded-md hover:bg-[#a52a2a] transition font-semibold">
    Schedule a Call
  </Link>
</li>

        </ul>

        {/* Mobile Menu Button - Shows on screens smaller than lg */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#2b2b2b]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu - Shows on screens smaller than lg */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4 text-[#2b2b2b] font-medium">
          {['Home', 'About Us', 'Services', 'Portfolio', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="block hover:text-[#b73235] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block px-4 py-2 border border-[#b73235] text-[#b73235] rounded-md hover:bg-red-100 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="#schedule"
            className="block px-4 py-2 bg-[#b73235] text-white rounded-md hover:bg-[#a52a2a] transition font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Schedule a Call
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;