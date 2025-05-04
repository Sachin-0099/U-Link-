import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const FloatingSphere = () => (
    <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#b73235" 
        metalness={0.8}
        roughness={0.2}
        emissive="#b73235"
        emissiveIntensity={0.3}
      />
    </Sphere>
  );

  return (
    <section 
      ref={containerRef}
      className="bg-white min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden relative"
      aria-label="Hero Section"
    >
      {/* Floating 3D Sphere Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 md:opacity-20 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
        </Canvas>
      </div>

      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5 z-0"
        style={{ y }}
        aria-hidden="true"
      >
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-300"></div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left Section */}
        <motion.header 
          className="md:w-1/2 text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transforming <br /> Business Through <br />
            <motion.span 
              className="text-[#b73235] inline-block"
              animate={{ 
                textShadow: "0 0 10px rgba(183, 50, 53, 0.5)",
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2 
              }}
            >
              Technology
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-gray-600 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            U-Link It Us offers comprehensive e-commerce and procurement solutions tailored to modern business needs.
            We streamline operations, enhance digital efficiency, and drive scalable growth.
          </motion.p>

          <motion.nav 
            className="flex flex-col sm:flex-row gap-4 mb-8"
            aria-label="Call to action buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(183, 50, 53, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b73235] text-white font-semibold py-3 px-6 rounded-lg shadow-lg relative overflow-hidden"
              aria-label="Get a free consultation from Ulinkit"
            >
              <span className="relative z-10">Get a FREE Consultation</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#b73235] to-[#e74c3c] opacity-0 hover:opacity-100 transition-opacity duration-300 z-0"
                aria-hidden="true"
              />
            </motion.button>
            
            <motion.button 
              onClick={() => navigate("/portfolio")}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#f8f9fa",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg flex items-center gap-2 shadow-sm"
              aria-label="View Ulinkit's portfolio"
            >
              View Our Portfolio 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </motion.button>
          </motion.nav>

          <motion.ul 
            className="flex gap-6 text-gray-700 font-medium text-sm"
            aria-label="Company strengths"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {["Innovative", "Precise", "Excellent"].map((item, index) => (
              <motion.li 
                key={item}
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className="text-[#b73235]"
                  animate={{ rotate: [0, 360] }}
                  transition={{ 
                    rotate: { 
                      duration: 0.5, 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      delay: index * 0.2 
                    } 
                  }}
                >
                  ✓
                </motion.span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.header>

        {/* Right Section with 3D Card Effect */}
        <motion.div 
          className="md:w-1/2 relative"
          aria-hidden="true"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y, opacity }}
        >
          <motion.div 
            className="absolute -bottom-10 -left-10 w-full h-full bg-red-100 rounded-2xl z-0 shadow-2xl"
            animate={{
              rotate: [-4, 4, -4],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl border-2 border-white relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/Images/Hero.avif"
              alt="Digital transformation with e-commerce and procurement technology"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* 3D Reflection Effect */}
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/30 to-transparent"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;