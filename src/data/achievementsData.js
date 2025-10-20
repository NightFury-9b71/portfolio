import { getMomentImagesForEvent, hasMomentImages } from './imageHelpers';

// Achievements Data
// Each achievement can have one certificate PDF and multiple moment images
// Certificate PDFs: /certificates/achievement-name/certificate.pdf
// Moment images: /moments/achievement-name/
export const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: 'Datathon - Khulna University',
    category: 'Competition',
    type: 'datathon',
    rank: '6th',
    totalParticipants: '120',
    year: '2024',
    organizer: 'Khulna University',
    teamwork: true,
    hasCertificate: true,
    description: 'Competed in a data science competition focusing on real-world problem solving with data analysis and machine learning techniques.',
    icon: '🏆',
    certificatePdf: '/certificates/datathon-ku/certificate.pdf',
    momentFolder: 'datathon-ku',
    momentImages: getMomentImagesForEvent('datathon-ku'),
    hasMoments: hasMomentImages('datathon-ku')
  },
  {
    id: 2,
    title: 'Hackathon - Green University',
    category: 'Competition',
    type: 'hackathon',
    rank: '41st',
    totalParticipants: '247',
    year: '2024',
    organizer: 'Green University',
    teamwork: true,
    hasCertificate: false,
    description: 'Participated in a 24-hour hackathon building innovative solutions with a team of developers.',
    icon: '💻',
    certificatePdf: null,
    momentFolder: 'hackathon-green',
    momentImages: getMomentImagesForEvent('hackathon-green'),
    hasMoments: hasMomentImages('hackathon-green')
  },
  {
    id: 3,
    title: 'CTF Competition - BUET',
    category: 'Competition',
    type: 'ctf',
    rank: '52nd',
    totalParticipants: '70',
    year: '2024',
    organizer: 'Bangladesh University of Engineering and Technology',
    teamwork: false,
    hasCertificate: false,
    description: 'Capture The Flag cybersecurity competition organized by BUET, solving challenges in cryptography, web security, and reverse engineering.',
    icon: '🔒',
    certificatePdf: null,
    momentFolder: 'ctf-buet',
    momentImages: getMomentImagesForEvent('ctf-buet'),
    hasMoments: hasMomentImages('ctf-buet')
  },
  {
    id: 4,
    title: 'Datathon - KUET',
    category: 'Competition',
    type: 'datathon',
    rank: '56th',
    totalParticipants: '200',
    year: '2024',
    organizer: 'Khulna University of Engineering and Technology',
    teamwork: true,
    hasCertificate: true,
    description: 'Team-based data analysis competition focusing on extracting insights from large datasets.',
    icon: '📊',
    certificatePdf: '/certificates/datathon-kuet/certificate.pdf',
    momentFolder: 'datathon-kuet',
    momentImages: getMomentImagesForEvent('datathon-kuet'),
    hasMoments: hasMomentImages('datathon-kuet')
  },
  {
    id: 5,
    title: 'Hackathon - BUP',
    category: 'Competition',
    type: 'hackathon',
    rank: 'Participant',
    totalParticipants: '100+',
    year: '2024',
    organizer: 'Bangladesh University of Professionals',
    teamwork: true,
    hasCertificate: true,
    description: 'Collaborative hackathon focusing on building solutions for social impact.',
    icon: '🚀',
    certificatePdf: '/certificates/hackathon-bup/certificate.pdf',
    momentFolder: 'hackathon-bup',
    momentImages: getMomentImagesForEvent('hackathon-bup'),
    hasMoments: hasMomentImages('hackathon-bup')
  }
];
