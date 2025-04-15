import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SidebarLayout from '@/layouts/SidebarLayout';

const Profile: React.FC = () => {
  const [profile, setProfile] = React.useState({
    name: 'Steve Andre',
    address: 'DfyGjCgf6zDxvCcwvQcKxRZfqzf8BBU1DrcoqfGf1C4',
    status: 'Stockist',
    affiliateLink: 'https://mpro.net/?aff=Xyhdkie',
    totalBalance: 4900
  });
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(profile.affiliateLink)
      .then(() => {
        alert('Affiliate link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <SidebarLayout>
      <div className="flex flex-col space-y-6">
        <div className="h-48 bg-gradient-to-r from-primary/20 to-blue-900/40 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mp-card overflow-hidden -mt-20 md:-mt-16 p-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-4">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mp-card p-6 h-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-4">
                  <div>
                    <h3 className="text-gray-400 mb-1">Your Address</h3>
                    <div className="bg-card/60 p-3 rounded-lg text-sm overflow-hidden overflow-ellipsis">
                      {profile.address}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-400 mb-1">Status</h3>
                    <div className="bg-card/60 p-3 rounded-lg">
                      <span className="text-primary">{profile.status}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-400 mb-1">Affiliate Link</h3>
                    <div className="bg-card/60 p-3 rounded-lg flex items-center justify-between">
                      <span className="text-sm overflow-hidden overflow-ellipsis">{profile.affiliateLink}</span>
                      <Button className="bg-green-500 hover:bg-green-600 text-black rounded-full px-4" onClick={handleCopyLink}>
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mp-card p-6 border-2 border-primary/20 h-full flex flex-col justify-center items-center">
                    <h3 className="text-gray-400 mb-3">Total Balance</h3>
                    <p className="text-3xl font-bold text-primary mb-2">{profile.totalBalance} MPRO</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Profile;