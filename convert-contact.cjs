const sharp = require('sharp');
sharp('public/images/contact-bg.jpg.jpg')
  .webp({ quality: 80, effort: 6 })
  .toFile('public/images/contact-bg.webp')
  .then(() => console.log('Successfully converted contact-bg to webp'))
  .catch(err => console.error('Error:', err));
