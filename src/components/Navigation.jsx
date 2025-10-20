// components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personalData';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    // Convert section names to IDs (e.g., "Club Activities" -> "club-activities")
    const id = sectionId.toLowerCase().replace(/\s+/g, '-');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeFile;
    link.download = PERSONAL_INFO.resumeFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigationItems = ['About', 'Work', 'Skills', 'Achievements', 'Certifications', 'Club Activities', 'Contact'];

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-50/95 backdrop-blur-xl border-b border-slate-200 shadow-lg' 
          : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Animated Profile Image in Header */}
            <div className={`transition-all duration-700 ease-in-out transform ${
              isScrolled 
                ? 'opacity-100 scale-100 translate-x-0 rotate-0' 
                : 'opacity-0 scale-0 -translate-x-8 -rotate-180'
            }`}>
              <div 
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400/30 shadow-lg cursor-pointer hover:border-emerald-400 hover:scale-110 transition-all duration-300"
                onClick={() => setShowSpotlight(true)}
                title="Click to view profile picture"
              >
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-xl sm:text-2xl font-bold text-slate-900">
              {PERSONAL_INFO.name}
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={handleDownloadResume}
              className="px-3 lg:px-4 py-2 bg-emerald-400 text-slate-900 rounded-full hover:bg-emerald-300 transition-all duration-300 font-medium text-sm flex items-center space-x-2 transform hover:scale-105"
            >
              <Download size={14} />
              <span className="hidden lg:inline">Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-1 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-b-2xl shadow-2xl shadow-slate-900/20 z-50">
            <div className="flex flex-col space-y-1 p-4">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300 font-medium py-3 px-4 rounded-xl"
                >
                  {item}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-200 mt-2">
                <button 
                  onClick={() => {
                    handleDownloadResume();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-emerald-400 text-slate-900 rounded-xl px-4 py-3 font-medium hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Download size={16} />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </nav>

      {/* Spotlight Modal for Profile Picture */}
      {showSpotlight && (
        <div 
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowSpotlight(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowSpotlight(false)}
            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors duration-300 z-10"
            aria-label="Close spotlight"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Profile Image with Zoom Effect */}
          <div 
            className="relative max-w-2xl w-full animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto rounded-2xl overflow-hidden border-8 border-emerald-400/30 shadow-2xl shadow-emerald-400/20">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name Label */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h3>
              <p className="text-emerald-400 text-lg">{PERSONAL_INFO.title}</p>
            </div>
          </div>
          
          {/* Help Text */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
            Click anywhere to close
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;