import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const services = [
  {
    id: "marketplace-onboarding",
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
    id: "cross-border-ecommerce",
    title: "Cross-Border eCommerce Solutions",
    description: "Sell globally with zero hassle. Our end-to-end export services help you take your products to international markets, managing logistics, compliance, and payment processing.",
    icon: "🌐",
    color: "#10b981",
    features: [
      "Comprehensive screening",
      "Skills assessment",
      "Cultural fit evaluation",
      "Industry-specific expertise"
    ]
  },
  {
    id: "inventory-management",
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
    id: "last-mile-delivery",
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
    id: "digital-marketing",
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
    id: "product-cataloging",
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
    <>
      <Head>
        <title>Our eCommerce Services | Comprehensive Digital Solutions</title>
        <meta name="description" content="Professional eCommerce services including marketplace onboarding, global selling, inventory management, logistics, digital marketing, and product cataloging." />
        <meta name="keywords" content="eCommerce services, marketplace onboarding, Amazon seller, Flipkart seller, global eCommerce, inventory management, digital marketing" />
      </Head>

      <section className="services-section py-12 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Our Services">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Our <span className="text-[#b73235]">eCommerce Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to grow your online business across all major platforms
          </p>
        </motion.header>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.article 
              key={service.id}
              id={service.id}
              className={`service-card relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${expandedService === index ? 'expanded' : ''}`}
              onClick={() => setExpandedService(expandedService === index ? null : index)}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              aria-labelledby={`service-title-${service.id}`}
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
              
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                <div className="flex items-start mb-4 sm:mb-6">
                  <motion.div 
                    className="service-icon text-3xl sm:text-4xl p-3 sm:p-4 rounded-full mr-3 sm:mr-4"
                    style={{ backgroundColor: `${service.color}20` }}
                    animate={{
                      rotate: hoveredService === index ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h2 id={`service-title-${service.id}`} className="text-lg sm:text-xl font-bold text-gray-900 mt-2">
                    {service.title}
                  </h2>
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
                    className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6"
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
                          className="flex items-center text-sm sm:text-base"
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <motion.div
                  className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200"
                  animate={{
                    opacity: expandedService === index ? 1 : 0,
                    height: expandedService === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: service.color }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-white text-sm sm:text-base"
                    style={{ backgroundColor: service.color }}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;