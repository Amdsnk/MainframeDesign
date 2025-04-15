import { useEffect, useState, RefObject } from 'react';

interface CursorFollowOptions {
  speed?: number;  // Follow speed factor (default: 0.1)
  reverse?: boolean;  // Whether to move away from cursor
  maxDistance?: number;  // Maximum distance to move
}

const useCursorFollow = <T extends HTMLElement>(
  ref: RefObject<T>,
  options: CursorFollowOptions = {}
) => {
  const { speed = 0.1, reverse = false, maxDistance = 50 } = options;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      // Get center of window
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center
      const distanceX = (centerX - e.clientX) * speed;
      const distanceY = (centerY - e.clientY) * speed;
      
      // Apply reverse if needed
      const directionModifier = reverse ? -1 : 1;
      
      // Limit to max distance
      const limitedX = Math.min(Math.abs(distanceX), maxDistance) * Math.sign(distanceX) * directionModifier;
      const limitedY = Math.min(Math.abs(distanceY), maxDistance) * Math.sign(distanceY) * directionModifier;
      
      setPosition({ x: limitedX, y: limitedY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref, speed, reverse, maxDistance]);
  
  return position;
};

export default useCursorFollow;
