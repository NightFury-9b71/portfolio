// components/WorkSection.jsx
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS_DATA } from '../portfolioData';

const WorkSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [fullViewImage, setFullViewImage] = useState(null);

  // Auto-slide images for all projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = { ...prev };
        PROJECTS_DATA.forEach(project => {
          // Only update if project has images
          if (project.images && project.images.length > 0) {
            const currentIndex = newIndex[project.id] || 0;
            newIndex[project.id] = (currentIndex + 1) % project.images.length;
          }
        });
        return newIndex;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.type === activeTab);

  const projectTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'desktop', label: 'Desktop Apps' },
    { id: 'iot', label: 'IoT & Robotics' }
  ];

  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Featured <span className="font-bold text-emerald-600">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6 sm:mb-8"></div>
          
          {/* Project Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
            {projectTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-emerald-400 text-slate-900'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-8 sm:space-y-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-400/20 transition-all duration-700 transform hover:scale-[1.02] hover:ring-2 hover:ring-emerald-400/30 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
              onMouseEnter={() => setActiveCard(project.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Project Image Gallery */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="relative h-64 sm:h-80 lg:h-96">
                  {/* Image Container */}
                  <div 
                    className="relative w-full h-full bg-slate-900 cursor-pointer" 
                    onClick={(e) => {
                      // Only open modal if clicking directly on the container, not buttons
                      if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
                        setFullViewImage(project.images[currentImageIndex[project.id] || 0]);
                      }
                    }}
                  >
                    {project.images.map((image, imageIndex) => (
                      <img 
                        key={imageIndex}
                        src={image} 
                        alt={`${project.title} - Image ${imageIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 transform ${
                          imageIndex === (currentImageIndex[project.id] || 0)
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-110'
                        } group-hover:scale-110`}
                      />
                    ))}
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    {project.status}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-mono shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    {project.year}
                  </div>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-6 left-6 flex space-x-2 z-10">
                    {project.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(prev => ({
                            ...prev,
                            [project.id]: imageIndex
                          }));
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          imageIndex === (currentImageIndex[project.id] || 0)
                            ? 'bg-emerald-400 w-6'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => ({
                        ...prev,
                        [project.id]: prev[project.id] === 0 
                          ? project.images.length - 1 
                          : (prev[project.id] || 0) - 1
                      }));
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => ({
                        ...prev,
                        [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
                      }));
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Category and Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-emerald-600 font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.role && (
                      <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                        {project.role}
                      </span>
                    )}
                    {project.teamwork && (
                      <span className="text-xs text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                        Team Project
                      </span>
                    )}
                    {project.status && (
                      <span className="text-xs text-slate-600 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-2 text-sm bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-3 px-6 py-3 bg-emerald-400 text-slate-900 rounded-xl hover:bg-emerald-300 transition-all duration-300 font-semibold text-sm group-hover:shadow-lg transform hover:scale-105"
                        title="View Live Project"
                      >
                        <ExternalLink size={18} />
                        <span>View Live</span>
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-3 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 font-semibold text-sm transform hover:scale-105"
                        title="View Source Code"
                      >
                        <Github size={18} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {!project.live && !project.github && project.hasScreenshots && (
                      <div className="flex items-center space-x-2 text-slate-500 text-sm">
                        <span>📸 Screenshots Available</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-400/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/5 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Full View Image Modal */}
      {fullViewImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setFullViewImage(null)}
        >
          <button
            onClick={() => setFullViewImage(null)}
            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors duration-300 z-10"
            aria-label="Close full view"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={fullViewImage} 
              alt="Full view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
            Click anywhere outside the image to close
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;