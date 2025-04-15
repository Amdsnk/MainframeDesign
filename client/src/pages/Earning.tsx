import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SidebarLayout from '@/layouts/SidebarLayout';

interface EarningItem {
  id: number;
  image: string;
  startEarning: string;
  estimatedEarning: number;
}

const Earning: React.FC = () => {
  // Placeholder images for properties
  const propertyImages = [
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  ];

  const [earningItems, setEarningItems] = React.useState<EarningItem[]>([
    { 
      id: 1, 
      image: propertyImages[0], 
      startEarning: '01-01-2025 13:00', 
      estimatedEarning: 10 
    },
    { 
      id: 2, 
      image: propertyImages[1], 
      startEarning: '01-01-2025 13:00', 
      estimatedEarning: 10 
    },
    { 
      id: 3, 
      image: propertyImages[2], 
      startEarning: '01-01-2025 13:00', 
      estimatedEarning: 10 
    }
  ]);

  return (
    <SidebarLayout>
      <div className="flex flex-col space-y-6">
        {/* Airdrop Info */}
        <motion.div 
          className="bg-primary/10 rounded-xl p-4 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-semibold text-primary">Airdrop 5% / Month</div>
          <Button className="mp-button flex items-center">
            <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            START EARNING
          </Button>
        </motion.div>
        
        {/* Earning Items */}
        <div className="space-y-4">
          {earningItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="mp-card p-4 md:p-6 flex flex-col md:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full md:w-1/6">
                <div className="rounded-xl overflow-hidden w-24 h-24 mx-auto md:mx-0">
                  <img 
                    src={item.image} 
                    alt={`Property ${item.id}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center md:items-start">
                  <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">Start Earning</span>
                      <span>{item.startEarning}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 5H9.5C8.83696 5 8.20107 5.26339 7.73223 5.73223C7.26339 6.20107 7 6.83696 7 7.5C7 8.16304 7.26339 8.79893 7.73223 9.26777C8.20107 9.73661 8.83696 10 9.5 10H14.5C15.163 10 15.7989 10.2634 16.2678 10.7322C16.7366 11.2011 17 11.837 17 12.5C17 13.163 16.7366 13.7989 16.2678 14.2678C15.7989 14.7366 15.163 15 14.5 15H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">Estimated Earning</span>
                      <span>{item.estimatedEarning} MPRO</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="mp-button bg-white hover:bg-white/90">
                    <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Claim
                  </Button>
                  <Button className="mp-button-outline border-red-500/50 hover:bg-red-500/10">
                    <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Stop Earning
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Earning;