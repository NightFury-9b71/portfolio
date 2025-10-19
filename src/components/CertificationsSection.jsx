// components/CertificationsSection.jsx
import React, { useState } from 'react';
import { Award, BookOpen, Calendar, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../portfolioData';
import ImageModal from './ImageModal';

/**
 * CertificationsSection Component
 * 
 * Displays certifications, courses, and training with certificate viewing capability.
 * 
 * SOLID Principles:
 * - Single Responsibility: Manages certification display only
 * - Open/Closed: Extensible for new certification types
 * - Dependency Inversion: Uses imported data structure
 */
const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleViewCertificate = (cert) => {
    // Combine certificate and moment images, filter out invalid paths
    const allImages = [
      ...(cert.hasCertificate && cert.certificatePdf ? [cert.certificatePdf] : []),
      ...(cert.momentImages || [])
    ].filter(img => img && img.trim() !== '');
    
    if (allImages.length > 0) {
      setSelectedCert({ ...cert, images: allImages });
      setCurrentImageIndex(0);
      setModalOpen(true);
    }
  };

  const categories = ['all', 'Course', 'Event Organizing', 'Volunteer'];
  
  const filteredCertifications = activeFilter === 'all' 
    ? CERTIFICATIONS_DATA 
    : CERTIFICATIONS_DATA.filter(cert => cert.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Course':
        return <BookOpen className="text-blue-500" size={20} />;
      case 'Event Organizing':
        return <Award className="text-emerald-500" size={20} />;
      case 'Volunteer':
        return <CheckCircle className="text-purple-500" size={20} />;
      default:
        return <Award className="text-emerald-500" size={20} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Course':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Event Organizing':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Volunteer':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Certifications & <span className="font-bold text-emerald-600">Training</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Continuous learning through courses, organizing events, and contributing to the tech community
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeFilter === category
                  ? 'bg-emerald-400 text-slate-900 shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-400/20 transition-all duration-500 transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 sm:p-8">
                {/* Header with Icon and View Button */}
                <div className="flex items-center justify-between mb-4 gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(cert.category)}
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(cert.category)}`}>
                        {cert.category}
                      </span>
                      <div className="flex items-center space-x-2 mt-2 text-xs text-slate-500">
                        <Calendar size={14} />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* View Certificate/Moments Button */}
                  {(cert.hasCertificate || cert.hasMoments) && (
                    <button
                      onClick={() => handleViewCertificate(cert)}
                      className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-medium text-sm whitespace-nowrap"
                      title="View Certificate/Moments"
                    >
                      <ImageIcon size={18} />
                      <span>View</span>
                    </button>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Provider */}
                <p className="text-sm text-emerald-600 font-semibold mb-3">
                  {cert.provider}
                </p>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certificate Status */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2 items-center">
                    {cert.hasCertificate && (
                      <div className="flex items-center space-x-2 text-emerald-600 text-sm font-medium">
                        <Award size={16} />
                        <span>Certificate</span>
                      </div>
                    )}
                    {cert.hasMoments && (
                      <div className="flex items-center space-x-2 text-blue-600 text-sm font-medium">
                        <ImageIcon size={16} />
                        <span>Moments</span>
                      </div>
                    )}
                    {!cert.hasCertificate && !cert.hasMoments && (
                      <div className="flex items-center space-x-2 text-slate-400 text-sm">
                        <CheckCircle size={16} />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-400/5 to-transparent rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
              {CERTIFICATIONS_DATA.filter(c => c.category === 'Course').length}
            </div>
            <div className="text-sm text-slate-600">Courses</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">
              {CERTIFICATIONS_DATA.filter(c => c.category === 'Event Organizing').length}
            </div>
            <div className="text-sm text-slate-600">Events Organized</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
              {CERTIFICATIONS_DATA.filter(c => c.category === 'Volunteer').length}
            </div>
            <div className="text-sm text-slate-600">Volunteer Work</div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          images={selectedCert.images}
          currentIndex={currentImageIndex}
          onNavigate={setCurrentImageIndex}
          title={selectedCert.title}
          enableDownload={true}
        />
      )}
    </section>
  );
};

export default CertificationsSection;
