import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Affiliate: React.FC = () => {
  const [searchAddress, setSearchAddress] = useState('');
  
  const affiliateData = [
    { id: 1, address: 'DFyGjCgfRzDvxCcwOcKxRZNqZfBBBUIDrcopf4QF1C4', registerDate: '2025-03-12 / 13:00:00', totalTeams: 100 },
    { id: 2, address: 'DFyGjCgfRzDvxCcwOcKxRZNqZfBBBUIDrcopf4QF1C4', registerDate: '2025-03-12 / 13:00:00', totalTeams: 100 },
    { id: 3, address: 'DFyGjCgfRzDvxCcwOcKxRZNqZfBBBUIDrcopf4QF1C4', registerDate: '2025-03-12 / 13:00:00', totalTeams: 100 },
    { id: 4, address: 'DFyGjCgfRzDvxCcwOcKxRZNqZfBBBUIDrcopf4QF1C4', registerDate: '2025-03-12 / 13:00:00', totalTeams: 100 },
    { id: 5, address: 'DFyGjCgfRzDvxCcwOcKxRZNqZfBBBUIDrcopf4QF1C4', registerDate: '2025-03-12 / 13:00:00', totalTeams: 100 },
    { id: 6, address: 'DFyGjCgfRzDvxCcwOcKxRZNqZfBBBUIDrcopf4QF1C4', registerDate: '2025-03-12 / 13:00:00', totalTeams: 100 },
    { id: 7, address: 'DFyGjCgfRzDvxCcwOcKxRZNqZfBBBUIDrcopf4QF1C4', registerDate: '2025-03-12 / 13:00:00', totalTeams: 100 },
    { id: 8, address: 'DFyGjCgfRzDvxCcwOcKxRZNqZfBBBUIDrcopf4QF1C4', registerDate: '2025-03-12 / 13:00:00', totalTeams: 100 },
  ];
  
  // Button for viewing details
  const ViewButton = ({ id }: { id: number }) => (
    <Button
      className="bg-[#4ADE80] hover:bg-[#22C55E] rounded-full text-black font-medium w-full"
      onClick={() => console.log(`View affiliate ${id}`)}
    >
      View
    </Button>
  );

  return (
    <div className="min-h-screen bg-[#0A1728] text-white flex">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#0A1728] border-r border-[#1E2D3D]">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L0 10L20 20L40 10L20 0Z" fill="#00E5FF"/>
              <path d="M0 10V30L20 40V20L0 10Z" fill="#00B8CC"/>
              <path d="M40 10V30L20 40V20L40 10Z" fill="#00B8CC"/>
            </svg>
            <div className="font-bold text-white text-lg leading-tight">MAX<br/>PROPERTY</div>
          </div>
        </div>
        
        <div className="mt-8">
          <div onClick={() => window.location.href = '/dashboard'} className="flex items-center gap-3 px-6 py-3 text-white hover:bg-[#1E2D3D]/50 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="10" height="10" fill="currentColor"/>
              <rect x="14" width="10" height="10" fill="currentColor"/>
              <rect y="14" width="10" height="10" fill="currentColor"/>
              <rect x="14" y="14" width="10" height="10" fill="currentColor"/>
            </svg>
            Dashboard
          </div>
          
          <div onClick={() => window.location.href = '/affiliate'} className="flex items-center gap-3 px-6 py-3 bg-[#00E5FF] text-black font-medium cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 8L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 11L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Affiliate
          </div>
          
          <div onClick={() => window.location.href = '/buy-nft'} className="flex items-center gap-3 px-6 py-3 text-white hover:bg-[#1E2D3D]/50 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="7" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 11H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Buy NFT
          </div>
          
          <div onClick={() => window.location.href = '/earning'} className="flex items-center gap-3 px-6 py-3 text-white hover:bg-[#1E2D3D]/50 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Earning
          </div>
          
          <div onClick={() => window.location.href = '/rewards'} className="flex items-center gap-3 px-6 py-3 text-white hover:bg-[#1E2D3D]/50 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Rewards
          </div>
          
          <div onClick={() => window.location.href = '/collections'} className="flex items-center gap-3 px-6 py-3 text-white hover:bg-[#1E2D3D]/50 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Collections
          </div>
          
          <div onClick={() => window.location.href = '/dividend-share'} className="flex items-center gap-3 px-6 py-3 text-white hover:bg-[#1E2D3D]/50 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Dividend Share
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-[220px] border-t border-[#1E2D3D] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-sm text-white">Steve Andre</div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6 flex justify-between items-center border-b border-[#1E2D3D]">
          <h1 className="text-3xl font-semibold">Affiliate</h1>
          
          <div className="flex items-center gap-4">
            <div className="bg-[#0F1F36] rounded-full flex items-center gap-2 px-3 py-2">
              <svg className="text-white" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm">DFyGjCgf6........................4QF1C4</span>
            </div>
            
            <Button className="bg-[#00E5FF] hover:bg-[#00B8CC] text-black font-medium rounded-full px-6">
              Disconnect
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <div className="flex">
                <div className="flex-1">
                  <div className="relative">
                    <div className="bg-[#001324] border border-[#0A304F] rounded-full px-5 py-3 text-white">
                      <span className="text-white">Address :</span>
                    </div>
                  </div>
                </div>
                <Button className="ml-4 h-12 bg-[#0F1F36] hover:bg-[#1E2D3D] rounded-full px-8 text-white border border-[#0A304F]">
                  Find
                </Button>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="bg-[#0A1728] rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="grid grid-cols-5 py-4 px-8 bg-[#0A1728] border-b border-[#102341]">
              <div className="text-white font-medium">No</div>
              <div className="text-white font-medium">Address</div>
              <div className="text-white font-medium">Register Date</div>
              <div className="text-white font-medium">Total Teams</div>
              <div className="text-white font-medium">Action</div>
            </div>
            
            {/* Table rows */}
            <div className="h-[450px] overflow-y-auto">
              {affiliateData.map((affiliate) => (
                <div key={affiliate.id} className="grid grid-cols-5 py-4 px-8 bg-[#1E3251] border-b border-[#102341]">
                  <div className="text-white">{affiliate.id}.</div>
                  <div className="text-white text-sm font-mono">{affiliate.address}</div>
                  <div className="text-white">{affiliate.registerDate}</div>
                  <div className="text-[#00E5FF] flex items-center">
                    <span className="mr-1">{affiliate.totalTeams}</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="w-24">
                      <Button
                        className="bg-[#4ADE80] hover:bg-[#22C55E] rounded-full text-black font-medium w-full"
                        onClick={() => console.log(`View affiliate ${affiliate.id}`)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;