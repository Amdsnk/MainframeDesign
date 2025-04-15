import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  icon: string;
  title: string;
  description: string;
  accentColor: 'accent1' | 'accent2';
}

const features: Feature[] = [
  {
    icon: 'fa-layer-group',
    title: 'Neural Processing',
    description: 'Advanced algorithms for complex data analysis and real-time decision making.',
    accentColor: 'accent1'
  },
  {
    icon: 'fa-microchip',
    title: 'Quantum Interface',
    description: 'Seamless integration with quantum computing protocols for enhanced processing.',
    accentColor: 'accent2'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Advanced Security',
    description: 'Multi-layered protection system with blockchain verification protocols.',
    accentColor: 'accent1'
  },
  {
    icon: 'fa-network-wired',
    title: 'Network Optimization',
    description: 'Automatic bandwidth allocation with predictive traffic management.',
    accentColor: 'accent2'
  },
  {
    icon: 'fa-robot',
    title: 'AI Integration',
    description: 'Seamless connectivity with artificial intelligence systems for adaptive learning.',
    accentColor: 'accent1'
  },
  {
    icon: 'fa-sync-alt',
    title: 'Real-time Updates',
    description: 'Continuous deployment system with zero-downtime implementation.',
    accentColor: 'accent2'
  }
];

const FeatureCard: React.FC<Feature & { index: number }> = ({ icon, title, description, accentColor, index }) => {
  return (
    <motion.div 
      className="card-hover bg-[#1A1A1A] rounded-xl p-8 border border-[#333333] relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${accentColor === 'accent1' ? '[#00F0FF]' : '[#FF00F5]'} rounded-full filter blur-3xl opacity-10 -mr-10 -mt-10`}></div>
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-6">
          <i className={`fas ${icon} text-${accentColor === 'accent1' ? '[#00F0FF]' : '[#FF00F5]'} text-xl`}></i>
        </div>
        <h4 className="text-xl font-heading font-bold mb-4">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm md:text-base font-mono text-[#00F0FF] mb-4 tracking-widest">CAPABILITIES</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            <span className="gradient-text">Advanced</span> Features
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
