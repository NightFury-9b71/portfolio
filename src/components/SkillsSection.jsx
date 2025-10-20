// components/SkillsSection.jsx
import React from 'react';
import { Code, Database, Brain, Cpu, Monitor, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../data/skillsData';

const SkillsSection = () => {
  const getProficiencyWidth = (proficiency) => {
    switch (proficiency) {
      case 'Expert':
        return '95%';
      case 'Advanced':
        return '80%';
      case 'Intermediate':
        return '65%';
      default:
        return '50%';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Technical <span className="font-bold text-emerald-600">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6 sm:mb-8"></div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Specialized in modern web technologies with a focus on scalable, performance-optimized solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-slate-50 p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-emerald-400/20 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <div className="text-xs text-emerald-600 font-medium mb-1">
                    {skill.proficiency}
                  </div>
                  <div className="text-xs text-slate-400">
                    {skill.experience}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                {skill.technologies.slice(0, 3).map((tech) => (
                  <div key={tech} className="text-sm text-slate-600 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span>{tech}</span>
                  </div>
                ))}
                {skill.technologies.length > 3 && (
                  <div className="text-xs text-slate-400">
                    +{skill.technologies.length - 3} more
                  </div>
                )}
              </div>
              
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000"
                  style={{ 
                    width: getProficiencyWidth(skill.proficiency)
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;