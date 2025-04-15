import React from 'react';
import { motion } from 'framer-motion';

interface GeometricShapeProps {
  className?: string;
  size?: string;
  color?: string;
  position?: string;
  delay?: number;
  duration?: number;
  type?: 'circle' | 'square' | 'triangle';
}

const GeometricShape: React.FC<GeometricShapeProps> = ({
  className = '',
  size = 'w-32 h-32',
  color = 'bg-gradient-to-r from-[#00F0FF] to-transparent',
  position = 'left-[10%] top-[20%]',
  delay = 0,
  duration = 15,
  type = 'circle'
}) => {
  let shapeClass = '';
  
  switch (type) {
    case 'circle':
      shapeClass = 'rounded-full';
      break;
    case 'square':
      shapeClass = 'rounded-md';
      break;
    case 'triangle':
      // Triangle is handled differently with a clip-path
      shapeClass = 'clip-path-triangle';
      break;
    default:
      shapeClass = 'rounded-full';
  }

  return (
    <motion.div
      className={`hero-shape ${position} ${size} ${color} ${shapeClass} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4],
        y: [0, -20, 0],
        filter: ['blur(2px)', 'blur(3px)', 'blur(2px)']
      }}
      transition={{ 
        repeat: Infinity,
        repeatType: 'reverse',
        duration: duration,
        delay: delay,
        ease: 'easeInOut'
      }}
    />
  );
};

export default GeometricShape;
