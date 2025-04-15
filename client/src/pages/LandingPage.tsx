import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import mpLogo from '@assets/mp 1.png';

const LandingPage: React.FC = () => {
  const coinRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const coinElement = coinRef.current;
    if (!coinElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!coinElement) return;
      
      const { left, top, width, height } = coinElement.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate the angle based on mouse position relative to center
      const angleX = (mouseY - centerY) / 20;
      const angleY = (centerX - mouseX) / 20;
      
      // Apply 3D rotation
      coinElement.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001A33] via-[#00264D] to-[#002F5C] text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L0 10L20 20L40 10L20 0Z" fill="#00E5FF"/>
              <path d="M0 10V30L20 40V20L0 10Z" fill="#00B8CC"/>
              <path d="M40 10V30L20 40V20L40 10Z" fill="#00B8CC"/>
            </svg>
            <span className="ml-2 font-bold text-white text-lg">MAX PROPERTY</span>
          </div>
        </Link>
        
        <Link href="/dashboard">
          <Button 
            className="bg-[#00E5FF] hover:bg-[#00B8CC] text-black font-semibold rounded-full px-6 cursor-pointer"
          >
            Connect Wallet
          </Button>
        </Link>
      </header>
      
      <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-16 md:mb-0">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00E5FF]">MAX</span><br />
            <span className="text-white">PROPERTY</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl max-w-md mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Max Property (MPRO) is a cryptocurrency that represents ownership
            in physical property, offering a global investment opportunity with
            blockchain transparency and high liquidity.
          </motion.p>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            ref={coinRef}
            className="relative w-72 h-72 md:w-96 md:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="coin-3d">
              <img 
                src={mpLogo} 
                alt="Max Property Coin" 
                className="w-full h-full object-contain coin-rotate"
              />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;