import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    id: "01",
    description:
      "Started as data mining firm in 2011 providing Global business based data to various clients.",
    img: "/images/journey-bg.jpg",
    alt: "Our company's early office in 2011",
  },
  {
    id: "02",
    description:
      "Started developing IT tools & outsourced clients Global business promotion activities and backend process.",
    img: "/images/journey-bg.jpg",
    alt: "Our IT development team working",
  },
  {
    id: "03",
    description:
      "Global Partnered with Amazon, Flipkart and Snapdeal for the seller onboarding program with more than 21k seller onboard.",
    img: "/images/journey-bg.jpg",
    alt: "Our e-commerce partnership celebration",
  },
  {
    id: "04",
    description:
      "Started Global warehousing business with more than 300 storage facilities in Dubai, India and USA.",
    img: "/images/journey-bg.jpg",
    alt: "One of our global warehouses",
  },
  {
    id: "05",
    description:
      "Started as a procurement firm for global trade with payment facilitations.",
    img: "/images/journey-bg.jpg",
    alt: "Global trade team meeting",
  },
];

const CompanyJourney = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-white" aria-label="Our Company Journey Timeline">
      {/* Header with semantic HTML */}
      <header className="text-center mb-12 md:mb-16">
        <p className="text-lg text-gray-600 mb-2">Our Journey and Success milestone till</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#b73235]">
          Global Business <span className="text-gray-800">Journey</span>
        </h1>
      </header>

      {/* Timeline - Vertical on mobile, horizontal on desktop */}
      <div className="relative">
        {/* Horizontal Line through numbers - Hidden on mobile */}
        <div className="hidden md:block absolute top-[30px] left-0 h-1 w-full bg-[#b73235] z-0" />

        <div className="md:flex md:space-x-20 md:min-w-[1000px] md:justify-start md:relative md:px-4">
          {milestones.map((milestone, index) => (
            <motion.article
              key={milestone.id}
              className="flex flex-col items-center mb-12 md:mb-0 w-full md:w-48"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              aria-labelledby={`milestone-${milestone.id}-title`}
            >
              {/* Number Circle with glow */}
              <div className="relative z-10 group flex md:block items-center">
                {/* Vertical line for mobile */}
                <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gray-800 -z-10" />
                
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full border-4 shadow-xl text-white font-semibold text-lg transition duration-300 transform group-hover:scale-110 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-[#b73235]"
                  } border-white`}
                  id={`milestone-${milestone.id}-title`}
                  aria-hidden="true"
                >
                  {milestone.id}
                </div>
                
                {/* Title for mobile */}
                <h2 className="md:hidden ml-4 text-xl font-semibold text-gray-800">
                  Milestone {milestone.id}
                </h2>
              </div>

              {/* Connector Line - Hidden on mobile */}
              <div className="hidden md:block w-1 h-8 bg-gray-800 mt-1 mb-2 z-10" />

              {/* Milestone Card */}
              <motion.div
                className="mt-4 md:mt-0 w-full md:w-48 h-48 rounded-xl md:rounded-full relative overflow-hidden flex items-center justify-center text-center text-white text-sm px-6 md:px-4 border-4 border-gray-200 shadow-lg group cursor-pointer"
                whileHover={{ scale: 1.02, rotateZ: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  backgroundImage: `url(${milestone.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label={`Milestone ${milestone.id}: ${milestone.description}`}
                role="img"
              >
                <div className="absolute inset-0 bg-black/60 rounded-xl md:rounded-full transition-opacity duration-300 group-hover:bg-black/70" />
                <p className="relative z-10 px-2">{milestone.description}</p>
                <span className="sr-only">{milestone.alt}</span>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyJourney;