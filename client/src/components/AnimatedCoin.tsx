import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import coinImage from '@assets/mp 1.png';

interface AnimatedCoinProps {
  className?: string;
  size?: string;
}

const AnimatedCoin: React.FC<AnimatedCoinProps> = ({ 
  className = '',
  size = 'w-[400px] h-[400px]'
}) => {
  const coinRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Add cursor following effect like on twelvezodiac.co
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !coinRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate mouse position relative to center
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      // Calculate rotation (limit the effect)
      const rotateY = mouseX * 0.01;
      const rotateX = mouseY * -0.01;
      
      // Apply subtle tilt to the coin based on mouse position
      coinRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };
    
    // Reset position when mouse leaves
    const handleMouseLeave = () => {
      if (coinRef.current) {
        coinRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={`mp-coin-container ${size} relative ${className}`}
    >
      <motion.div
        ref={coinRef}
        className="mp-coin w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateY: 360
        }}
        transition={{ 
          duration: 1.5,
          rotateY: {
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }
        }}
      >
        <img 
          src={coinImage} 
          alt="Max Property Coin" 
          className="w-full h-full object-contain"
        />
        <div className="mp-coin-shine rounded-full"></div>
      </motion.div>
      
      {/* Light glow effect behind the coin */}
      <div className="absolute inset-0 -z-10 blur-2xl opacity-30 rounded-full bg-primary/30"></div>
    </div>
  );
};

export default AnimatedCoin;