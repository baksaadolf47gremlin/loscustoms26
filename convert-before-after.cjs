const sharp = require('sharp');
const files = ['image-10.png', 'image-14-1.png', 'image-17.png', 'image-43-e1753564268674.png'];

Promise.all(files.map(file => 
  sharp(`public/images/work/${file}`)
    .webp({ quality: 75, effort: 6 })
    .toFile(`public/images/work/${file.replace('.png', '.webp')}`)
))
.then(() => console.log('Successfully converted BeforeAfter PNGs to webp'))
.catch(err => console.error('Error converting images:', err));
