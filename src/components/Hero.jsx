import React from "react";

function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-12" aria-label="Hero Section">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16 relative">

        {/* Left Section */}
        <header className="md:w-1/2 text-left z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transforming <br /> Business Through <br />
            <span className="text-[#b73235]">Technology</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            U-Link It Us offers comprehensive e-commerce and procurement solutions tailored to modern business needs.
            We streamline operations, enhance digital efficiency, and drive scalable growth.
          </p>

          <nav className="flex flex-col sm:flex-row gap-4 mb-8" aria-label="Call to action buttons">
            <button
              className="bg-[#b73235] hover:bg-[#b73235] text-white font-semibold py-3 px-6 rounded shadow"
              aria-label="Get a free consultation from Ulinkit"
            >
              Get a FREE Consultation
            </button>
            <button
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded flex items-center gap-2"
              aria-label="View Ulinkit's portfolio"
            >
              View Our Portfolio <span aria-hidden="true">→</span>
            </button>
          </nav>

          <ul className="flex gap-6 text-gray-700 font-medium text-sm" aria-label="Company strengths">
            <li className="flex items-center gap-1 text-[#b73235]">✓<span className="text-gray-700">Innovative</span></li>
            <li className="flex items-center gap-1 text-[#b73235]">✓<span className="text-gray-700">Precise</span></li>
            <li className="flex items-center gap-1 text-[#b73235]">✓<span className="text-gray-700">Excellent</span></li>
          </ul>
        </header>

        {/* Right Section with Background Block */}
        <div className="md:w-1/2 relative" aria-hidden="true">
          <div className="absolute -bottom-10 -left-10 w-full h-full bg-red-100 rounded-2xl z-0 transform scale-100 rotate-[-4deg] shadow-lg"></div>
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 relative z-10">
            <img
              src="/Images/Hero.avif"
              alt="Digital transformation with e-commerce and procurement technology"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
