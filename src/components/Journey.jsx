import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    id: "01",
    description:
      "Started as data mining firm in 2011 providing Global business based data to various clients.",
    img: "/images/journey-bg.jpg",
  },
  {
    id: "02",
    description:
      "Started developing IT tools & outsourced clients Global business promotion activities and backend process.",
    img: "/images/journey-bg.jpg",
  },
  {
    id: "03",
    description:
      "Global Partnered with amazon, flipkart and snapdeal for the seller onboarding program with more than 21k seller onboard.",
    img: "/images/journey-bg.jpg",
  },
  {
    id: "04",
    description:
      "Started Global warehousing business with more than 300 storage facility in Dubai, India and USA.",
    img: "/images/journey-bg.jpg",
  },
  {
    id: "05",
    description:
      "Started as a procurement firm for global trade with payment facilitations.",
    img: "/images/journey-bg.jpg",
  },
];

const CompanyJourney = () => {
  const containerRef = useRef();

  return (
    <section className="py-20 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-lg text-gray-600">Our Journey and Success milestone till</h3>
        <h2 className="text-4xl font-bold text-[#b73235]">
          Global Business <span className="text-gray-800">Journey</span>
        </h2>
      </div>

      {/* Timeline */}
      <div
        className="relative overflow-x-auto scroll-smooth snap-x snap-mandatory"
        ref={containerRef}
      >
        {/* Horizontal Line through numbers */}
        <div className="absolute top-[30px] left-0 h-1 w-full bg-[#b73235] z-0" />

        <div className="flex space-x-20 min-w-[1000px] justify-start z-10 relative px-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              className="flex flex-col items-center w-48 snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Number Circle with glow */}
              <div className="relative z-10 group">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full border-4 shadow-xl text-white font-semibold text-lg transition duration-300 transform group-hover:scale-110 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-[#b73235]"
                  } border-white`}
                >
                  {milestone.id}
                </div>
                {/* Tooltip on hover */}
               
              </div>

              {/* Connector Line */}
              <div className="w-1 h-8 bg-gray-800 mt-1 mb-2 z-10" />

              {/* Milestone Card with tilt + glow on hover */}
              <motion.div
                className="w-48 h-48 rounded-full relative overflow-hidden flex items-center justify-center text-center text-white text-sm px-4 border-4 border-gray-200 shadow-lg group cursor-pointer"
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  backgroundImage: `url(${milestone.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/60 rounded-full transition-opacity duration-300 group-hover:bg-black/70" />
                <p className="relative z-10">{milestone.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyJourney;
