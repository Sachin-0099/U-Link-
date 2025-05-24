import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const InventoryManagement = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const serviceData = {
    id: "inventory-management",
    title: t("Smart Inventory & Order Management for Indian Sellers"),
    description: t("Stay on top of your stock and sales across marketplaces like Amazon.in, Flipkart.com, and Reliance Digital. Our dashboard supports real-time inventory tracking for sellers in India."),
    image: "/Images/Inventory & Order Management.avif",
    color: "#f59e0b",
    features: [
      t("Real-time tracking"),
      t("Automated stock alerts"),
      t("Multi-platform sync"),
      t("Detailed analytics")
    ]
  };

  const featureDetails = [
    t("Track your inventory levels in real-time to avoid stockouts or overstocking across all connected platforms."),
    t("Get automated notifications and alerts when your inventory drops below threshold levels."),
    t("Seamlessly sync stock updates across Amazon, Flipkart, Reliance Digital and more."),
    t("Visualize your sales trends and stock performance with our easy-to-understand dashboards and reports.")
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            {serviceData.title}
          </h1>
          <p className="mt-5 max-w-5xl mx-auto text-xl text-gray-600">
            {serviceData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative"
            variants={itemVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={serviceData.image}
                alt="Inventory & Order Management"
                className="w-full h-auto object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-yellow-500 opacity-0"
                animate={{ opacity: isHovered ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {t("What We Offer")}
              </h2>
              
              <div className="space-y-6">
                {serviceData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${activeFeature === index ? 'bg-yellow-50 border-l-4 border-yellow-600' : 'bg-white shadow-md hover:shadow-lg'}`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${activeFeature === index ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-600'}`}>
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      <div className="ml-4">
                        <h3 className={`text-lg font-medium ${activeFeature === index ? 'text-yellow-600' : 'text-gray-900'}`}>
                          {feature}
                        </h3>
                        {activeFeature === index && (
                          <motion.p 
                            className="mt-2 text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {featureDetails[index]}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                variants={itemVariants}
              >
                <a href="/get-started" className="inline-block">
                  <button className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105">
                    {t("Start Managing Inventory")}
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InventoryManagement;
