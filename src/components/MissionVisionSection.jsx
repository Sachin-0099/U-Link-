import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { div } from 'framer-motion/client';

const MissionVisionSection = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [hoverState, setHoverState] = useState({
    mission: false,
    vision: false
  });

  const content = {
    mission: {
      title: "Our Mission",
      text: "Our mission is to provide our clients with best-in-class services, all under one roof. We are committed to delivering excellence through innovation, professionalism, and integrity in everything we do. By offering a comprehensive range of solutions tailored to meet diverse needs, we aim to become a trusted partner in our clients' growth journey. Whether it's through our cutting-edge strategies, personalized support, or a seamless experience, we strive to exceed expectations and create lasting value for every client we serve.",
      icon: "🎯",
      bgColor: "linear-gradient(135deg, #00aeef 0%, #b388eb 100%)"



      ,
      accentColor: "#00aeef"
    },
    vision: {
      title: "Our Vision",
      text: "Our vision is to excel as the world's leading procurement and trading connectivity group. We aspire to set new benchmarks in global trade by creating a seamless, efficient, and trusted network that connects businesses across borders. Through innovation, strategic partnerships, and a deep understanding of global markets, we aim to empower our clients with unmatched opportunities and value. Our goal is not just to lead the industry, but to redefine it—making international trade more accessible, transparent, and impactful for businesses of all sizes.",
      icon: "🔭",
      bgColor: "linear-gradient(135deg, #bf3235 0%, #ff9a9e 100%)"


      ,

      accentColor: "#b73235"
    }
  };

  return (
    <div className='py-20'>
    <div className="mission-vision-container ">
      <div className="mission-vision-section">
        <div className="tab-buttons">
          <motion.button
            className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: hoverState.mission ? content.mission.accentColor : "#f0f0f0"
            }}
            onHoverStart={() => setHoverState({...hoverState, mission: true})}
            onHoverEnd={() => setHoverState({...hoverState, mission: false})}
            animate={{
              backgroundColor: activeTab === 'mission' ? content.mission.accentColor : "#f0f0f0",
              color: activeTab === 'mission' ? "white" : "#333"
            }}
            transition={{ duration: 0.3 }}
          >
            Mission
          </motion.button>
          <motion.button
            className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => setActiveTab('vision')}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: hoverState.vision ? content.vision.accentColor : "#f0f0f0"
            }}
            onHoverStart={() => setHoverState({...hoverState, vision: true})}
            onHoverEnd={() => setHoverState({...hoverState, vision: false})}
            animate={{
              backgroundColor: activeTab === 'vision' ? content.vision.accentColor : "#f0f0f0",
              color: activeTab === 'vision' ? "white" : "#333"
            }}
            transition={{ duration: 0.3 }}
          >
            Vision
          </motion.button>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              background: content[activeTab].bgColor
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="tab-content"
          >
            <motion.div 
              className="content-icon"
              animate={{ rotate: 360 }}
              transition={{ 
                rotate: { 
                  repeat: Infinity, 
                  duration: 10, 
                  ease: "linear" 
                } 
              }}
            >
              {content[activeTab].icon}
            </motion.div>
            <motion.h3
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {content[activeTab].title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {content[activeTab].text}
            </motion.p>
            <motion.div 
              className="corner-decoration"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.6 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
};

export default MissionVisionSection;