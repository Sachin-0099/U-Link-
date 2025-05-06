import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const InteractivePortfolio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("dheeraj");
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  
//Animated variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const portfolioData = {
    dheeraj: {
      name: "Dheeraj Kumar Gupta",
      title: "Founder & CEO",
      description: "U-link IT US is an awesome place to work. A high energy atmosphere, transparent culture, internal communication, leadership support coupled with loads of learning opportunities help the individual act as an entrepreneur in their own space.",
      email: "dhiraj@ulinkit.com",
      imagePath: "/Images/2.webp",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook:"#"
      
      }
    },
    vineet: {
      name: "Vineet Sharma",
      title: "IT HEAD DIRECTOR",
      description: "Leading the technical vision at U-link IT US, Vineet ensures we stay at the cutting edge of technology while delivering robust and scalable solutions to our clients.",
      email: "vineet@ulinkit.com",
      imagePath: "/Images/6.webp",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook:"#"
      }
    }
  };
  
  const active = portfolioData[activeSection];
  
  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  // Apply theme changes
  useEffect(() => {
    document.body.className = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  
  // Scroll detection for section switching
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Switch to Vineet when scrolled past 50% of the viewport height
      if (scrollPosition > windowHeight * 0.5) {
        setActiveSection("vineet");
      } else {
        setActiveSection("dheeraj");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <div 
        ref={containerRef}
        className={`min-h-[200vh] flex flex-col items-center justify-start p-4 md:p-8 relative overflow-hidden transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}
      >
        {/* Navigation and Theme Toggle */}
        <div className="hidden md:flex fixed top-20 left-0 right-0 justify-between items-center p-4 md:p-6 z-50">
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-xl font-bold"
  >
    <span className="text-[#b73235]">U-link</span> IT US
  </motion.div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20 hover:bg-gray-500"
              aria-label="Toggle theme"
            >
              {theme === "light" ? 
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg> :
                <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            </button>
          </div>
        </div>
        
        {/* First Section - Dheeraj */}
        <section className="min-h-screen w-full flex items-center justify-center pt-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto"
          >
            {/* Left Side - Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <motion.div variants={fadeIn}>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"} leading-tight`}>
                  Hi, I'm <span className="text-[#b73235]">Dheeraj</span>
                </h1>
                <div className="w-20 h-1 bg-[#b73235] my-4"></div>
              </motion.div>

              <motion.h2 
                variants={fadeIn}
                className="text-2xl md:text-3xl font-bold relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="text-[#b73235]">Founder & CEO</span> 
                <span 
                  className={`absolute bottom-0 left-0 h-1 bg-[#b73235] transition-all duration-500 ${isHovered ? "w-full" : "w-0"}`}
                ></span>
              </motion.h2>

              <motion.p 
                variants={fadeIn}
                className={`leading-relaxed text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              >
                {portfolioData.dheeraj.description}
              </motion.p>

              {/* Social Links */}
              <motion.div variants={fadeIn} className="flex space-x-4">
                <a href={portfolioData.dheeraj.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#b73235] hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href={portfolioData.dheeraj.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#b73235] hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href={portfolioData.dheeraj.social.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#b73235] hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-8 py-3 bg-[#b73235] text-white font-semibold rounded-lg transition-all duration-300
                            hover:bg-yellow-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400
                            focus:ring-offset-2 active:scale-95 flex items-center justify-center group shadow-lg"
                >
                  Connect with Us
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
                
                <button
                  onClick={() => {
                    window.location.href = `mailto:${portfolioData.dheeraj.email}?subject=Let's Connect&body=Hi Dheeraj,%0D%0A%0D%0AI'm reaching out to you. It would be great to connect and explore potential collaboration opportunities.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;
                  }}
                  className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300
                            hover:scale-105 focus:outline-none flex items-center justify-center group shadow-lg
                            ${theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-100"}`}
                >
                  Email Directly
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">✉</span>
                </button>
              </motion.div>
            </div>

            {/* Right Side - Image */}
            <motion.div 
              variants={fadeIn}
              className="flex justify-center order-1 lg:order-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <div className={`absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#b73235] to-yellow-600 opacity-20 blur-lg`}></div>
                <img
                  src={portfolioData.dheeraj.imagePath}
                  alt="Dheeraj Kumar Gupta Profile"
                  className="relative rounded-xl object-cover w-full max-w-md h-auto shadow-2xl border-4 border-white dark:border-gray-800"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Second Section - Vineet */}
        <section className="min-h-screen w-full flex items-center justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto"
          >
            {/* Left Side - Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <motion.div variants={fadeIn}>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"} leading-tight`}>
                  Hi, I'm <span className="text-[#b73235]">Vineet</span>
                </h1>
                <div className="w-20 h-1 bg-[#b73235] my-4"></div>
              </motion.div>

              <motion.h2 
                variants={fadeIn}
                className="text-2xl md:text-3xl font-bold relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="text-[#b73235]">IT HEAD DIRECTOR</span> 
                <span 
                  className={`absolute bottom-0 left-0 h-1 bg-[#b73235] transition-all duration-500 ${isHovered ? "w-full" : "w-0"}`}
                ></span>
              </motion.h2>

              <motion.p 
                variants={fadeIn}
                className={`leading-relaxed text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              >
                {portfolioData.vineet.description}
              </motion.p>

              {/* Social Links */}
              <motion.div variants={fadeIn} className="flex space-x-4">
                <a href={portfolioData.vineet.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#b73235] hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href={portfolioData.vineet.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#b73235] hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href={portfolioData.vineet.social.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#b73235] hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-8 py-3 bg-[#b73235] text-white font-semibold rounded-lg transition-all duration-300
                            hover:bg-yellow-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400
                            focus:ring-offset-2 active:scale-95 flex items-center justify-center group shadow-lg"
                >
                  Connect with Us
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
                
                <button
                  onClick={() => {
                    window.location.href = `mailto:${portfolioData.vineet.email}?subject=Let's Connect&body=Hi Vineet,%0D%0A%0D%0AI'm reaching out to you. It would be great to connect and explore potential collaboration opportunities.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;
                  }}
                  className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300
                            hover:scale-105 focus:outline-none flex items-center justify-center group shadow-lg
                            ${theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-100"}`}
                >
                  Email Directly
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">✉</span>
                </button>
              </motion.div>
            </div>

            {/* Right Side - Image */}
            <motion.div 
              variants={fadeIn}
              className="flex justify-center order-1 lg:order-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <div className={`absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#b73235] to-yellow-600 opacity-20 blur-lg`}></div>
                <img
                  src={portfolioData.vineet.imagePath}
                  alt="Vineet Sharma Profile"
                  className="relative rounded-xl object-cover w-full max-w-md h-auto shadow-2xl border-4 border-white dark:border-gray-800"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Floating Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className={`absolute top-1/4 left-10 w-4 h-4 border-2 ${theme === "dark" ? "border-yellow-400" : "border-yellow-500"} rounded-full`}
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.2, 1]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div 
            className={`absolute bottom-1/3 left-1/4 w-3 h-3 ${theme === "dark" ? "bg-green-500" : "bg-green-400"} rounded-full`}
            animate={{ 
              x: [0, 15, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.3, 1]
            }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className={`absolute top-1/2 right-20 w-5 h-5 border-2 ${theme === "dark" ? "border-orange-400" : "border-orange-500"} rotate-45`}
            animate={{ 
              rotate: [45, 90, 135, 90, 45],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div 
            className={`absolute bottom-20 right-1/4 w-4 h-4 border-2 ${theme === "dark" ? "border-blue-400" : "border-blue-500"} rounded-full`}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className={`relative p-6 md:p-8 rounded-xl shadow-2xl max-w-md w-full ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Contact {active.name.split(" ")[0]}</h3>
              <p className={`mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Fill out the form below to get in touch</p>
            </div>
            
            <form className="space-y-5">
              <div>
                <label className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Your Name</label>
                <input 
                  type="text" 
                  className={`w-full p-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white focus:border-[#b73235] focus:ring-[#b73235]" : "bg-white border-gray-300 focus:border-[#b73235] focus:ring-[#b73235]"}`} 
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Your Email</label>
                <input 
                  type="email" 
                  className={`w-full p-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white focus:border-[#b73235] focus:ring-[#b73235]" : "bg-white border-gray-300 focus:border-[#b73235] focus:ring-[#b73235]"}`} 
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Message</label>
                <textarea 
                  className={`w-full p-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white focus:border-[#b73235] focus:ring-[#b73235]" : "bg-white border-gray-300 focus:border-[#b73235] focus:ring-[#b73235]"}`} 
                  rows="4"
                  placeholder="I'd like to discuss a potential project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full px-6 py-3 bg-[#b73235] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default InteractivePortfolio;