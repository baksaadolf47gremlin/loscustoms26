const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const inputPath = path.join(__dirname, 'public', 'videos', 'hero.mp4');
const outputWebM = path.join(__dirname, 'public', 'videos', 'hero.webm');

console.log('🎬 Optimizing Video System is starting...');
console.log('ffmpeg path:', ffmpegInstaller.path);

if (!fs.existsSync(inputPath)) {
  console.error('❌ Original hero.mp4 not found at', inputPath);
  process.exit(1);
}

// Ensure the process is simple and fast to avoid burning CPU for hours
console.log('1. Starting VP9 WebM generation...');
const startTime = Date.now();

ffmpeg(inputPath)
  .outputOptions([
    '-c:v libvpx-vp9', // VP9 Codec 
    '-crf 32',         // Constant Rate Factor (30-34 recommended for web streaming background loops)
    '-b:v 0',          // Requires for VP9 CRF
    '-deadline realtime', // Fast encoding speed suitable for quick agent usage
    '-cpu-used 4',     // Balancing speed with compression
    '-row-mt 1',       // Multi-threading
    '-pix_fmt yuv420p',// Universal pixel format
    '-an'              // Remove audio completely (saves background bandwidth)
  ])
  .on('progress', (progress) => {
    process.stdout.write(`\r⏳ Processing: ${Math.round(progress.percent || 0)}% done`);
  })
  .on('end', () => {
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    console.log(`\n✅ WebM Generation Complete in ${elapsed}s! Video is now optimized for the web.`);
    process.exit(0);
  })
  .on('error', (err) => {
    console.error('\n❌ WebM Conversion Error: ', err.message);
    process.exit(1);
  })
  .save(outputWebM);
