const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directories to scan
const SCAN_DIRS = ['public', 'src'];
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];

// Quality settings
const QUALITY_SETTINGS = {
  // For large background images - higher quality
  large: { quality: 82, effort: 6 },
  // For gallery/work images
  medium: { quality: 80, effort: 6 },
  // For small icons/logos - lossless for better clarity
  small: { quality: 90, effort: 6 },
};

// Files to SKIP (SVGs, already WebP, etc.)
const SKIP_FILES = [
  'middlefinger.png', // custom cursor, keep as PNG
];

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);
  
  if (!EXTENSIONS.includes(ext)) return null;
  if (SKIP_FILES.includes(fileName)) {
    console.log(`  ⏭️  Skipping: ${fileName}`);
    return null;
  }

  const outPath = filePath.replace(/\.(jpg|jpeg|png|gif|bmp)$/i, '.webp');
  
  // Skip if WebP already exists and is newer
  if (fs.existsSync(outPath)) {
    const srcStat = fs.statSync(filePath);
    const dstStat = fs.statSync(outPath);
    if (dstStat.mtime > srcStat.mtime) {
      console.log(`  ✅ Already converted: ${fileName}`);
      return null;
    }
  }

  const fileSizeKB = Math.round(fs.statSync(filePath).size / 1024);
  let settings;
  if (fileSizeKB > 500) {
    settings = QUALITY_SETTINGS.large;
  } else if (fileSizeKB > 100) {
    settings = QUALITY_SETTINGS.medium;
  } else {
    settings = QUALITY_SETTINGS.small;
  }

  try {
    await sharp(filePath)
      .webp({ quality: settings.quality, effort: settings.effort })
      .toFile(outPath);
    
    const newSizeKB = Math.round(fs.statSync(outPath).size / 1024);
    const savings = Math.round((1 - newSizeKB / fileSizeKB) * 100);
    console.log(`  ✅ ${fileName} → ${path.basename(outPath)} | ${fileSizeKB}KB → ${newSizeKB}KB (${savings > 0 ? '-' + savings + '%' : '+' + Math.abs(savings) + '%'})`);
    return { original: filePath, webp: outPath, originalKB: fileSizeKB, newKB: newSizeKB };
  } catch (err) {
    console.error(`  ❌ Failed: ${fileName} - ${err.message}`);
    return null;
  }
}

function getAllImages(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  
  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (EXTENSIONS.includes(ext)) {
          results.push(fullPath);
        }
      }
    }
  }
  
  walk(dir);
  return results;
}

async function main() {
  console.log('🖼️  WebP Image Converter - Los Customs');
  console.log('======================================\n');
  
  let allImages = [];
  for (const dir of SCAN_DIRS) {
    const dirPath = path.join(process.cwd(), dir);
    const images = getAllImages(dirPath);
    allImages = allImages.concat(images);
  }
  
  console.log(`Found ${allImages.length} non-WebP images to process\n`);
  
  let totalOriginalKB = 0;
  let totalNewKB = 0;
  let convertedCount = 0;
  
  for (const imgPath of allImages) {
    const result = await convertImage(imgPath);
    if (result) {
      totalOriginalKB += result.originalKB;
      totalNewKB += result.newKB;
      convertedCount++;
    }
  }
  
  console.log('\n======================================');
  console.log(`✅ Converted: ${convertedCount} images`);
  console.log(`📦 Total savings: ${totalOriginalKB}KB → ${totalNewKB}KB (saved ${totalOriginalKB - totalNewKB}KB = ${Math.round((1 - totalNewKB/totalOriginalKB)*100)}%)`);
  console.log('\n⚠️  Original files are KEPT - WebP versions created alongside them.');
  console.log('Next step: Update JSX/CSS references to use .webp files.\n');
}

main().catch(console.error);
