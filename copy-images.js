// Run this script: node copy-images.js
const fs = require('fs');
const path = require('path');

const srcDir = path.join(
  process.env.USERPROFILE || process.env.HOME,
  '.gemini', 'antigravity', 'brain',
  'b70c1ad6-2425-4f61-a380-402146f96b4f'
);

const destDir = path.join(__dirname, 'public', 'images');

// Create destination directory
fs.mkdirSync(destDir, { recursive: true });

const files = [
  { src: 'portfolio_restaurant_1775488497067.png', dest: 'portfolio-restaurant.png' },
  { src: 'portfolio_gym_1775488517270.png', dest: 'portfolio-gym.png' },
  { src: 'portfolio_ecommerce_1775488539157.png', dest: 'portfolio-ecommerce.png' },
  { src: 'portfolio_corporate_1775488559871.png', dest: 'portfolio-corporate.png' },
];

files.forEach(({ src, dest }) => {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(destDir, dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${dest}`);
  } catch (e) {
    console.error(`✗ Failed to copy ${src}: ${e.message}`);
  }
});

console.log('\nDone! Images copied to public/images/');
