import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import GeometricShape from '@/components/GeometricShape';
import useParallax from '@/hooks/useParallax';
import useCursorFollow from '@/hooks/useCursorFollow';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  // Apply parallax effect to hero content
  const parallaxOffset = useParallax(textRef, { speed: 0.2 });
  
  // Apply cursor follow effect
  const cursorPosition = useCursorFollow(heroRef, { speed: 0.02 });

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div className="hero-grid absolute inset-0 opacity-20"></div>
      
      {/* Geometric shapes */}
      <GeometricShape 
        position="left-[10%] top-[20%]" 
        color="bg-gradient-to-r from-[#00F0FF] to-transparent" 
        delay={0}
      />
      <GeometricShape 
        position="right-[15%] top-[30%]" 
        size="w-48 h-48"
        color="bg-gradient-to-l from-[#FF00F5] to-transparent" 
        delay={2}
      />
      <GeometricShape 
        position="left-[20%] bottom-[10%]" 
        size="w-40 h-40"
        color="bg-gradient-to-tr from-[#00F0FF] to-[#FF00F5] opacity-10" 
        delay={4}
      />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div 
          ref={textRef}
          style={{ 
            y: parallaxOffset.y,
            x: cursorPosition.x
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-sm md:text-base font-mono text-[#00F0FF] mb-4 tracking-widest"
            animate={{ 
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }}
          >
            MAINFRAME_SYSTEM v1.0.2
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">TWELVE ZODIAC</span>
            <br />
            <span className="text-foreground">INTERACTIVE MAINFRAME</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A cutting-edge digital platform utilizing advanced technologies for seamless integration with next-generation applications.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button 
            variant="gradient" 
            size="rounded" 
            asChild
          >
            <a href="#features">Explore Features</a>
          </Button>
          <Button 
            variant="outline_gradient" 
            size="rounded"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
        >
          <i className="fas fa-chevron-down text-[#00F0FF] opacity-70"></i>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
