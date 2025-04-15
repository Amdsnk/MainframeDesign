import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SidebarLayout from '@/layouts/SidebarLayout';

interface RewardItem {
  id: number;
  date: string;
  reason: string;
  amount: number;
  status: 'Success' | 'Pending' | 'Failed';
}

const Rewards: React.FC = () => {
  const [rewardsData] = React.useState({
    totalBonus: 5000,
    totalWithdraw: 100,
    remainingBalance: 4900
  });
  
  const [startDate, setStartDate] = React.useState('01-02-2025');
  const [endDate, setEndDate] = React.useState('01-02-2025');
  
  const [rewardItems, setRewardItems] = React.useState<RewardItem[]>([
    { id: 1, date: '2025-03-12 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: 'Success' },
    { id: 2, date: '2025-03-12 / 13:00:00', reason: 'Stockist Reward', amount: 1, status: 'Success' },
    { id: 3, date: '2025-03-12 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: 'Success' },
    { id: 4, date: '2025-03-12 / 13:00:00', reason: 'Stockist Reward', amount: 1, status: 'Success' },
    { id: 5, date: '2025-03-12 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: 'Success' },
    { id: 6, date: '2025-03-12 / 13:00:00', reason: 'Stockist Reward', amount: 1, status: 'Success' },
    { id: 7, date: '2025-03-12 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: 'Success' },
    { id: 8, date: '2025-03-12 / 13:00:00', reason: 'Stockist Reward', amount: 1, status: 'Success' },
  ]);
  
  const handleSearch = () => {
    // Search logic would go here in a real app
    console.log('Searching between', startDate, 'and', endDate);
  };

  return (
    <SidebarLayout>
      <div className="flex flex-col space-y-6">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div 
            className="mp-card relative overflow-hidden p-6 border-l-4 border-primary bg-card/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full"></div>
            <div className="absolute right-3 top-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-gray-400">Total Bonus</p>
              <p className="text-xl font-bold text-primary">{rewardsData.totalBonus} MPRO</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mp-card relative overflow-hidden p-6 border-l-4 border-gray-600 bg-card/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gray-700/20 rounded-bl-full"></div>
            <div className="absolute right-3 top-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16.1C2 16.1 7.5 20 12 20C16.5 20 22 16.1 22 16.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 7.90002C2 7.90002 7.5 4.00002 12 4.00002C16.5 4.00002 22 7.90002 22 7.90002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-gray-400">Total Withdraw</p>
              <p className="text-xl font-bold">{rewardsData.totalWithdraw} MPRO</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mp-card relative overflow-hidden p-6 border-l-4 border-green-500 bg-card/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-bl-full"></div>
            <div className="absolute right-3 top-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C16.5 22 20 19 20 12C20 5 16.5 2 12 2C7.5 2 4 5 4 12C4 19 7.5 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-gray-400">Remaining Balance</p>
              <p className="text-xl font-bold text-green-500">{rewardsData.remainingBalance} MPRO</p>
            </div>
            
            <Button className="mt-4 mp-button bg-green-500 hover:bg-green-600 text-sm px-4 py-1 h-8">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Withdraw
            </Button>
          </motion.div>
        </div>
        
        {/* Date Filter */}
        <motion.div 
          className="mp-card p-4 flex flex-col md:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex-1 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative flex items-center">
                <span className="mr-4 text-sm text-gray-400">Start Date :</span>
                <input
                  type="text"
                  className="flex-1 p-2 rounded-lg bg-card border border-border/50 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <div className="absolute right-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="relative flex items-center">
                <span className="mr-4 text-sm text-gray-400">End Date :</span>
                <input
                  type="text"
                  className="flex-1 p-2 rounded-lg bg-card border border-border/50 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <div className="absolute right-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Button className="mp-button bg-green-500 hover:bg-green-600" onClick={handleSearch}>
              <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Find
            </Button>
          </div>
        </motion.div>
        
        {/* Rewards Table */}
        <motion.div 
          className="mp-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">No</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Reason</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {rewardItems.map((item) => (
                  <tr key={item.id} className="mp-table-row">
                    <td className="px-6 py-4 text-sm whitespace-nowrap">{item.id}</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">{item.date}</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">{item.reason}</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">{item.amount} MPRO</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-500">
                        <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </SidebarLayout>
  );
};

export default Rewards;