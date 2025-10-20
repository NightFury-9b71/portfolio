# 🎓 Abdullah Al Noman - Portfolio Website

A modern, responsive portfolio website showcasing projects, achievements, certifications, and club activities. Built with React and designed following SOLID principles.

## 🌟 Features

### Core Sections
- **Hero** - Eye-catching introduction with profile photo and key information
- **About** - Education background from JUST, CGPA, and relevant coursework
- **Projects** - 8 full-featured projects with live demos and GitHub links
- **Skills** - 6 technical skill categories with proficiency levels
- **Achievements** - 5 competitive programming/hackathon achievements with rankings
- **Certifications** - Courses and event organizing certificates
- **Club Activities** - Robo Society Club leadership and contributions
- **Contact** - Easy ways to get in touch

### Interactive Features
- 📸 **Image Modal** - Full-screen certificate and screenshot viewer
- 🎨 **Project Filters** - Filter projects by type (Web, Desktop, IoT)
- 🏷️ **Smart Badges** - Visual indicators for role, teamwork, and status
- 📱 **Responsive Design** - Perfect on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Professional transitions and hover effects
- 🎯 **Smooth Scroll** - Navigate sections with ease

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Quick Setup

1. **Add Your Images** - Follow `IMAGE_SETUP_GUIDE.md`
2. **Update Data** - Edit `src/portfolioData.js` with your information
3. **Update Links** - Add your GitHub, LinkedIn, and project URLs
4. **Add Resume** - Place your PDF in `public/` folder
5. **Deploy** - Push to Netlify, Vercel, or GitHub Pages

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile/          # Your profile photo
│   ├── certificates/     # Achievement certificates
│   ├── moments/          # Event photos
│   └── screenshots/      # Project screenshots
├── src/
│   ├── components/       # React components (11 components)
│   ├── portfolioData.js  # All your data in one place ⭐
│   ├── Portfolio.jsx     # Main component
│   └── index.css         # Global styles
├── IMAGE_SETUP_GUIDE.md  # Image setup instructions
├── PORTFOLIO_UPDATE_SUMMARY.md  # Detailed update summary
└── README.md
```

## 🎨 Customization

### Update Your Information

All content is in **`src/portfolioData.js`**:

```javascript
// Personal Info
export const PERSONAL_INFO = { ... }

// Projects (8 projects)
export const PROJECTS_DATA = [ ... ]

// Achievements (5 competitions)
export const ACHIEVEMENTS_DATA = [ ... ]

// Certifications (4 items)
export const CERTIFICATIONS_DATA = [ ... ]

// Club Activities
export const CLUB_ACTIVITIES_DATA = { ... }

// Skills, Education, Social Links, etc.
```

### Change Colors

Replace `emerald` with your preferred Tailwind color:
- Search for: `emerald-400`, `emerald-600`, etc.
- Replace with: `blue-400`, `purple-600`, etc.

## 📸 Image Requirements

### Must-Have Images
- **1 Profile Photo**: `public/profile/cover_1.png`
- **5 Certificates**: Place in `public/certificates/`
- **1 Moment Image**: Place in `public/moments/`
- **30 Screenshots**: Place in `public/screenshots/`

**See `IMAGE_SETUP_GUIDE.md` for complete details!**

## 🎯 Key Components

| Component | Purpose |
|-----------|---------|
| **ImageModal** | Full-screen image viewer with navigation |
| **AchievementsSection** | Competition rankings and certificates |
| **CertificationsSection** | Courses and training with filters |
| **ClubActivitiesSection** | Leadership roles and events |
| **WorkSection** | Project showcase with filters |
| **AboutSection** | Education and background |

All components follow **SOLID principles** for clean, maintainable code! ✨

## 🚀 Deployment

### Netlify (Recommended)
1. Connect GitHub repository
2. Build: `npm run build`
3. Publish directory: `dist`
4. Deploy! 🎉

### Vercel
1. Import repository
2. Framework: Vite
3. Deploy! 🚀

### GitHub Pages
```bash
npm run build
# Upload dist/ to gh-pages branch
```

## 📝 Adding Content

### Add a Project
```javascript
// In portfolioData.js -> PROJECTS_DATA
{
  id: 9,
  title: 'New Project',
  category: 'Web Development',
  type: 'web',
  description: 'Project description...',
  tech: ['React', 'Node.js'],
  year: '2024',
  role: 'Full-Stack Developer',
  teamwork: true,
  github: 'https://github.com/...',
  live: 'https://...',
  images: ['/screenshots/new-1.jpg']
}
```

### Add an Achievement
```javascript
// In portfolioData.js -> ACHIEVEMENTS_DATA
{
  id: 6,
  title: 'Competition Name',
  type: 'hackathon',
  rank: '1st',
  totalParticipants: '100',
  hasCertificate: true,
  certificateImage: '/certificates/name.jpg'
}
```

## 🔧 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Design**: SOLID Principles

## 🆘 Troubleshooting

### Images Not Loading?
- ✅ Check files are in `public/` folder
- ✅ Verify paths match exactly (case-sensitive)
- ✅ Clear browser cache (Ctrl+Shift+R)
- ✅ Check console for 404 errors

### Build Errors?
- ✅ Run `npm install` again
- ✅ Delete `node_modules/` and reinstall
- ✅ Check for syntax errors


## 📧 Contact

**Abdullah Al Noman**
- 📧 Email: nomanstine@gmail.com
- 💼 GitHub: [@nomanstine](https://github.com/nomanstine)
- 🔗 LinkedIn: [Abdullah Al Noman](https://linkedin.com/in/abdullah-al-noman)

---

**Built with ❤️ using React + Vite + Tailwind CSS**

*Clean code, SOLID principles, modern design* 🚀
