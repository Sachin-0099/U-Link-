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
    ],
    keywords: "Amazon seller setup, Flipkart onboarding, eCommerce marketplace integration"
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
    ],
    keywords: "international eCommerce, global selling, export eCommerce solutions"
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
    ],
    keywords: "eCommerce inventory management, order fulfillment, stock control"
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
    ],
    keywords: "eCommerce shipping, last-mile delivery, logistics solutions"
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
    ],
    keywords: "eCommerce marketing, online store SEO, digital advertising"
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
    ],
    keywords: "product photography, eCommerce listings, catalog management"
  }
];

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <>
      <Head>
        <title>Professional eCommerce Services | Marketplace Onboarding & Management</title>
        <meta name="description" content="Comprehensive eCommerce solutions including marketplace onboarding, global selling, inventory management, logistics, digital marketing, and product cataloging to grow your online business." />
        <meta name="keywords" content={services.map(service => service.keywords).join(', ')} />
        <meta property="og:title" content="Professional eCommerce Services | Marketplace Onboarding & Management" />
        <meta property="og:description" content="Comprehensive eCommerce solutions to help your business succeed online." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "eCommerce Solutions",
            "provider": {
              "@type": "Organization",
              "name": "Your Company Name"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "eCommerce Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "OfferCatalog",
                "itemListElement": {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                  }
                }
              }))
            }
          })}
        </script>
      </Head>

      <section className="services-section py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Our eCommerce Services">
        <div className="max-w-7xl mx-auto">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-[#b73235] uppercase">
              Our Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Comprehensive <span className="text-[#b73235]">eCommerce Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions to launch, manage, and scale your online business across all major platforms
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.article 
                key={service.id}
                id={service.id}
                className={`service-card relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 bg-white ${expandedService === index ? 'ring-2 ring-[#b73235]' : ''}`}
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                aria-labelledby={`service-title-${service.id}`}
              >
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex items-start mb-6">
                    <motion.div 
                      className="service-icon text-4xl p-4 rounded-xl mr-4 flex-shrink-0"
                      style={{ 
                        backgroundColor: `${service.color}10`,
                        color: service.color
                      }}
                      animate={{
                        rotate: hoveredService === index ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <h2 id={`service-title-${service.id}`} className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                      <span className="inline-block mt-1 text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                        {service.keywords.split(',')[0]}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: expandedService === index ? 1 : 0.8,
                        height: expandedService === index ? 'auto' : '72px'
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
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-auto"
                      >
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start text-base"
                              initial={{ x: -20 }}
                              animate={{ x: 0 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <svg 
                                className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" 
                                style={{ color: service.color }} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="mt-6 pt-4 border-t border-gray-200"
                    animate={{
                      opacity: expandedService === index ? 1 : 0,
                      height: expandedService === index ? 'auto' : 0,
                      marginTop: expandedService === index ? '1.5rem' : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.03, 
                        backgroundColor: service.color,
                        boxShadow: `0 4px 6px ${service.color}40`
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 rounded-lg font-semibold text-white text-base transition-all"
                      style={{ 
                        backgroundColor: service.color,
                        boxShadow: `0 2px 4px ${service.color}40`
                      }}
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Need a custom solution for your business?
            </h3>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#b73235] hover:bg-[#9c2a2d] text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Contact Our Experts
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;