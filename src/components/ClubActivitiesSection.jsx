// components/ClubActivitiesSection.jsx
import React, { useState } from 'react';
import { Users, TrendingUp, Award, Calendar, CheckCircle, DollarSign, Image as ImageIcon } from 'lucide-react';
import { CLUB_ACTIVITIES_DATA } from '../portfolioData';
import ImageModal from './ImageModal';

/**
 * ClubActivitiesSection Component
 * 
 * Displays club membership, role, and activities at Robo Society Club.
 * 
 * SOLID Principles:
 * - Single Responsibility: Displays club activities and responsibilities
 * - Open/Closed: Can be extended for multiple clubs without modification
 * - Dependency Inversion: Uses imported data configuration
 */
const ClubActivitiesSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    clubName,
    university,
    position,
    duration,
    description,
    responsibilities,
    eventsOrganized,
    achievements
  } = CLUB_ACTIVITIES_DATA;

  const handleViewMoments = (event) => {
    const momentImages = (event.momentImages || []).filter(img => img && img.trim() !== '');
    
    if (momentImages.length > 0) {
      setSelectedEvent({ ...event, images: momentImages, title: `${event.name} - Moments` });
      setCurrentImageIndex(0);
      setModalOpen(true);
    }
  };

  const handleViewCertificates = (event) => {
    const certificateImages = (event.certificateImages || []).filter(img => img && img.trim() !== '');
    
    if (certificateImages.length > 0) {
      setSelectedEvent({ ...event, images: certificateImages, title: `${event.name} - Certificates` });
      setCurrentImageIndex(0);
      setModalOpen(true);
    }
  };

  return (
    <section id="club-activities" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-emerald-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Club <span className="font-bold text-emerald-600">Leadership</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Active leadership and contribution to technical community at JUST
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 hover:shadow-emerald-400/20 transition-shadow duration-500">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 p-6 sm:p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center space-x-3 mb-2">
                  <Users size={32} />
                  <h3 className="text-2xl sm:text-3xl font-bold">{clubName}</h3>
                </div>
                <p className="text-emerald-50 text-sm sm:text-base">{university}</p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-lg sm:text-xl font-semibold mb-1">{position}</div>
                <div className="flex items-center space-x-2 text-emerald-50 text-sm">
                  <Calendar size={16} />
                  <span>{duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8">
            <p className="text-slate-600 leading-relaxed mb-8 text-base sm:text-lg">
              {description}
            </p>

            {/* Responsibilities */}
            <div className="mb-8">
              <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                <DollarSign className="text-emerald-600" size={24} />
                <span>Key Responsibilities</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300"
                  >
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 text-sm sm:text-base">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Organized */}
            <div className="mb-8">
              <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6 flex items-center space-x-2">
                <Calendar className="text-emerald-600" size={24} />
                <span>Events Organized</span>
              </h4>
              <div className="space-y-4">
                {eventsOrganized.map((event, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 last:pb-0 border-l-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300"
                  >
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-emerald-400 rounded-full shadow-lg"></div>
                    
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-2 hover:ring-emerald-400/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h5 className="text-lg font-bold text-slate-900 mb-1 sm:mb-0">{event.name}</h5>
                        <span className="text-sm text-emerald-600 font-semibold">{event.year}</span>
                      </div>
                      
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                          {event.role}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        {event.certificateImages?.filter(img => img && img.trim()).length > 0 && (
                          <button
                            onClick={() => handleViewCertificates(event)}
                            className="flex items-center space-x-2 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                          >
                            <Award size={16} />
                            <span>View Certificates</span>
                          </button>
                        )}
                        
                        {event.momentImages?.filter(img => img && img.trim()).length > 0 && (
                          <button
                            onClick={() => handleViewMoments(event)}
                            className="flex items-center space-x-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                          >
                            <ImageIcon size={16} />
                            <span>View Moments</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="text-emerald-600" size={24} />
                <span>Key Achievements</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">
              {eventsOrganized.length}
            </div>
            <div className="text-sm text-slate-600">Events Organized</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
              {eventsOrganized.filter(e => e.role.includes('Organizer')).length}
            </div>
            <div className="text-sm text-slate-600">Lead Roles</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
              {eventsOrganized.filter(e => e.role.includes('Volunteer')).length}
            </div>
            <div className="text-sm text-slate-600">Volunteer Work</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
              {achievements.length}
            </div>
            <div className="text-sm text-slate-600">Key Achievements</div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedEvent && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          images={selectedEvent.images}
          currentIndex={currentImageIndex}
          onNavigate={setCurrentImageIndex}
          title={selectedEvent.title || selectedEvent.name}
          enableDownload={true}
        />
      )}
    </section>
  );
};

export default ClubActivitiesSection;
