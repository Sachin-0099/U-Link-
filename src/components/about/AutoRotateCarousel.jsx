import React, { useEffect, useState } from 'react';

const AutoRotateCarousel = ({ items, activeIndex, setActiveIndex, interval = 5000 }) => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, setActiveIndex, isPaused]);

  return (
    <div aria-label="Auto rotating carousel controls" style={{ marginTop: '1rem' }}>
      <button
        onClick={() => setIsPaused(prev => !prev)}
        aria-pressed={isPaused}
        aria-label={isPaused ? 'Resume carousel auto rotation' : 'Pause carousel auto rotation'}
        className="px-4 py-2 bg-[#b73235] text-white rounded"
      >
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default AutoRotateCarousel;
