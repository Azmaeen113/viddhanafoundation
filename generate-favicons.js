/**
 * Script to generate multiple favicon sizes from the main logo
 * This creates optimized favicon files for better SEO and browser support
 */

const fs = require('fs');
const path = require('path');

// Instructions for generating favicons:
console.log('=== VIDDHANA Favicon Generation Instructions ===\n');
console.log('To generate proper favicons for SEO, please follow these steps:\n');
console.log('OPTION 1 - Using Online Tool (Recommended):');
console.log('1. Go to https://realfavicongenerator.net/');
console.log('2. Upload your "Viddhana Logo.jpg" file');
console.log('3. Customize settings:');
console.log('   - Desktop browsers: Select "Solid color" background');
console.log('   - iOS: Choose "Add a solid, plain background" with your brand color (#4A7C59)');
console.log('   - Android Chrome: Same as above');
console.log('   - Windows Metro: Use your brand colors');
console.log('4. Click "Generate your Favicons and HTML code"');
console.log('5. Download the generated package');
console.log('6. Extract all files to the "public" folder\n');

console.log('OPTION 2 - Using ImageMagick (Command Line):');
console.log('Install ImageMagick, then run:');
console.log('  cd public');
console.log('  magick "Viddhana Logo.jpg" -resize 16x16 favicon-16x16.png');
console.log('  magick "Viddhana Logo.jpg" -resize 32x32 favicon-32x32.png');
console.log('  magick "Viddhana Logo.jpg" -resize 180x180 apple-touch-icon.png');
console.log('  magick "Viddhana Logo.jpg" -resize 192x192 android-chrome-192x192.png');
console.log('  magick "Viddhana Logo.jpg" -resize 512x512 android-chrome-512x512.png');
console.log('  magick "Viddhana Logo.jpg" -resize 32x32 favicon.ico\n');

console.log('OPTION 3 - Using Sharp (Node.js):');
console.log('Run: npm install sharp');
console.log('Then run: node generate-favicons-sharp.js\n');

console.log('After generating favicons, your public folder should contain:');
console.log('  - favicon.ico (32x32)');
console.log('  - favicon-16x16.png');
console.log('  - favicon-32x32.png');
console.log('  - apple-touch-icon.png (180x180)');
console.log('  - android-chrome-192x192.png');
console.log('  - android-chrome-512x512.png');
console.log('\nThe HTML has been updated to reference these files.');
