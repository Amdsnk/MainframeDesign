import { useEffect, useState, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;  // Speed factor (default: 0.5)
  direction?: 'vertical' | 'horizontal';  // Direction of parallax effect
}

const useParallax = <T extends HTMLElement>(
  ref: RefObject<T>,
  options: ParallaxOptions = {}
) => {
  const { speed = 0.5, direction = 'vertical' } = options;
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      
      if (direction === 'vertical') {
        setOffset({ x: 0, y: scrollY * speed * -1 });
      } else {
        // For horizontal parallax (less common)
        setOffset({ x: scrollY * speed * -1, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed, direction]);

  return offset;
};

export default useParallax;
