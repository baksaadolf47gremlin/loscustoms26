const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const FFMPEG = ffmpegInstaller.path;
const VIDEOS_DIR = path.join(process.cwd(), 'public', 'videos');
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

const POSTERS = [
  { video: 'hero.mp4', poster: 'hero-poster.webp', time: '00:00:01' },
  { video: 'hellyeah.mp4', poster: 'hellyeah-poster.webp', time: '00:00:01' }
];

async function generatePoster(item) {
  return new Promise((resolve, reject) => {
    const inputPath = path.join(VIDEOS_DIR, item.video);
    const outputPath = path.join(IMAGES_DIR, item.poster);
    
    console.log(`🖼️ Generating poster for ${item.video} at ${item.time}`);
    
    const args = [
      '-ss', item.time,
      '-i', inputPath,
      '-frames:v', '1',
      '-q:v', '10',
      '-y',
      outputPath
    ];

    const proc = spawn(FFMPEG, args);
    proc.on('close', (code) => {
      if (code === 0) {
        console.log(`  ✅ Done: ${item.poster}`);
        resolve();
      } else {
        reject(new Error(`Failed to generate poster for ${item.video}`));
      }
    });
  });
}

async function main() {
  for (const item of POSTERS) {
    await generatePoster(item);
  }
}

main().catch(console.error);
