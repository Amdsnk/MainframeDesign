import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '240+', label: 'Projects Completed' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '15TB', label: 'Data Processed' },
  { value: '42ms', label: 'Response Time' }
];

const StatItem: React.FC<Stat & { index: number }> = ({ value, label, index }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <motion.div 
        className="text-4xl font-heading font-bold mb-2"
        animate={{ 
          scale: [1, 1.03, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 2 + index * 0.5,
          ease: "easeInOut" 
        }}
      >
        <span className="gradient-text">{value}</span>
      </motion.div>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
