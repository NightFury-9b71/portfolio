// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, MapPin, Award, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeFile;
    link.download = PERSONAL_INFO.resumeFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">        
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-6 sm:mb-8">
          <div 
            className={`w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/20 mb-4 sm:mb-6 shadow-xl transition-all duration-700 ease-in-out transform cursor-pointer hover:border-emerald-400 hover:shadow-2xl ${
              isScrolled 
                ? 'opacity-30 scale-75 rotate-12' 
                : 'opacity-100 scale-100 rotate-0'
            }`}
            onClick={() => setShowSpotlight(true)}
            title="Click to view larger image"
          >
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 tracking-tight">
          <span className="font-extralight text-slate-400">Hello, I'm</span>
          <br />
          <span className="font-bold text-slate-900">{PERSONAL_INFO.name}</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-slate-600 font-light px-4">
          {PERSONAL_INFO.title}
        </p>
        
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-slate-500 max-w-2xl mx-auto leading-relaxed px-4">
          {PERSONAL_INFO.description}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
          <div className="flex items-center space-x-2 text-slate-600 bg-slate-50 px-3 sm:px-4 py-2 rounded-full text-sm">
            <MapPin size={14} />
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-600 bg-slate-50 px-3 sm:px-4 py-2 rounded-full text-sm">
            <Award size={14} />
            <span>{PERSONAL_INFO.department}</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-3 sm:px-4 py-2 rounded-full text-sm font-semibold">
            <Eye size={14} />
            <span>{PERSONAL_INFO.availability}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-xl text-center"
          >
            Get In Touch
          </a>
          <button 
            onClick={handleDownloadResume}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-slate-300 text-slate-700 rounded-full hover:border-slate-400 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:bg-slate-50 flex items-center justify-center space-x-2"
          >
            <Download size={18} />
            <span>View Resume</span>
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-emerald-300 text-emerald-700 rounded-full hover:border-emerald-400 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:bg-emerald-50"
          >
            View Projects
          </button>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="text-slate-400 hover:text-slate-600 transition-all duration-300 animate-bounce"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Spotlight Modal for Profile Picture */}
      {showSpotlight && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
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
    </section>
  );
};

export default Hero;