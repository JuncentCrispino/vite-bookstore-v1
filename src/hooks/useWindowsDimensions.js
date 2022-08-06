import { useState, useEffect } from 'react';

function getWindowsDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowsDimensions() {
  const [dimensions, setDimensions] = useState(getWindowsDimensions());

  useEffect(() => {
    const handleResize = () => setDimensions(getWindowsDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}
