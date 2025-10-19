// components/ContactSection.jsx
import React from 'react';
import { Github, Linkedin, Mail, Download, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, CONTACT_MESSAGES } from '../portfolioData';

const ContactSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeFile;
    link.download = PERSONAL_INFO.resumeFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8">
            Let's <span className="font-bold text-emerald-400">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            {CONTACT_MESSAGES.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{CONTACT_MESSAGES.getInTouch}</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800 rounded-xl hover:bg-slate-700 hover:shadow-lg hover:shadow-emerald-400/20 hover:ring-1 hover:ring-emerald-400/30 transition-all duration-300 group"
              >
                <div className="p-2 sm:p-3 bg-emerald-400/10 rounded-full group-hover:bg-emerald-400/20 transition-colors duration-300">
                  <Mail className="text-emerald-400" size={18} />
                </div>
                <div>
                  <div className="font-medium text-sm sm:text-base">Email</div>
                  <div className="text-slate-300 text-xs sm:text-sm">{PERSONAL_INFO.email}</div>
                </div>
              </a>
              
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800 rounded-xl hover:bg-slate-700 hover:shadow-lg hover:shadow-emerald-400/20 hover:ring-1 hover:ring-emerald-400/30 transition-all duration-300 group"
              >
                <div className="p-2 sm:p-3 bg-emerald-400/10 rounded-full group-hover:bg-emerald-400/20 transition-colors duration-300">
                  <Phone className="text-emerald-400" size={18} />
                </div>
                <div>
                  <div className="font-medium text-sm sm:text-base">Phone</div>
                  <div className="text-slate-300 text-xs sm:text-sm">{PERSONAL_INFO.phoneDisplay}</div>
                </div>
              </a>
              
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800 rounded-xl">
                <div className="p-2 sm:p-3 bg-emerald-400/10 rounded-full">
                  <MapPin className="text-emerald-400" size={18} />
                </div>
                <div>
                  <div className="font-medium text-sm sm:text-base">Location</div>
                  <div className="text-slate-300 text-xs sm:text-sm">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{CONTACT_MESSAGES.quickMessage}</h3>
            <form className="space-y-3 sm:space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 sm:p-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-emerald-400 focus:outline-none text-white placeholder-slate-400 transition-colors duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 sm:p-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-emerald-400 focus:outline-none text-white placeholder-slate-400 transition-colors duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 sm:p-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-emerald-400 focus:outline-none text-white placeholder-slate-400 resize-none transition-colors duration-300 text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-emerald-400 text-slate-900 rounded-xl hover:bg-emerald-300 transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 sm:space-x-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-slate-700">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={20} />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 sm:p-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={20} />
          </a>
          <button
            onClick={handleDownloadResume}
            className="p-2 sm:p-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            title="View Resume"
          >
            <Download size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;