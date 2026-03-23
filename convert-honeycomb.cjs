const sharp = require('sharp');

Promise.all([
  sharp('public/images/honeycomb.png')
    .webp({ quality: 80, effort: 6 })
    .toFile('public/images/honeycomb.webp'),
  sharp('public/images/honeycomb-sm.png')
    .webp({ quality: 80, effort: 6 })
    .toFile('public/images/honeycomb-sm.webp')
])
.then(() => console.log('Successfully converted honeycomb images to webp'))
.catch(err => console.error('Error converting images:', err));
