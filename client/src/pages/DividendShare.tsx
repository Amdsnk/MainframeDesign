import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SidebarLayout from '@/layouts/SidebarLayout';

interface DividendItem {
  id: number;
  nftName: string;
  dividendDate: string;
  amount: number;
  txHash: string;
}

const DividendShare: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('all-time');
  
  const [dividendItems, setDividendItems] = React.useState<DividendItem[]>([
    { id: 1, nftName: 'Hotel Bali', dividendDate: '2025-03-12 / 13:00:00', amount: 1, txHash: 'XXXXXXXX' },
    { id: 2, nftName: 'Hotel Bali', dividendDate: '2025-03-12 / 13:00:00', amount: 1, txHash: 'XXXXXXXX' },
    { id: 3, nftName: 'Hotel Bali', dividendDate: '2025-03-12 / 13:00:00', amount: 1, txHash: 'XXXXXXXX' },
    { id: 4, nftName: 'Hotel Bali', dividendDate: '2025-03-12 / 13:00:00', amount: 1, txHash: 'XXXXXXXX' },
    { id: 5, nftName: 'Hotel Bali', dividendDate: '2025-03-12 / 13:00:00', amount: 1, txHash: 'XXXXXXXX' },
    { id: 6, nftName: 'Hotel Bali', dividendDate: '2025-03-12 / 13:00:00', amount: 1, txHash: 'XXXXXXXX' },
    { id: 7, nftName: 'Hotel Bali', dividendDate: '2025-03-12 / 13:00:00', amount: 1, txHash: 'XXXXXXXX' },
  ]);

  return (
    <SidebarLayout>
      <div className="flex flex-col space-y-6">
        <motion.div 
          className="mp-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-bold mb-4 md:mb-0">History</h3>
              
              <div className="flex space-x-2 bg-card/50 p-1 rounded-full">
                <Button 
                  className={`rounded-full text-xs px-4 py-1 h-8 ${activeTab === 'today' 
                    ? 'bg-primary text-black' 
                    : 'bg-transparent hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('today')}
                >
                  Today
                </Button>
                <Button 
                  className={`rounded-full text-xs px-4 py-1 h-8 ${activeTab === '7-days' 
                    ? 'bg-primary text-black' 
                    : 'bg-transparent hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('7-days')}
                >
                  7 Days
                </Button>
                <Button 
                  className={`rounded-full text-xs px-4 py-1 h-8 ${activeTab === '30-days' 
                    ? 'bg-primary text-black' 
                    : 'bg-transparent hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('30-days')}
                >
                  30 Days
                </Button>
                <Button 
                  className={`rounded-full text-xs px-4 py-1 h-8 ${activeTab === 'all-time' 
                    ? 'bg-primary text-black' 
                    : 'bg-transparent hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('all-time')}
                >
                  All Time
                </Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">No</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">NFT Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Dividend Date</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">TX Hash</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {dividendItems.map((item) => (
                    <tr key={item.id} className="mp-table-row">
                      <td className="px-6 py-4 text-sm whitespace-nowrap">{item.id}</td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">{item.nftName}</td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">{item.dividendDate}</td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">{item.amount} MPRO</td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">{item.txHash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </SidebarLayout>
  );
};

export default DividendShare;