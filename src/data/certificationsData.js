import { getMomentImagesForEvent, hasMomentImages } from './imageHelpers';

// Certifications & Courses Data
// Each certification has one certificate PDF
// Certificate PDFs: /certificates/certification-name/certificate.pdf
export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'Machine Learning with Python',
    provider: 'Online Course',
    category: 'Course',
    year: '2024',
    description: 'Comprehensive course covering ML fundamentals, algorithms, and practical implementation using Python.',
    hasCertificate: true,
    certificatePdf: '/certificates/ml-python/certificate.pdf',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn'],
    momentFolder: 'ml-python',
    momentImages: getMomentImagesForEvent('ml-python'),
    hasMoments: hasMomentImages('ml-python')
  },
  {
    id: 2,
    title: 'Cubical 2.0 Organizer',
    provider: 'Robo Society Club - JUST',
    category: 'Event Organizing',
    year: '2024',
    description: 'Organized and managed Cubical 2.0, a technical event at JUST featuring robotics and programming competitions.',
    hasCertificate: true,
    certificatePdf: '/certificates/cubical-2/certificate.pdf',
    skills: ['Event Management', 'Leadership', 'Team Coordination'],
    momentFolder: 'cubical-2',
    momentImages: getMomentImagesForEvent('cubical-2'),
    hasMoments: hasMomentImages('cubical-2')
  },
  {
    id: 3,
    title: 'Cubical 1.0 Organizer',
    provider: 'Robo Society Club - JUST',
    category: 'Event Organizing',
    year: '2023',
    description: 'Helped organize the first edition of Cubical, introducing robotics and programming events to JUST students.',
    hasCertificate: false,
    certificatePdf: null,
    skills: ['Event Management', 'Planning', 'Coordination'],
    momentFolder: 'cubical-1',
    momentImages: getMomentImagesForEvent('cubical-1'),
    hasMoments: hasMomentImages('cubical-1')
  },
  {
    id: 4,
    title: 'National Events Volunteer',
    provider: 'Robo Society Club - JUST',
    category: 'Volunteer',
    year: '2024',
    description: 'Volunteered in organizing national-level events including LFR competitions, project showcases, competitive programming, chess tournaments, and quiz competitions.',
    hasCertificate: false,
    certificatePdf: null,
    skills: ['Volunteering', 'Event Support', 'Coordination'],
    momentFolder: 'national-events',
    momentImages: getMomentImagesForEvent('national-events'),
    hasMoments: hasMomentImages('national-events')
  }
];
