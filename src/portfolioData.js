// Vite's import.meta.glob to load all screenshots dynamically
// This will automatically include any images you add to the screenshot folders
const allScreenshots = import.meta.glob('/public/screenshots/**/*.{jpg,jpeg,png,gif,webp,svg,JPG,JPEG,PNG,GIF,WEBP,SVG}', {
  eager: true,
  query: '?url',
  import: 'default'
});

// Load all moment images dynamically
const allMoments = import.meta.glob('/public/moments/**/*.{jpg,jpeg,png,gif,webp,svg,JPG,JPEG,PNG,GIF,WEBP,SVG}', {
  eager: true,
  query: '?url',
  import: 'default'
});

// Helper function to get screenshots for a specific project
const getProjectScreenshots = (projectFolder) => {
  const folderPath = `/public/screenshots/${projectFolder}/`;
  
  // Filter and map to get images for this specific project
  const images = Object.entries(allScreenshots)
    .filter(([path]) => path.startsWith(folderPath))
    .map(([path, url]) => {
      // Convert from /public/screenshots/... to /screenshots/...
      return path.replace('/public', '');
    })
    .sort();
  
  // Debug log
  console.log(`📸 ${projectFolder}:`, images.length, 'images');
  
  return images;
};

// Helper function to get moment images for a specific event
const getMomentImagesForEvent = (eventFolder) => {
  const folderPath = `/public/moments/${eventFolder}/`;
  
  // Filter and map to get images for this specific event
  const images = Object.entries(allMoments)
    .filter(([path]) => path.startsWith(folderPath))
    .map(([path, url]) => {
      // Convert from /public/moments/... to /moments/...
      return path.replace('/public', '');
    })
    .sort();
  
  console.log(`🎉 ${eventFolder}:`, images.length, 'moment images');
  
  return images;
};

// Helper function to check if moment images exist for an event
const hasMomentImages = (eventFolder) => {
  const folderPath = `/public/moments/${eventFolder}/`;
  return Object.keys(allMoments).some(path => path.startsWith(folderPath));
};



// Helper function for multiple moment images
const getMomentImages = (folderPath) => {
  const maxImages = 10;
  return Array.from({ length: maxImages }, (_, i) => 
    `${folderPath}/${i + 1}.jpg`
  );
};


// Personal Information
export const PERSONAL_INFO = {
  name: 'Abdullah Al Noman',
  title: 'Computer Science Student & Full-Stack Developer',
  description: 'CSE student at Jashore University of Science and Technology, passionate about AI, web development, and competitive programming. Building innovative solutions and actively participating in hackathons and tech competitions.',
  email: 'nomanstine@gmail.com',
  phone: '+880 18389 743638',
  phoneDisplay: '+880 18389 743638',
  location: 'Jashore, Khulna',
  university: 'Jashore University of Science and Technology',
  department: 'Computer Science & Engineering',
  cgpa: '2.80',
  experience: 'Student Developer',
  availability: 'Open to Opportunities',
  profileImage: 'profile/cover_2.png',
  resumeFile: '/resume-abdullah-noman.pdf',
  resumeFilename: 'Abdullah-Al-Noman-Resume.pdf'
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/nomanstine',
  linkedin: 'https://linkedin.com/in/nomanstine',
  email: 'nomanstine@gmail.com'
};

// About Me Stats
export const ABOUT_STATS = {
  projectsCompleted: '8+',
  competitions: '6+',
  cgpa: '2.80'
};

// About Me Text
export const ABOUT_TEXT = [
  "I'm a Computer Science & Engineering student at Jashore University of Science and Technology with a passion for building innovative software solutions. My journey includes participating in multiple CTFs, datathons, and hackathons across Bangladesh.",
  "As an active member and Assistant Treasurer of the Robo Society Club at JUST, I've organized national-level events including competitive programming competitions, robotics challenges, and tech workshops. I believe in learning by building and sharing knowledge with the community.",
  "My technical expertise spans full-stack web development, machine learning, desktop applications, and IoT. I've worked on diverse projects from AI-powered news detection systems to coaching management platforms, always focusing on creating practical solutions to real-world problems."
];

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

// Skills Data
export const SKILLS_DATA = [
  { 
    name: 'Frontend Development', 
    experience: '2+ years', 
    proficiency: 'Advanced', 
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'] 
  },
  { 
    name: 'Backend Development', 
    experience: '2+ years', 
    proficiency: 'Advanced', 
    technologies: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'] 
  },
  { 
    name: 'Database Management', 
    experience: '2+ years', 
    proficiency: 'Intermediate', 
    technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'] 
  },
  { 
    name: 'Machine Learning & AI', 
    experience: '1+ years', 
    proficiency: 'Intermediate', 
    technologies: ['Python', 'BERT', 'Scikit-learn', 'TensorFlow', 'Web Scraping'] 
  },
  { 
    name: 'Desktop Development', 
    experience: '1+ years', 
    proficiency: 'Intermediate', 
    technologies: ['PyQt', 'Python', 'GUI Design', 'Socket Programming'] 
  },
  { 
    name: 'IoT & Robotics', 
    experience: '1+ years', 
    proficiency: 'Beginner', 
    technologies: ['Arduino', 'Raspberry Pi', 'Servo Motors', 'Hardware Integration'] 
  }
];

// Projects Data
export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Boi Adda',
    category: 'Social Platform',
    type: 'web',
    description: 'A full-stack book sharing platform where users can share, exchange, and discover books. Features user authentication, book listings, search functionality, and community interactions.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    year: '2024',
    status: 'Live',
    role: 'Full-Stack Developer',
    teamwork: false,
    github: 'https://github.com/nomanstine/boi-adda',
    live: 'https://boi-adda.onrender.com',
    hasScreenshots: true,
    images: getProjectScreenshots('boi-adda')
  },
  {
    id: 2,
    title: 'Science Point',
    category: 'Education Management',
    type: 'web',
    description: 'Comprehensive coaching management system for educational institutions. Includes student enrollment, attendance tracking, course management, payment processing, and performance analytics.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Material-UI'],
    year: '2024',
    status: 'Live',
    role: 'Full-Stack Developer',
    teamwork: false,
    github: 'https://github.com/nomanstine/science-point',
    live: 'https://science-point.onrender.com',
    hasScreenshots: true,
    images: getProjectScreenshots('science-point')
  },
  {
    id: 3,
    title: 'FakeNewsDetection',
    category: 'AI & Machine Learning',
    type: 'web',
    description: 'Intelligent fake news detection system using BERT model and web scraping. Analyzes news articles, extracts features, and classifies content authenticity with high accuracy.',
    tech: ['Python', 'BERT', 'Flask', 'Beautiful Soup', 'TensorFlow', 'React', 'NLP'],
    year: '2024',
    status: 'Complete',
    role: 'Full-Stack Developer',
    teamwork: true,
    github: 'https://github.com/nomanstine/fake-news-detection',
    live: null,
    hasScreenshots: true,
    images: getProjectScreenshots('fake-news-detection')
  },
  {
    id: 4,
    title: 'AutoDocs',
    category: 'Automation Tool',
    type: 'web',
    description: 'Automated certificate generation website that streamlines the process of creating and distributing certificates for events, competitions, and courses. Supports bulk generation and customization.',
    tech: ['React', 'Node.js', 'Canvas API', 'PDF Generation', 'Express'],
    year: '2024',
    status: 'Live',
    role: 'Frontend Developer',
    teamwork: true,
    github: 'https://github.com/nomanstine/autodocs',
    live: 'https://autodocs.netlify.app',
    hasScreenshots: true,
    images: getProjectScreenshots('autodocs')
  },
  {
    id: 5,
    title: 'NewsPlus BD',
    category: 'News & Media',
    type: 'web',
    description: 'AI-powered news summarizer that aggregates news from multiple Bangladeshi sources and provides concise summaries. Features categorization, trending topics, and personalized feeds.',
    tech: ['Python', 'Flask', 'NLP', 'Web Scraping', 'Beautiful Soup', 'MongoDB'],
    year: '2023',
    status: 'Complete',
    role: 'Backend Developer',
    teamwork: true,
    github: 'https://github.com/nomanstine/newsplus-bd',
    live: null,
    hasScreenshots: true,
    images: getProjectScreenshots('newsplus-bd')
  },
  {
    id: 6,
    title: 'JUSTcseClub',
    category: 'Club Management',
    type: 'web',
    description: 'Website for managing activities, events, and member information of the CSE club at JUST. Features event calendars, member profiles, announcements, and gallery.',
    tech: ['React', 'JavaScript', 'Bootstrap', 'Firebase'],
    year: '2023',
    status: 'Complete',
    role: 'Frontend Developer',
    teamwork: true,
    github: 'https://github.com/nomanstine/just-cse-club',
    live: null,
    hasScreenshots: true,
    images: getProjectScreenshots('just-cse-club')
  },
  {
    id: 7,
    title: 'Bit-Talker',
    category: 'Communication App',
    type: 'desktop',
    description: 'Desktop messaging application built with PyQt featuring real-time chat, file sharing, group conversations, and end-to-end encryption. Cross-platform support for Windows, Linux, and macOS.',
    tech: ['Python', 'PyQt5', 'Socket.io', 'SQLite', 'Threading'],
    year: '2023',
    status: 'Complete',
    role: 'Full-Stack Developer',
    teamwork: true,
    github: 'https://github.com/nomanstine/bit-talker',
    live: null,
    hasScreenshots: true,
    images: getProjectScreenshots('bit-talker')
  },
  {
    id: 8,
    title: 'Chess Playing Robotic Arm',
    category: 'IoT & Robotics',
    type: 'iot',
    description: 'IoT project featuring a robotic arm designed to play chess. Includes computer vision for piece detection, path planning algorithms, and servo motor control. A learning experience in hardware-software integration.',
    tech: ['Arduino', 'Python', 'OpenCV', 'Servo Motors', 'Computer Vision'],
    year: '2023',
    status: 'Experimental',
    role: 'Hardware & Software Developer',
    teamwork: true,
    github: 'https://github.com/nomanstine/chess-robot',
    live: null,
    hasScreenshots: true,
    images: getProjectScreenshots('chess-robot')
  }
];

// Education Data
export const EDUCATION_DATA = {
  degree: 'Bachelor of Science in Computer Science & Engineering',
  university: 'Jashore University of Science and Technology (JUST)',
  location: 'Jashore, Bangladesh',
  period: '2020 - Present',
  cgpa: '2.80',
  relevantCourses: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Machine Learning',
    'Web Technologies',
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
    'Artificial Intelligence'
  ],
  achievements: [
    'Active member of Robo Society Club',
    'Assistant Treasurer of Robo Society Club',
    'Participated in 6+ competitive events',
    'Organized 2 major technical events (Cubical 1.0 & 2.0)'
  ]
};

// Contact Messages
export const CONTACT_MESSAGES = {
  heading: "Let's Connect",
  subheading: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's create something amazing together.",
  description: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's create something amazing together.",
  getInTouch: "Get In Touch",
  quickMessage: "Send a Quick Message"
};

// Footer Information
export const FOOTER_INFO = {
  copyright: '© 2024 Abdullah Al Noman. Crafted with precision and care.',
  techStack: 'Made with React & Tailwind CSS',
  tech: 'Made with React & Tailwind CSS',
  deployment: 'Deployed on Vercel',
  hosting: 'Deployed on Vercel'
};