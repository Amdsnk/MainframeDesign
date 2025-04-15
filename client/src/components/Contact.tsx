import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ContactInfo {
  icon: string;
  title: string;
  lines: string[];
}

const contactInfo: ContactInfo[] = [
  {
    icon: 'fa-map-marker-alt',
    title: 'Location',
    lines: ['Tech Hub Tower, 101 Innovation Ave', 'San Francisco, CA 94103']
  },
  {
    icon: 'fa-envelope',
    title: 'Email',
    lines: ['info@twelvezodiac.co', 'support@twelvezodiac.co']
  },
  {
    icon: 'fa-phone-alt',
    title: 'Phone',
    lines: ['+1 (415) 555-0123', '+1 (415) 555-0124']
  }
];

const ContactForm: React.FC = () => {
  return (
    <form className="relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
        <input 
          type="text" 
          id="subject" 
          className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
        <textarea 
          id="message" 
          rows={4} 
          className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50"
        ></textarea>
      </div>
      
      <div className="text-right">
        <Button 
          variant="gradient" 
          size="rounded"
          type="submit"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

const ContactInfoCard: React.FC<ContactInfo & { index: number }> = ({ icon, title, lines, index }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
    >
      <motion.div 
        className="w-12 h-12 rounded-full bg-[#00F0FF]/20 flex items-center justify-center mx-auto mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <i className={`fas ${icon} text-[#00F0FF]`}></i>
      </motion.div>
      <h4 className="font-heading font-bold mb-2">{title}</h4>
      <p className="text-gray-400">
        {lines.map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm md:text-base font-mono text-[#00F0FF] mb-4 tracking-widest">CONNECT WITH US</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            <span className="gradient-text">Ready</span> to Transform Your Digital Infrastructure?
          </h3>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-[#1A1A1A] rounded-xl p-8 md:p-12 border border-[#333333] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF] rounded-full filter blur-3xl opacity-5 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF00F5] rounded-full filter blur-3xl opacity-5 -ml-20 -mb-20"></div>
          
          <ContactForm />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={index} {...info} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
