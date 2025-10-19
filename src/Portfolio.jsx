import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import ClubActivitiesSection from './components/ClubActivitiesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

/**
 * Portfolio Component
 * 
 * Main portfolio page structure following best practices:
 * 1. Hero - First impression with key info
 * 2. About - Personal story and education
 * 3. Projects - Showcase of work
 * 4. Skills - Technical capabilities
 * 5. Achievements - Competitions and recognition
 * 6. Certifications - Courses and training
 * 7. Club Activities - Leadership and community
 * 8. Contact - Get in touch
 * 
 * SOLID Principles:
 * - Single Responsibility: Orchestrates section display
 * - Open/Closed: New sections can be added easily
 * - Dependency Inversion: Depends on section components, not implementations
 */
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navigation />
      <Hero />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <AchievementsSection />
      <CertificationsSection />
      <ClubActivitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;