import { div } from 'framer-motion/client';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setStartCounting(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=' py-20'>
    <div className="stats-section ">
      <div className="stat-item ">
        <h3>
          {startCounting && (
            <CountUp end={15} duration={2} suffix="+" />
          )}
        </h3>
        <p>Years of Experience</p>
      </div>
      <div className="stat-item">
        <h3>
          {startCounting && (
            <CountUp end={500} duration={2} suffix="+" />
          )}
        </h3>
        <p>Clients Served</p>
      </div>
      <div className="stat-item">
        <h3>
          {startCounting && (
            <CountUp end={40} duration={2} suffix="+" />
          )}
        </h3>
        <p>Successful Projects</p>
      </div>
    </div>
    </div>
  );
};

export default StatsSection;