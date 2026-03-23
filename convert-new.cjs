const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'images', 'gallery');

const files = fs.readdirSync(galleryDir).filter(f => f.endsWith('.jpg'));

(async () => {
  for (const file of files) {
    const filePath = path.join(galleryDir, file);
    const parsed = path.parse(file);
    const outPath = path.join(galleryDir, parsed.name + '.webp');
    
    console.log(`Converting ${file} to webp...`);
    
    await sharp(filePath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outPath);
      
    console.log(`Finished ${file}, generating webp. Deleting original...`);
    fs.unlinkSync(filePath);
  }
  console.log("All done!");
})();
