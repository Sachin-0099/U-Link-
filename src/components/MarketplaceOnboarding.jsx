import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MarketplaceOnboarding = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const serviceData = {
    id: t("marketplace-onboarding"),
    title: t("Marketplace Onboarding for Indian Sellers"),
    description: t("Seamlessly launch your business on platforms like Amazon India, Flipkart, and Snapdeal. We guide you through every step — from account setup to catalog creation — ensuring you're marketplace-ready across India."),
    image: "/Images/AccountH.avif",
    color: "#4f46e5",
    features: [
      t("Precision implementation"),
      t("Quality assurance"),
      t("Continuous improvement"),
      t("Client-focused solutions")
    ]
  };

  const marketplaceLogos = [
    "/Images/am.webp",
    "/Images/fkheaderlogo_exploreplus-44005d.svg",
    "/Images/snapdeal-logo-35C2DB3916-seeklogo.com.png",
    "/Images/Meesho_logo.png",
    "/Images/jio.png"
  ];

  const featureDetails = [
    t("Our team meticulously implements your marketplace strategy, ensuring all technical and operational requirements are met with precision."),
    t("Rigorous quality checks at every stage to maintain high standards and compliance with marketplace policies."),
    t("Ongoing optimization of your marketplace presence based on performance analytics and changing platform algorithms."),
    t("Tailored solutions designed around your specific business needs and marketplace objectives.")
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
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
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
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {serviceData.title}
          </h1>
          <p className="mt-5 max-w-5xl mx-auto text-xl text-gray-500">
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
                alt="Marketplace onboarding"
                className="w-full h-auto object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-[#b73235 ] opacity-0"
                animate={{ opacity: isHovered ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Marketplace Logos */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              variants={itemVariants}
            >
              {marketplaceLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={logo} 
                    alt="Marketplace logo" 
                    className="h-10 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {t("Our Onboarding Process Includes")}
              </h2>
              
              <div className="space-y-6">
                {serviceData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${activeFeature === index ? 'bg-red-50 border-l-4 border-[#b73235]' : 'bg-white shadow-md hover:shadow-lg'}`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${activeFeature === index ? 'bg-[#b73235] text-white' : 'bg-red-100 text-[#b73235]'}`}>
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      <div className="ml-4">
                        <h3 className={`text-lg font-medium ${activeFeature === index ? 'text-[#b73235]' : 'text-gray-900'}`}>
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
                <button className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#b73235] hover:bg-[#b73235] md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105">
                  {t("Get Started with Onboarding")}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Section */}
        <motion.div 
          className="mt-24 bg-[#b73235] rounded-2xl p-8 sm:p-12 text-white"
          variants={itemVariants}
        >
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="h-12 w-12 text-red-200 mx-auto"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="mt-6 text-xl sm:text-2xl font-medium">
              <p>
                {t("Thanks to their onboarding service, we were able to launch on three major Indian marketplaces in just two weeks. Our products were live with perfect listings from day one.")}
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-4">
              <img
                className="h-12 w-12 rounded-full"
                src="/Images/2.webp"
                alt="Rahul Sharma"
              />
              <div className="text-left">
                <div className="font-semibold">Dhiraj Kumar Gupta</div>
                <div className="text-red-200">Founder, Ulinkit</div>
              </div>
            </figcaption>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MarketplaceOnboarding;