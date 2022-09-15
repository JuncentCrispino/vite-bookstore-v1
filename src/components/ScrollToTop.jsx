import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="top-to-btm">
      {showScroll && <FaAngleUp className="icon-position icon-style" onClick={goToTop}/>}
    </div>
  );
}
