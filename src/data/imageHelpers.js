// Vite's import.meta.glob to load all screenshots dynamically
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
export const getProjectScreenshots = (projectFolder) => {
  const folderPath = `/public/screenshots/${projectFolder}/`;
  
  // Filter and map to get images for this specific project
  const images = Object.entries(allScreenshots)
    .filter(([path]) => path.startsWith(folderPath))
    .map(([path, url]) => {
      // Return the URL directly from Vite
      return url;
    })
    .sort();
  
  // Debug log
  console.log(`📸 ${projectFolder}:`, images.length, 'images');
  
  return images;
};

// Helper function to get moment images for a specific event
export const getMomentImagesForEvent = (eventFolder) => {
  const folderPath = `/public/moments/${eventFolder}/`;
  
  // Filter and map to get images for this specific event
  const images = Object.entries(allMoments)
    .filter(([path]) => path.startsWith(folderPath))
    .map(([path, url]) => {
      // Return the URL directly from Vite
      return url;
    })
    .sort();
  
  console.log(`🎉 ${eventFolder}:`, images.length, 'moment images');
  
  return images;
};

// Helper function to check if moment images exist for an event
export const hasMomentImages = (eventFolder) => {
  const folderPath = `/public/moments/${eventFolder}/`;
  return Object.keys(allMoments).some(path => path.startsWith(folderPath));
};
