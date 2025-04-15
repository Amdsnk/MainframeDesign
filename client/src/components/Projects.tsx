import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  technologies: {
    name: string;
    color: 'accent1' | 'accent2' | 'gray';
  }[];
}

const projects: Project[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80',
    title: 'Quantum Data Visualization',
    description: 'Interactive 3D visualization system for quantum computing data analysis.',
    technologies: [
      { name: 'React', color: 'accent1' },
      { name: 'Three.js', color: 'accent2' },
      { name: 'WebGL', color: 'gray' }
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80',
    title: 'Network Intelligence System',
    description: 'Adaptive network monitoring with predictive failure detection.',
    technologies: [
      { name: 'Node.js', color: 'accent1' },
      { name: 'MongoDB', color: 'accent2' },
      { name: 'AI', color: 'gray' }
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80',
    title: 'Blockchain Security Shield',
    description: 'Decentralized security framework utilizing blockchain verification.',
    technologies: [
      { name: 'Solidity', color: 'accent1' },
      { name: 'Web3', color: 'accent2' },
      { name: 'Ethereum', color: 'gray' }
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80',
    title: 'Neural Interface Dashboard',
    description: 'Real-time monitoring system for neural network operations.',
    technologies: [
      { name: 'Python', color: 'accent1' },
      { name: 'TensorFlow', color: 'accent2' },
      { name: 'Vue.js', color: 'gray' }
    ]
  }
];

const ProjectCard: React.FC<Project & { index: number }> = ({ imageUrl, title, description, technologies, index }) => {
  return (
    <motion.div 
      className="card-hover rounded-xl overflow-hidden border border-[#333333] relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/20 to-[#FF00F5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      <div className="w-full h-64 overflow-hidden">
        <motion.img 
          src={imageUrl} 
          alt={title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-6 bg-[#1A1A1A]">
        <h4 className="text-xl font-heading font-bold mb-2">{title}</h4>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-4">
          {technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className={`px-3 py-1 rounded-full text-xs ${
                tech.color === 'accent1' 
                  ? 'bg-[#00F0FF]/20 text-[#00F0FF]' 
                  : tech.color === 'accent2' 
                    ? 'bg-[#FF00F5]/20 text-[#FF00F5]' 
                    : 'bg-gray-700 text-gray-300'
              }`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm md:text-base font-mono text-[#00F0FF] mb-4 tracking-widest">PORTFOLIO</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            <span className="gradient-text">Featured</span> Projects
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            variant="outline_gradient" 
            size="rounded"
          >
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
