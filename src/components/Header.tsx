import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Zap } from 'lucide-react';
import WalletConnect from './WalletConnect';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8" />
              <span className="text-xl font-bold">RATSO</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
                  Home
                </Link>
                <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
                  Dashboard
                </Link>
                <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
                  About
                </Link>
                <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <WalletConnect />
        </div>
      </nav>
    </header>
  );
}

export default Header;