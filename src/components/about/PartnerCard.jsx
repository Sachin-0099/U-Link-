import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PartnerCard = ({ region, description, countries }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      aria-labelledby={`${region.replace(/\s+/g, '-').toLowerCase()}-heading`}
      role="region"
    >
      <h3
        id={`${region.replace(/\s+/g, '-').toLowerCase()}-heading`}
        className="text-3xl font-bold text-[#b73235] mb-4 text-center"
      >
        {region}
      </h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <ul 
        className="flex flex-wrap justify-center gap-2" 
        aria-label={`Countries in the ${region} region`}
      >
        {countries.map((country, index) => (
          <li key={index}>
            <span 
              className="bg-[#b73235]/10 text-[#b73235] px-3 py-1 rounded-full text-sm font-medium"
            >
              {country}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PartnerCard;
