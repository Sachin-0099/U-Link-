import React from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ number, label, description }) => {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="text-center p-6"
      aria-labelledby={`stat-label-${label.replace(/\s+/g, '-').toLowerCase()}`}
      role="region"
    >
      <p className="text-5xl font-bold mb-2" aria-live="polite" aria-atomic="true">
        {number}
      </p>
      <h3 
        id={`stat-label-${label.replace(/\s+/g, '-').toLowerCase()}`} 
        className="text-xl font-medium mb-2"
      >
        {label}
      </h3>
      <p className="text-white/80 text-sm">{description}</p>
    </motion.section>
  );
};

export default StatItem;
