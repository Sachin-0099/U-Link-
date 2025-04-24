import React from 'react'
import { FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from 'react';
import { motion } from 'framer-motion';
const timelineData = [
  {
    year: "2011",
    title: "Founded",
    description: "U-link IT US began its journey in 2011 as a data mining firm specializing in global business intelligence. We provided comprehensive data solutions to clients worldwide, helping them make informed decisions in an increasingly digital marketplace. Our early focus on data accuracy and actionable insights laid the foundation for our future expansion into eCommerce services.",
    detailedDescription: [
      "Established as a data analytics provider for global markets",
      "Developed proprietary data mining techniques",
      "Built relationships with international business partners",
      "Specialized in market trend analysis and consumer behavior insights"
    ],
    image: "/Images/Founded.avif",
  },
  {
    year: "2013",
    title: "IT Services Expansion",
    description: "Recognizing the growing demand for digital solutions, we expanded into IT services in 2013. Our team developed custom tools for business promotion and streamlined backend processes, helping clients navigate the complexities of global eCommerce. This marked our transition from data provider to full-service technology partner.",
    detailedDescription: [
      "Launched first suite of business automation tools",
      "Developed proprietary analytics platforms",
      "Expanded team with IT specialists and developers",
      "Implemented cloud-based solutions for clients"
    ],
    image: "/Images/It.avif",
  },
  {
    year: "2014",
    title: "Amazon Partnership",
    description: "2014 was a landmark year as we became an official Amazon SPN (Service Provider Network) partner. We onboarded over 200,000 sellers to Amazon's global marketplace, providing comprehensive support from account setup to ongoing management. Our partnership established us as leaders in eCommerce enablement.",
    detailedDescription: [
      "Official Amazon Service Provider Network certification",
      "Developed specialized onboarding processes",
      "Created training programs for new marketplace sellers",
      "Expanded operations to support European and Asian markets"
    ],
    image: "/Images/Enhancement.avif",
  },
  {
    year: "2016",
    title: "Global Warehousing",
    description: "To support our growing client base, we established a network of 300+ storage facilities across Dubai, India, and the USA in 2016. This global logistics infrastructure allowed us to offer end-to-end solutions, from product sourcing to last-mile delivery, significantly enhancing our service offerings.",
    detailedDescription: [
      "Implemented inventory management systems",
      "Developed cross-border shipping solutions",
      "Integrated warehouse management software",
      "Established quality control processes"
    ],
    image: "/Images/Product.avif",
  },
  {
    year: "2017",
    title: "Financial Services",
    description: "In 2017, we introduced RFQ (Request for Quotation) systems and credit finance options to help businesses manage cash flow and procurement. These financial services complemented our eCommerce solutions, providing clients with a complete business ecosystem for growth and scalability.",
    detailedDescription: [
      "Developed digital RFQ platform",
      "Partnered with financial institutions",
      "Implemented secure payment gateways",
      "Created credit risk assessment tools"
    ],
    image: "/Images/Rfq.webp",
  },
  {
    year: "2024",
    title: "Market Leadership",
    description: "Today, U-link IT US stands as a market leader with millions of inventory items under management and a vast network of satisfied clients. Our continuous innovation and commitment to excellence have positioned us at the forefront of eCommerce solutions and business enablement services.",
    detailedDescription: [
      "Expanded service offerings to 50+ countries",
      "Developed AI-powered analytics tools",
      "Implemented sustainable business practices",
      "Recognized as industry leader in multiple markets"
    ],
    image: "/Images/Growth.avif",
  },
];

const Journey = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
  
  <div className="text-center pb-20 px-4 md:px-16 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-semibold text-[#2c3e50] leading-tight"
      >
        <span className="block mb-2">Our Journey and</span>
        <span className="block mb-2">Success Milestones Till</span>
        <span className="text-[#b73235] text-5xl md:text-6xl font-bold">
          Global Business{" "}
          <span className="text-[#2c3e50]">Journey</span>
        </span>
      </motion.h1>
    </div>
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Timeline line with animated dots */}
  <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#b73235] to-[#2c3e50] transform -translate-x-1/2">
    {timelineData.map((_, index) => (
      <motion.div
        key={index}
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#b73235]"
        style={{ top: `${(index * 100) / (timelineData.length - 1)}%` }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        title={`Milestone ${timelineData[index].year}`}
      />
    ))}
  </div>

  {/* Timeline items */}
  <div className="space-y-24 md:space-y-32">
    {timelineData.map((item, index) => (
      <motion.div
        key={index}
        className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {/* Year circle */}
        <div className="hidden md:flex w-1/2 justify-center">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#b73235] to-[#2c3e50] flex items-center justify-center text-white font-bold text-2xl shadow-xl transition duration-300 group-hover:scale-110">
              {item.year}
            </div>
            <span className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click for more
            </span>
          </div>
        </div>

        {/* Mobile year */}
        <div className="md:hidden w-full text-center mb-4">
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#b73235] to-[#2c3e50] text-white font-bold shadow-md">
            {item.year}
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 px-4">
          <motion.div
            className={`relative bg-white p-6 rounded-3xl shadow-2xl border-l-8 ${index % 2 === 0 ? 'border-blue-500' : 'border-green-500'} transition-all duration-300 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]`}
            whileHover={{ scale: 1.02 }}
            layout
          >
            <div className="absolute -top-5 -left-5 bg-white p-2 rounded-full shadow-md">
              <FaClock className="text-2xl text-[#b73235]" />
            </div>

            <motion.h3 className="text-3xl font-bold text-gray-800 mb-3" layout="position">
              {item.title}
            </motion.h3>

            <motion.p className="text-gray-600 mb-4 leading-relaxed" layout="position">
              {item.description}
            </motion.p>

            {expandedItems[index] && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <h4 className="font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm sm:text-base">
                  {item.detailedDescription.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {item.image && (
              <motion.div className="overflow-hidden rounded-lg mb-4" layout>
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-xl shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )}

            <motion.button
              onClick={() => toggleExpand(index)}
              className="flex items-center text-[#b73235] font-semibold mt-2 hover:underline"
              whileHover={{ x: 5 }}
            >
              {expandedItems[index] ? (
                <>
                  <span>Show Less</span>
                  <FaChevronUp className="ml-2" />
                </>
              ) : (
                <>
                  <span>Learn More</span>
                  <FaChevronDown className="ml-2" />
                </>
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </>
  )
}

export default Journey
