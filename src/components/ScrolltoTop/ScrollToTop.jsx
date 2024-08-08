import React, { useState, useEffect } from 'react';
import { FaArrowTurnUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond 300px
  const toggleVisibility = () => {
    if (window.window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-customorange text-white md:px-[1%] sm:px-[1.5%] px-[1%] md:py-[1%] sm:py-[1.5%] py-[1%] font-[700] animate-slideDown text-[35px] rounded-full shadow-lg"
        >
          <FaArrowTurnUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;