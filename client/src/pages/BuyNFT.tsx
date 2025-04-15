import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SidebarLayout from '@/layouts/SidebarLayout';
import AnimatedCoin from '@/components/AnimatedCoin';

interface NFTForSale {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

const BuyNFT: React.FC = () => {
  const [nftItems, setNftItems] = React.useState<NFTForSale[]>([
    {
      id: 1,
      name: 'Hotel in Bali',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      price: 100,
      description: 'Luxury hotel with ocean view, prime location in Bali with excellent investment potential.'
    },
    {
      id: 2,
      name: 'Condotel in Bandung',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      price: 80,
      description: 'Modern condotel in the highlands of Bandung, featuring mountain views and premium amenities.'
    },
    {
      id: 3,
      name: 'Villa in Bali',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      price: 120,
      description: 'Private villa with pool in exclusive Bali neighborhood, perfect for high-end rental income.'
    }
  ]);
  
  const [selectedNFT, setSelectedNFT] = React.useState<NFTForSale | null>(null);
  
  const handleSelectNFT = (nft: NFTForSale) => {
    setSelectedNFT(nft);
  };
  
  const handleBuy = () => {
    if (!selectedNFT) return;
    alert(`Processing purchase of ${selectedNFT.name} for ${selectedNFT.price} MPRO`);
  };

  return (
    <SidebarLayout>
      <div className="flex flex-col space-y-6">
        <motion.div 
          className="mp-card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-12 bg-primary rounded-full mr-3"></div>
            <h3 className="text-2xl font-bold">Available Properties</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nftItems.map((nft, index) => (
              <motion.div 
                key={nft.id} 
                className={`mp-card cursor-pointer transition-all duration-300 ${
                  selectedNFT?.id === nft.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleSelectNFT(nft)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <img 
                    src={nft.image} 
                    alt={nft.name} 
                    className="w-full h-52 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-lg font-bold text-white">{nft.name}</h4>
                    <p className="text-primary font-bold">{nft.price} MPRO</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm">{nft.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {selectedNFT && (
          <motion.div 
            className="mp-card p-6 flex flex-col md:flex-row gap-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <AnimatedCoin size="w-48 h-48" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">Purchase {selectedNFT.name}</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Price:</span>
                  <span className="font-bold">{selectedNFT.price} MPRO</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Transaction Fee:</span>
                  <span className="font-bold">1 MPRO</span>
                </div>
                
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="text-gray-400">Total:</span>
                  <span className="font-bold text-primary">{selectedNFT.price + 1} MPRO</span>
                </div>
              </div>
              
              <Button className="mp-button w-full" onClick={handleBuy}>
                Complete Purchase
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </SidebarLayout>
  );
};

export default BuyNFT;