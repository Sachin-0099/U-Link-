import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: "Marketplace Onboarding",
    description: "Seamlessly launch your business on platforms like Amazon, Flipkart & Meesho. We guide you through every step — from account setup to catalog creation — ensuring you're marketplace-ready in no time.",
    icon: "⭐",
    color: "#4f46e5",
    features: [
      "Precision implementation",
      "Quality assurance",
      "Continuous improvement",
      "Client-focused solutions"
    ]
  },
  {
    title: "Cross-Border eCommerce Solutions",
    description: "Sell globally with zero hassle. Our end-to-end export services help you take your products to international markets, managing logistics, compliance, and payment processing.",
    icon: "👥",
    color: "#10b981",
    features: [
      "Comprehensive screening",
      "Skills assessment",
      "Cultural fit evaluation",
      "Industry-specific expertise"
    ]
  },
  {
    title: "Inventory & Order Management",
    description: "Stay on top of your stock and sales — all in one place. With our smart dashboard, manage real-time inventory, streamline your order flow, and never miss a sale.",
    icon: "📦",
    color: "#f59e0b",
    features: [
      "Real-time tracking",
      "Automated stock alerts",
      "Multi-platform sync",
      "Detailed analytics"
    ]
  },
  {
    title: "Last-Mile Delivery & Logistics",
    description: "Fast, reliable delivery — anywhere in the world. We offer integrated shipping solutions, including COD, express delivery, and global fulfillment through trusted partners.",
    icon: "🚚",
    color: "#ef4444",
    features: [
      "Flexible delivery options",
      "Real-time tracking",
      "Return handling",
      "Global reach"
    ]
  },
  {
    title: "Digital Marketing & Growth Strategy",
    description: "Grow your visibility. Grow your sales. We help you attract and retain customers through SEO, ads, influencer marketing, and high-converting campaigns.",
    icon: "📈",
    color: "#6366f1",
    features: [
      "Performance-based marketing",
      "Brand awareness campaigns",
      "Influencer collaboration",
      "Conversion optimization"
    ]
  },
  {
    title: "Product Cataloging & Photography",
    description: "Make your listings stand out. From professional photos to keyword-rich descriptions, we help craft listings that convert browsers into buyers.",
    icon: "📸",
    color: "#0ea5e9",
    features: [
      "High-resolution product shoots",
      "SEO-optimized content",
      "Bulk catalog uploads",
      "Platform-specific templates"
    ]
  }
];


const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="services-section py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16 text-gray-900"
      >
        Our <span className="text-[#b73235]">Services</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className={`service-card relative overflow-hidden rounded-xl shadow-lg cursor-pointer ${expandedService === index ? 'expanded' : ''}`}
            onClick={() => setExpandedService(expandedService === index ? null : index)}
            onHoverStart={() => setHoveredService(index)}
            onHoverEnd={() => setHoveredService(null)}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            layout
          >
            {/* Background gradient that animates on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br opacity-10"
              style={{
                background: `linear-gradient(135deg, ${service.color} 0%, #ffffff 100%)`,
              }}
              animate={{
                opacity: hoveredService === index ? 0.2 : 0.1
              }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="flex items-start mb-6">
                <motion.div 
                  className="service-icon text-4xl p-4 rounded-full mr-4"
                  style={{ backgroundColor: `${service.color}20` }}
                  animate={{
                    rotate: hoveredService === index ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-md font-bold text-gray-900 mt-2">{service.title}</h3>
              </div>

              <AnimatePresence>
                <motion.div
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: expandedService === index ? 1 : 0.8,
                    height: expandedService === index ? 'auto' : '60px'
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mb-6"
                >
                  {service.description}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                {expandedService === index && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-auto space-y-2"
                  >
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center"
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <motion.div
                className="mt-6 pt-4 border-t border-gray-200"
                animate={{
                  opacity: expandedService === index ? 1 : 0,
                  height: expandedService === index ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: service.color }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-6 rounded-lg font-medium text-white"
                  style={{ backgroundColor: service.color }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;