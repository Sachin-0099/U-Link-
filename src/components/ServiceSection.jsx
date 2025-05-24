
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const { t } = useTranslation();
  const [quickViewData, setQuickViewData] = useState(null);
  const navigate = useNavigate();


  const services = [
    {
      id: t("marketplace-onboarding"),
      title: t("Marketplace Onboarding for Indian Sellers"),
      description: t("Seamlessly launch your business on platforms like Amazon India, Flipkart, and Snapdeal. We guide you through every step — from account setup to catalog creation — ensuring you're marketplace-ready across India."),
      image: "/Images/AccountH.avif",
      color: "#4f46e5",
      link: "/market",
      features: [
        t("Precision implementation"),
        t("Quality assurance"),
        t("Continuous improvement"),
        t("Client-focused solutions")
      ]
    },
    {
      id: "cross-border-ecommerce",
      title: t("Cross-Border eCommerce Solutions from India"),
      description: t("Sell globally from India with zero hassle. Our end-to-end export services help businesses access international markets, managing logistics, compliance, and payment processing."),
      image: "/Images/crossBorder.avif",
      color: "#10b981",
      link: "/cross-border",
      
      features: [
        t("Comprehensive screening"),
        t("Skills assessment"),
        t("Cultural fit evaluation"),
        t("Industry-specific expertise")
      ]
    },
    {
      id: "inventory-management",
      title: t("Smart Inventory & Order Management for Indian Sellers"),
      description: t("Stay on top of your stock and sales across marketplaces like Amazon.in, Flipkart.com, and Reliance Digital. Our dashboard supports real-time inventory tracking for sellers in India."),
      image: "/Images/Inventory & Order Management.avif",
      color: "#f59e0b",
      link: "/inventory-management",
      
      features: [
        t("Real-time tracking"),
        t("Automated stock alerts"),
        t("Multi-platform sync"),
        t("Detailed analytics")
      ]
    },
    {
      id: "last-mile-delivery",
      title: t("India-Focused Last-Mile Delivery & Logistics"),
      description: t("Fast, reliable delivery across India. We offer integrated shipping services including COD, express shipping, and pan-India fulfillment."),
      image: "/Images/Last-Mile Delivery & Logistics.avif",
      color: "#ef4444",
      link:"/last-mile",
      features: [
        t("Flexible delivery options"),
        t("Real-time tracking"),
        t("Return handling"),
        t("Pan-India reach")
      ]
    },
    {
      id: "digital-marketing",
      title: t("Digital Marketing & Growth Strategy for India"),
      description: t("Grow your online presence across India. We specialize in performance marketing, SEO for local languages, and high-conversion campaigns tailored to platforms popular in India."),
      image: "/Images/Digital Marketing & Growth Strategy.avif",
      color: "#6366f1",
      features: [
        t("Performance-based marketing"),
        t("Brand awareness campaigns"),
        t("Influencer collaboration"),
        t("Conversion optimization")
      ]
    },
    {
      id: "product-cataloging",
      title: t("Product Cataloging & Photography for Indian Marketplaces"),
      description: t("Make your listings stand out on Indian eCommerce platforms. From professional shoots to local language content optimization, we help sellers improve visibility and conversions."),
      image: "/Images/Product Cataloging & Photography  .avif",
      color: "#0ea5e9",
      features: [
        t("High-resolution product shoots"),
        t("SEO-optimized content"),
        t("Bulk catalog uploads"),
        t("Platform-specific templates")
      ]
    },
    {
      id: "It-services",
      title: t("IT Services & Infrastructure for Indian Enterprises"),
      description: t("Empower your business in India with robust IT solutions. From cloud hosting to software development, we provide secure, scalable tech services tailored for companies across India."),
      image: "/Images/IT Services & Infrastructure.avif",
      color: "#3b82f6",
      features: [
        t("Cloud hosting & support"),
        t("Custom app development"),
        t("Security & compliance"),
        t("Tech infrastructure setup")
      ]
    },
    {
      id: "Logistics-management",
      title: t("Integrated Logistics Management for Indian Businesses"),
      description: t("Optimize logistics across India. From warehousing in Mumbai to delivery in Bangalore, our tech-enabled logistics service ensures efficiency throughout the supply chain."),
      image: "/Images/Last-Mile Delivery & Logistics.avif",
      color: "#8b5cf6",
      features: [
        t("Smart warehousing"),
        t("Route optimization"),
        t("Reverse logistics"),
        t("Carrier integration")
      ]
    },
    {
      id: "Brand-empowerment",
      title: t("Brand Empowerment Solutions for Indian Markets"),
      description: t("Take control of your brand's image across India. We help you protect your brand, engage customers, and establish presence across platforms like Amazon India, Flipkart, and more."),
      image: "/Images/Brand Empowerment Solutions.avif",
      color: "#ec4899",
      features: [
        t("Brand protection tools"),
        t("Trademark & IP support"),
        t("Audience engagement"),
        t("Marketplace brand stores")
      ]
    },
    {
      id: "Global-reach",
      title: t("Global Reach Enablement from India"),
      description: t("Expand globally from your Indian base. Our services localize your strategy for international markets while ensuring compliance and customer alignment worldwide."),
      image: "/Images/Global.avif",
      color: "#14b8a6",
      features: [
        t("Market localization"),
        t("International compliance"),
        t("Global payment gateways"),
        t("Cultural adaptation")
      ]
    },
    {
      id: "Branch-expansion",
      title: t("Branch Expansion Strategy Across India"),
      description: t("Thinking of opening new branches in Mumbai, Delhi, or Bangalore? Our data-driven strategies help you choose the right location, build infrastructure, and scale efficiently across India."),
      image: "/Images/Branch Expansion Strategy.avif",
      color: "#f97316",
      features: [
        t("Location analytics"),
        t("Market demand forecasting"),
        t("Franchise models"),
        t("Operational planning")
      ]
    },
    {
      id: "customer-expectations",
      title: t("Customer Expectations Management in India"),
      description: t("Build long-lasting customer relationships in India. We design feedback loops, support systems, and loyalty strategies for businesses across Indian cities."),
      image: "/Images/Customer Expectations Management.avif",
      color: "#10b981",
      features: [
        t("Feedback management"),
        t("Retention campaigns"),
        t("Customer support setup"),
        t("Satisfaction tracking")
      ]
    },
    {
      id: "warehouse-rent",
      title: t("Warehouse Rental Solutions in India"),
      description: t("Find and manage warehouse spaces tailored to your business needs in Mumbai, Delhi, and other major Indian cities, with flexible lease terms and prime locations."),
      image: "/Images/warehouse-rent.avif",
      color: "#f59e0b",
      features: [
        t("Flexible lease agreements"),
        t("Strategic locations"),
        t("Secure and monitored facilities")
      ]
    },
  ];
  
    
    
  

  const openQuickView = (service) => {
    setQuickViewData(service);
  };

  const closeQuickView = () => {
    setQuickViewData(null);
  };

  return (
    <section className="services-section py-16 lg:py-24 px-4 sm:px-6 " aria-label={t("Our eCommerce Services")}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#b73235] uppercase bg-[#009000]/10 rounded-full mb-4">
            {t("Our Solutions")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
            {t("Comprehensive")} <span className="text-[#b73235]">{t("eCommerce Services")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("End-to-end solutions to launch, manage, and scale your online business across all major platforms")}
          </p>
        </motion.header>

        {/* Services Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.article 
              key={service.id}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full">
                {/* Service Image Banner - Clickable for Quick View */}
                <div 
                  className="relative h-48 w-full overflow-hidden cursor-pointer"
                  onClick={() => openQuickView(service)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
          
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 flex gap-3">
                <motion.button
                  onClick={() => openQuickView(service)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-3 px-4 rounded-lg font-medium transition-all border border-gray-300 bg-white text-gray-700"
                  aria-label={t("Learn more")}
                >
                  {t("Learn More")}
                </motion.button>
                <motion.button
                onClick={() => navigate(service.link)}
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: service.color,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 px-4 rounded-lg font-semibold text-white transition-all"
                  style={{ backgroundColor: service.color }}
                  aria-label={`Get started with ${service.title}`}
                >
                  {t("Get Started")}
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Quick View Modal */}
        <AnimatePresence>
          {quickViewData && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeQuickView}
            >
              <motion.div 
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* Close Button */}
                  <button 
                    onClick={closeQuickView}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                    aria-label={t("Close quick view")}
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  {/* Quick View Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="lg:sticky lg:top-0 h-full">
                      <div className="h-64 lg:h-full w-full overflow-hidden">
                        <img
                          src={quickViewData.image}
                          alt={quickViewData.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 lg:p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{quickViewData.title}</h2>
                      
                      <p className="text-gray-600 mb-6">{quickViewData.description}</p>
                      
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        {t("Key Features")}
                      </h3>
                      
                      <ul className="space-y-3 mb-8">
                        {quickViewData.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg 
                              className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" 
                              style={{ color: quickViewData.color }} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                        onClick={() => navigate(service.link)}
                          whileHover={{ 
                            scale: 1.03, 
                            backgroundColor: quickViewData.color,
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all"
                          style={{ backgroundColor: quickViewData.color }}
                          aria-label={`Get started with ${quickViewData.title}`}
                        >
                          {t("Get Started")}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {t("Need a custom solution for your business?")}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            {t("Our team of eCommerce experts can tailor a package specifically for your business needs and growth goals")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:dhiraj@ulinkit.com?subject=Custom eCommerce Solution Inquiry">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0, 144, 0, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#b73235] hover:bg-[#b73235] text-white font-semibold py-3 px-8 rounded-lg text-base transition-all"
                aria-label={t("Contact our experts")}
              >
                {t("Contact Our Experts")}
              </motion.button>
            </a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled
              className="bg-white text-[#b73235] font-semibold py-3 px-8 rounded-lg text-base border-2 border-[#b73235] transition-all opacity-50 cursor-not-allowed"
              aria-label={t("Case studies (coming soon)")}
            >
              {t("Case Studies Coming Soon")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
