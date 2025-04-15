import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface BenefitItem {
  text: string;
}

const benefits: BenefitItem[] = [
  { text: 'Quantum-ready Architecture' },
  { text: 'AI-Powered Analytics' },
  { text: 'Blockchain Security' },
  { text: 'Scalable Infrastructure' }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div 
                className="w-full h-80 md:h-96 bg-[#333333] rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Futuristic tech interface" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#333333]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Abstract tech pattern" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -top-8 -left-8 w-24 h-24 bg-[#00F0FF]/20 rounded-full filter blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#FF00F5]/20 rounded-full filter blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm md:text-base font-mono text-[#00F0FF] mb-4 tracking-widest">ABOUT US</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Pioneering the Future of <span className="gradient-text">Digital Infrastructure</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Twelve Zodiac was founded with a vision to revolutionize how businesses interact with technology. Our mainframe system represents the culmination of years of research and development in advanced computing technologies.
            </p>
            <p className="text-gray-300 mb-8">
              We believe in creating systems that not only meet current technological needs but anticipate future developments. Our team of experts brings together diverse expertise from quantum computing, artificial intelligence, and distributed systems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <i className="fas fa-check-circle text-[#00F0FF] mr-3"></i>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            <Button 
              variant="gradient" 
              size="rounded"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
