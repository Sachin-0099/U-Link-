import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

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
  const containerRef = useRef();

  return (
    <section className="py-12 md:py-20 px-4 bg-white" aria-label="Our Company Journey Timeline">
      {/* Header with semantic HTML */}
      <header className="text-center mb-12 md:mb-16">
        <p className="text-lg text-gray-600 mb-2">Our Journey and Success milestone till</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#b73235]">
          Global Business <span className="text-gray-800">Journey</span>
        </h1>
      </header>

      {/* Timeline */}
      <div
        className="relative overflow-x-auto scroll-smooth snap-x snap-mandatory"
        ref={containerRef}
      >
        {/* Horizontal Line through numbers */}
        <div className="absolute top-[30px] left-0 h-1 w-full bg-[#b73235] z-0" />

        <div className="flex space-x-8 md:space-x-20 min-w-[1000px] justify-start z-10 relative px-4">
          {milestones.map((milestone, index) => (
            <motion.article
              key={milestone.id}
              className="flex flex-col items-center w-48 snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              aria-labelledby={`milestone-${milestone.id}-title`}
            >
              {/* Number Circle with glow */}
              <div className="relative z-10 group">
                <div
                  className={`w-12 md:w-14 h-12 md:h-14 flex items-center justify-center rounded-full border-4 shadow-xl text-white font-semibold text-lg transition duration-300 transform group-hover:scale-110 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-[#b73235]"
                  } border-white`}
                  id={`milestone-${milestone.id}-title`}
                  aria-hidden="true"
                >
                  {milestone.id}
                </div>
              </div>

              {/* Connector Line */}
              <div className="w-1 h-8 bg-gray-800 mt-1 mb-2 z-10" />

              {/* Milestone Card with tilt + glow on hover */}
              <motion.div
                className="w-40 md:w-48 h-40 md:h-48 rounded-full relative overflow-hidden flex items-center justify-center text-center text-white text-xs md:text-sm px-4 border-4 border-gray-200 shadow-lg group cursor-pointer"
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  backgroundImage: `url(${milestone.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label={`Milestone ${milestone.id}: ${milestone.description}`}
                role="img"
              >
                <div className="absolute inset-0 bg-black/60 rounded-full transition-opacity duration-300 group-hover:bg-black/70" />
                <p className="relative z-10">{milestone.description}</p>
                {/* Hidden for screen readers since text is already visible */}
                <span className="sr-only">{milestone.alt}</span>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Navigation instructions for mobile users */}
      <p className="text-center mt-8 text-gray-600 md:hidden">
        Swipe horizontally to view all milestones
      </p>
    </section>
  );
};

export default CompanyJourney;