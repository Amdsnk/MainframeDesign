import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SidebarLayout from '@/layouts/SidebarLayout';

interface NFTItem {
  id: number;
  image: string;
  name: string;
  mintedDate: string;
  expiredDate: string;
}

const Collections: React.FC = () => {
  // Placeholder images for properties
  const propertyImages = [
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  ];

  const propertyNames = [
    "Hotel in Bali",
    "Condotel in Bandung",
    "Villa in Bali",
    "Apartment in Jakarta",
    "Beach House in Lombok",
    "Mountain Lodge in Puncak"
  ];

  const [nftItems, setNftItems] = React.useState<NFTItem[]>(
    Array.from({ length: 6 }).map((_, index) => ({
      id: index + 1,
      image: propertyImages[index % propertyImages.length],
      name: propertyNames[index % propertyNames.length],
      mintedDate: "2025-03-12",
      expiredDate: "2025-06-12"
    }))
  );

  return (
    <SidebarLayout>
      <div className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftItems.map((nft, index) => (
            <motion.div 
              key={nft.id}
              className="mp-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img 
                  src={nft.image} 
                  alt={nft.name}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white p-1 rounded-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8L2 22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 15H9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{nft.name}</h3>
                
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div>
                    <p className="text-gray-400">Minted Date:</p>
                    <p>{nft.mintedDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Expired Date:</p>
                    <p>{nft.expiredDate}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 mp-button-outline text-sm h-10">
                    <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Send
                  </Button>
                  <Button className="flex-1 mp-button-outline text-sm h-10">
                    <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 12L12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sell
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

export default Collections;