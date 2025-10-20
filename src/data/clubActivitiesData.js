// Helper function for multiple moment images
const getMomentImages = (folderPath) => {
  const maxImages = 10;
  return Array.from({ length: maxImages }, (_, i) => 
    `${folderPath}/${i + 1}.jpg`
  );
};

// Club Activities Data
export const CLUB_ACTIVITIES_DATA = {
  clubName: 'Robo Society Club',
  university: 'Jashore University of Science and Technology',
  position: 'Assistant Treasurer & Member',
  duration: '2022 - Present',
  description: 'Active member of the Robo Society Club, contributing to technical events, workshops, and community building at JUST.',
  responsibilities: [
    'Managing club finances and budget allocation as Assistant Treasurer',
    'Organizing and coordinating technical events and competitions',
    'Conducting workshops on robotics and programming',
    'Mentoring junior members in technical skills'
  ],
  eventsOrganized: [
    {
      name: 'Cubical 1.0',
      year: '2023',
      role: 'Program Organizer',
      description: 'Technical competition featuring robotics challenges',
      hasCertificate: false,
      certificatePdf: null,
      momentImages: getMomentImages('/moments/cubical-1')
    },
    {
      name: 'Cubical 2.0',
      year: '2024',
      role: 'Program Organizer',
      description: 'Second edition with expanded categories and participants',
      hasCertificate: true,
      certificatePdf: '/certificates/cubical-2/certificate.pdf',
      momentImages: getMomentImages('/moments/cubical-2')
    },
    {
      name: 'National LFR & Project Showcase',
      year: '2024',
      role: 'Volunteer',
      description: 'National-level Line Following Robot competition and project exhibition',
      hasCertificate: false,
      certificatePdf: null,
      momentImages: getMomentImages('/moments/national-lfr')
    },
    {
      name: 'Competitive Programming Contest',
      year: '2024',
      role: 'Volunteer',
      description: 'Organized programming competition for students',
      hasCertificate: false,
      certificatePdf: null,
      momentImages: getMomentImages('/moments/programming-contest')
    },
    {
      name: 'Chess & Quiz Tournaments',
      year: '2024',
      role: 'Volunteer',
      description: 'Coordinated chess and quiz competitions',
      hasCertificate: false,
      certificatePdf: null,
      momentImages: getMomentImages('/moments/chess-quiz')
    }
  ],
  achievements: [
    'Successfully organized 2 major technical events (Cubical 1.0 & 2.0)',
    'Volunteered in 5+ national-level competitions',
    'Managed club finances ensuring transparent budget allocation',
    'Contributed to growing club membership by 40%'
  ]
};
