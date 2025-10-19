// components/Footer.jsx
import React from 'react';
import { FOOTER_INFO } from '../portfolioData';

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
            {FOOTER_INFO.copyright}
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-slate-400 text-xs sm:text-sm">
            <span>{FOOTER_INFO.tech}</span>
            <span className="hidden sm:inline">•</span>
            <span>{FOOTER_INFO.hosting}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;