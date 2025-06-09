import React from 'react';
import { 
  FaGlobe, FaChartLine, FaShieldAlt, FaUsers, 
  FaLightbulb, FaHandshake, FaHistory, FaBoxes 
} from 'react-icons/fa';

const NavigationTabs = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'about', title: 'About Us', icon: <FaGlobe aria-hidden="true" /> },
    { id: 'mission', title: 'Our Mission', icon: <FaLightbulb aria-hidden="true" /> },
    { id: 'vision', title: 'Our Vision', icon: <FaChartLine aria-hidden="true" /> },
    { id: 'experience', title: 'Our Experience', icon: <FaHistory aria-hidden="true" /> },
    { id: 'services', title: 'Our Services', icon: <FaBoxes aria-hidden="true" /> },
    { id: 'leadership', title: 'Leadership', icon: <FaUsers aria-hidden="true" /> },
    { id: 'partners', title: 'Global Partners', icon: <FaHandshake aria-hidden="true" /> },
  ];

  return (
    <nav aria-label="About page sections" className="sticky top-0 z-20 bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-center overflow-x-auto py-4">
          <div className="flex space-x-1" role="tablist">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                role="tab"
                aria-selected={activeSection === section.id}
                aria-controls={`${section.id}-tab`}
                id={`${section.id}-btn`}
                tabIndex={activeSection === section.id ? 0 : -1}
                className={`flex items-center px-5 py-3 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-[#b73235] ${
                  activeSection === section.id 
                    ? 'bg-[#b73235] text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#b73235]'
                }`}
              >
                <span className="mr-2 text-sm">{section.icon}</span>
                <span className="whitespace-nowrap text-sm font-medium">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationTabs;
