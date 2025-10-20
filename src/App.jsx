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

function App() {
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
}

export default App
