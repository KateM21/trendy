
import React from 'react';
import { AppStoreBadge } from './icons/AppStoreBadge';
import { GooglePlayBadge } from './icons/GooglePlayBadge';
import { TwitterIcon } from './icons/TwitterIcon';
import { InstagramIcon } from './icons/InstagramIcon';


const Footer: React.FC = () => {
  return (
    <footer id="download" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-20 border-t border-slate-800">
      <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold font-righteous">TrendyKid</h3>
          <p className="text-slate-400 text-sm mt-1">Долаємо розрив між поколіннями, тренд за трендом.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><InstagramIcon className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col sm:flex-row justify-center md:justify-end items-center gap-4">
          <AppStoreBadge className="h-12"/>
          <GooglePlayBadge className="h-12"/>
        </div>
      </div>
       <div className="text-center text-sm text-slate-500 mt-10 pt-6 border-t border-slate-800">
          <p>&copy; {new Date().getFullYear()} TrendyKid. Усі права захищено.</p>
      </div>
    </footer>
  );
};

export default Footer;
