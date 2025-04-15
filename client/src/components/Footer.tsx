import React from 'react';
import { motion } from 'framer-motion';

interface FooterLink {
  name: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

const resourceLinks: FooterLink[] = [
  { name: 'Documentation', href: '#' },
  { name: 'API Reference', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Privacy Policy', href: '#' }
];

const socialLinks = [
  { icon: 'fa-twitter', href: '#' },
  { icon: 'fa-linkedin-in', href: '#' },
  { icon: 'fa-github', href: '#' },
  { icon: 'fa-medium-m', href: '#' }
];

const FooterLinkList: React.FC<{ title: string, links: FooterLink[] }> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-heading font-bold text-lg mb-6">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 * index }}
          >
            <a 
              href={link.href} 
              className="text-gray-400 hover:text-[#00F0FF] transition-colors duration-300"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] py-16 border-t border-[#333333]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 relative overflow-hidden mr-3">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF00F5] rounded-md"></div>
                <div className="absolute inset-1 bg-[#1A1A1A] rounded-md flex items-center justify-center">
                  <span className="text-foreground font-heading font-bold">TZ</span>
                </div>
              </div>
              <h2 className="text-xl font-heading font-bold">
                <span className="gradient-text">TWELVE ZODIAC</span>
              </h2>
            </motion.div>
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Pioneering the future of digital infrastructure with advanced technologies and innovative solutions for businesses of all sizes.
            </motion.p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center hover:bg-[#00F0FF]/20 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                >
                  <i className={`fab ${social.icon} text-[#00F0FF]`}></i>
                </motion.a>
              ))}
            </div>
          </div>
          
          <FooterLinkList title="Quick Links" links={quickLinks} />
          <FooterLinkList title="Resources" links={resourceLinks} />
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} Twelve Zodiac. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
