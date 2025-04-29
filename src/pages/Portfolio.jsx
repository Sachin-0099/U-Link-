import React, { useState } from "react";

const InteractivePortfolio = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-8 relative overflow-hidden">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl z-10">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            I’m Dheeraj Kumar  Gupta
          </h1>

          <h2 
            className="text-3xl font-bold text-black relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-[#b73235]">Founder & CEO</span> 
            <span 
              className={`absolute bottom-0 left-0 h-1 bg-[#b73235] transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'}`}
            ></span>
          </h2>

          <p className="text-gray-600 leading-relaxed animate-fadeIn" style={{ animationDelay: '300ms' }}>
          U-link IT US is an awesome place to work. A high energy atmosphere,
transparent culture, internal communication, leadership support coupled with loads of learning opportunities help the individual act as an entrepreneur in their own space.
          </p>

          <button
            className="px-6 py-3 bg-[#b73235] text-white font-semibold rounded-md transition-all duration-300
                      hover:bg-yellow-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400
                      focus:ring-offset-2 active:scale-95 flex items-center group"
          >
            HIRE ME
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="/Images/2.webp" // Make sure this path is correct in your public folder
            alt="Profile"
            className="rounded-lg object-cover w-[400px] h-[400px]"
          />
        </div>
      </div>

      {/* Floating Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 border-2 border-yellow-500 rounded-full"></div>
        <div className="absolute bottom-10 left-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-1/3 right-12 w-3 h-3 border-2 border-orange-500 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 border-2 border-blue-500 rotate-45"></div>
      </div>
    </div>
  );
};

export default InteractivePortfolio;
