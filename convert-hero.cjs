const sharp = require('sharp');
sharp('public/images/work/hero-bg.png')
  .webp({ quality: 75, effort: 6 })
  .toFile('public/images/work/hero-bg.webp')
  .then(() => console.log('Successfully converted hero-bg PNG to webp'))
  .catch(err => console.error('Error converting image:', err));
