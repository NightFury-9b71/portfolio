// components/AboutSection.jsx
import React from 'react';
import { GraduationCap, Star, BookOpen } from 'lucide-react';
import { ABOUT_TEXT, ABOUT_STATS, EDUCATION_DATA } from '../data/personalData';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6 sm:mb-8">
              About <span className="font-bold text-emerald-600">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6 sm:mb-8"></div>
            
            <div className="space-y-4 sm:space-y-6 text-slate-600 leading-relaxed">
              {ABOUT_TEXT.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-base sm:text-lg" : "text-sm sm:text-base"}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1">{ABOUT_STATS.projectsCompleted}</div>
                <div className="text-xs sm:text-sm text-slate-600">Projects</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1">{ABOUT_STATS.competitions}</div>
                <div className="text-xs sm:text-sm text-slate-600">Competitions</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1">{ABOUT_STATS.cgpa}</div>
                <div className="text-xs sm:text-sm text-slate-600">CGPA</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6 flex items-center space-x-2">
                <GraduationCap className="text-emerald-600" size={24} />
                <span>Education</span>
              </h3>
              
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg hover:shadow-emerald-400/15 hover:ring-2 hover:ring-emerald-400/20 transition-all duration-300">
                <div className="mb-4">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{EDUCATION_DATA.degree}</h4>
                  <div className="text-emerald-600 font-semibold mb-1">{EDUCATION_DATA.university}</div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span>{EDUCATION_DATA.location}</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-mono">{EDUCATION_DATA.period}</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-semibold text-emerald-600">CGPA: {EDUCATION_DATA.cgpa}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-slate-700 mb-3 flex items-center space-x-2">
                    <BookOpen size={16} />
                    <span>Relevant Coursework</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION_DATA.relevantCourses.map((course) => (
                      <span 
                        key={course}
                        className="px-3 py-1 text-xs bg-white text-slate-700 rounded-full border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-slate-700 mb-3">Key Achievements</h5>
                  <div className="space-y-2">
                    {EDUCATION_DATA.achievements.map((achievement) => (
                      <div key={achievement} className="text-sm text-slate-600 flex items-start space-x-2">
                        <Star className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;