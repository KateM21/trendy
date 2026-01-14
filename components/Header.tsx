
import React from 'react';
import { DownloadIcon } from './icons/DownloadIcon';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-3xl font-righteous">
          <span>TrendyKid</span>
        </a>
        <a href="#download" className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-5 rounded-full transition-transform transform hover:scale-105">
            <DownloadIcon className="w-5 h-5" />
            <span>Завантажити</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
