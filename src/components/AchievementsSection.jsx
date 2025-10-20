// components/AchievementsSection.jsx
import React, { useState } from 'react';
import { Trophy, Medal, Award, Users, Image as ImageIcon } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/achievementsData';
import ImageModal from './ImageModal';

/**
 * AchievementsSection Component
 * 
 * Displays competitive achievements including CTFs, datathons, and hackathons.
 * 
 * SOLID Principles:
 * - Single Responsibility: Handles display of achievements only
 * - Open/Closed: Can add new achievement types without modifying existing code
 * - Dependency Inversion: Depends on imported data, not hardcoded values
 */
const AchievementsSection = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleViewImage = (achievement) => {
    // Combine certificates and moment images, filter out invalid paths
    const allImages = [
      ...(achievement.hasCertificate && achievement.certificatePdf ? [achievement.certificatePdf] : []),
      ...(achievement.momentImages || [])
    ].filter(img => img && img.trim() !== '');
    
    if (allImages.length > 0) {
      setSelectedAchievement({ ...achievement, images: allImages });
      setCurrentImageIndex(0);
      setModalOpen(true);
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'datathon':
        return <Trophy className="text-emerald-500" size={24} />;
      case 'hackathon':
        return <Award className="text-blue-500" size={24} />;
      case 'ctf':
        return <Medal className="text-purple-500" size={24} />;
      default:
        return <Trophy className="text-emerald-500" size={24} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'datathon':
        return 'from-emerald-400 to-emerald-600';
      case 'hackathon':
        return 'from-blue-400 to-blue-600';
      case 'ctf':
        return 'from-purple-400 to-purple-600';
      default:
        return 'from-emerald-400 to-emerald-600';
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Competitive <span className="font-bold text-emerald-600">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Participated in various national-level competitions, earning recognition in CTFs, datathons, and hackathons across Bangladesh
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <div
              key={achievement.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-400/20 transition-all duration-500 transform hover:scale-[1.02] hover:ring-2 hover:ring-emerald-400/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${getTypeColor(achievement.type)}`}></div>
              
              <div className="p-6 sm:p-8">
                {/* Icon, Type and View Button */}
                <div className="flex items-center justify-between mb-4 gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {getTypeIcon(achievement.type)}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {achievement.category}
                      </span>
                      <div className="flex items-center space-x-2 mt-1 flex-wrap">
                        <span className="text-sm text-slate-400">
                          {achievement.year}
                        </span>
                        {achievement.teamwork && (
                          <span className="flex items-center space-x-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                            <Users size={12} />
                            <span>Team</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* View Image Button */}
                  {(achievement.hasCertificate || achievement.hasMoments) && (
                    <button
                      onClick={() => handleViewImage(achievement)}
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
                  {achievement.title}
                </h3>

                {/* Organizer */}
                <p className="text-sm text-slate-500 mb-3">
                  Organized by <span className="font-semibold text-slate-700">{achievement.organizer}</span>
                </p>

                {/* Rank Badge */}
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className={`px-4 py-2 bg-gradient-to-r ${getTypeColor(achievement.type)} text-white rounded-full font-bold text-lg shadow-lg`}>
                    Rank {achievement.rank}
                  </div>
                  <div className="text-sm text-slate-500">
                    out of <span className="font-semibold text-slate-700">{achievement.totalParticipants}</span> participants
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                  {achievement.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {achievement.hasCertificate && (
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                      📜 Certificate
                    </span>
                  )}
                  {achievement.hasMoments && (
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      📸 Moments
                    </span>
                  )}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-400/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className={`absolute bottom-0 left-0 text-8xl font-bold opacity-5 -mb-4 -ml-4 group-hover:opacity-10 transition-opacity duration-500`}>
                {achievement.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">
              {ACHIEVEMENTS_DATA.length}
            </div>
            <div className="text-sm text-slate-600">Total Competitions</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
              {ACHIEVEMENTS_DATA.filter(a => a.type === 'hackathon').length}
            </div>
            <div className="text-sm text-slate-600">Hackathons</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">
              {ACHIEVEMENTS_DATA.filter(a => a.type === 'datathon').length}
            </div>
            <div className="text-sm text-slate-600">Datathons</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
              {ACHIEVEMENTS_DATA.filter(a => a.type === 'ctf').length}
            </div>
            <div className="text-sm text-slate-600">CTF Events</div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedAchievement && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          images={selectedAchievement.images}
          currentIndex={currentImageIndex}
          onNavigate={setCurrentImageIndex}
          title={selectedAchievement.title}
          enableDownload={true}
        />
      )}
    </section>
  );
};

export default AchievementsSection;
