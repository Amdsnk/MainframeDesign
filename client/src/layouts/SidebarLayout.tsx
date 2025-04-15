import React from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { FiGrid, FiUsers, FiShoppingBag, FiDollarSign, FiGift, FiFolder, FiPieChart, FiUser } from 'react-icons/fi';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const [location] = useLocation();
  const [user, setUser] = React.useState({
    name: 'Steve Andre',
    walletId: 'DfyGjCgf6zDxvCcwvQcKxRZfqzf8BBU1DrcoqfGf1C4'
  });

  const menuItems = [
    { id: 'dashboard', icon: <FiGrid size={18} />, label: 'Dashboard', path: '/dashboard' },
    { id: 'affiliate', icon: <FiUsers size={18} />, label: 'Affiliate', path: '/affiliate' },
    { id: 'buy-nft', icon: <FiShoppingBag size={18} />, label: 'Buy NFT', path: '/buy-nft' },
    { id: 'earning', icon: <FiDollarSign size={18} />, label: 'Earning', path: '/earning' },
    { id: 'rewards', icon: <FiGift size={18} />, label: 'Rewards', path: '/rewards' },
    { id: 'collections', icon: <FiFolder size={18} />, label: 'Collections', path: '/collections' },
    { id: 'dividend-share', icon: <FiPieChart size={18} />, label: 'Dividend Share', path: '/dividend-share' },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  const truncateAddress = (address: string) => {
    if (!address) return '';
    return `${address.substring(0, 8)}...............${address.substring(address.length - 6)}`;
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 mp-sidebar flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-border">
          <Link href="/">
            <a className="flex items-center">
              <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0L52.9412 13.0196L69.0196 10.9804L66.9804 27.0588L80 40L66.9804 52.9412L69.0196 69.0196L52.9412 66.9804L40 80L27.0588 66.9804L10.9804 69.0196L13.0196 52.9412L0 40L13.0196 27.0588L10.9804 10.9804L27.0588 13.0196L40 0Z" fill="url(#paint0_linear_1_133)"/>
                <path d="M27.5 27.5H52.5V52.5H27.5V27.5Z" fill="url(#paint1_linear_1_133)"/>
                <defs>
                <linearGradient id="paint0_linear_1_133" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F0FF"/>
                <stop offset="1" stopColor="#00F0FF" stopOpacity="0.2"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_133" x1="27.5" y1="27.5" x2="52.5" y2="52.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F0FF"/>
                <stop offset="1" stopColor="#00F0FF" stopOpacity="0.3"/>
                </linearGradient>
                </defs>
              </svg>
              <div className="ml-2">
                <div className="font-bold text-primary">MAX</div>
                <div className="font-bold -mt-1 text-white">PROPERTY</div>
              </div>
            </a>
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => (
            <Link key={item.id} href={item.path}>
              <a className={`mp-sidebar-item ${isActive(item.path) ? 'active' : ''}`}>
                {item.icon}
                <span>{item.label}</span>
              </a>
            </Link>
          ))}
        </div>

        {/* User */}
        <Link href="/profile">
          <a className={`mp-sidebar-item border-t border-border ${isActive('/profile') ? 'active' : ''}`}>
            <FiUser size={18} />
            <span>{user.name}</span>
          </a>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card/80 backdrop-blur-md border-b border-border p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold hidden md:block">
            {menuItems.find((item) => isActive(item.path))?.label || 'Dashboard'}
          </h1>
          <div className="flex gap-4 items-center ml-auto">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
              <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-xs">
                <FiUser size={14} />
              </div>
              <span className="hidden md:inline">{truncateAddress(user.walletId)}</span>
            </div>
            <Button variant="default" className="rounded-full text-xs md:text-sm bg-primary text-black hover:bg-primary/90">
              {location === '/' ? 'Connect Wallet' : 'Disconnect'}
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;