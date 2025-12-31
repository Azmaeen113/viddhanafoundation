/**
 * Generate favicons using Sharp (Node.js image processing library)
 * Run: npm install sharp --save-dev
 * Then: node generate-favicons-sharp.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputImage = path.join(__dirname, 'public', 'Viddhana Logo.jpg');
const outputDir = path.join(__dirname, 'public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  console.log('Generating favicons from Viddhana Logo.jpg...\n');

  for (const { name, size } of sizes) {
    const outputPath = path.join(outputDir, name);
    try {
      await sharp(inputImage)
        .resize(size, size, {
          fit: 'cover',
          position: 'center'
        })
        .png()
        .toFile(outputPath);
      console.log(`✓ Generated ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`✗ Failed to generate ${name}:`, error.message);
    }
  }

  // Generate favicon.ico from 32x32
  try {
    const icoPath = path.join(outputDir, 'favicon.ico');
    await sharp(inputImage)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(icoPath);
    
    console.log('✓ Generated favicon.ico (32x32)');
  } catch (error) {
    console.error('✗ Failed to generate favicon.ico:', error.message);
  }

  console.log('\n✓ All favicons generated successfully!');
  console.log('Files created in the public folder.');
}

if (!fs.existsSync(inputImage)) {
  console.error('Error: Viddhana Logo.jpg not found in public folder!');
  process.exit(1);
}

generateFavicons().catch(console.error);
