import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LastMileDelivery = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const serviceData = {
    id: t("last-mile-delivery"),
    title: t("India-Focused Last-Mile Delivery & Logistics"),
    description: t("Fast, reliable delivery across India. We offer integrated shipping services including COD, express shipping, and pan-India fulfillment."),
    image: "/Images/Last-Mile Delivery & Logistics.avif",
    color: "#ef4444",
    features: [
      t("Flexible delivery options"),
      t("Real-time tracking"),
      t("Return handling"),
      t("Pan-India reach")
    ]
  };

  const featureDetails = [
    t("Customize delivery methods to meet your business and customer needs."),
    t("Monitor your shipments in real-time with GPS-integrated tracking tools."),
    t("Efficient return management to reduce losses and enhance customer trust."),
    t("Wide delivery network covering urban and rural India.")
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="min-h-screen py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            {serviceData.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
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
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src={serviceData.image}
                alt={serviceData.title}
                className="w-full h-auto object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-[#b73235] opacity-0"
                animate={{ opacity: isHovered ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
              {t("Key Delivery Features")}
            </h2>

            <div className="space-y-6">
              {serviceData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-red-50 border-l-4 border-[#b73235]'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-start">
                    <div className={`h-10 w-10 flex items-center justify-center rounded-full text-white font-bold ${activeFeature === index ? 'bg-[#b73235]' : 'bg-red-200 text-[#b73235]'}`}>
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-semibold ${activeFeature === index ? 'text-[#b73235]' : 'text-gray-900'}`}>
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

            <motion.button
              className="mt-10 px-6 py-3 text-white font-semibold bg-[#b73235] rounded-md shadow hover:shadow-lg transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              {t("Start Your Delivery Journey")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LastMileDelivery;
