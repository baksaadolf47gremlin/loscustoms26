const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const FFMPEG = ffmpegInstaller.path;
const VIDEOS_DIR = path.join(process.cwd(), 'public', 'videos');

// Videos to compress
const VIDEOS = [
  {
    input: 'hero.mp4',
    outputs: [
      { file: 'hero.mp4', codec: 'libx264', crf: 28, preset: 'slow' },
      { file: 'hero.webm', codec: 'libvpx-vp9', crf: 35, bitrate: '1000k' }
    ],
    scaleWidth: 1280
  },
  {
    input: 'hellyeah.mp4',
    outputs: [
      { file: 'hellyeah.mp4', codec: 'libx264', crf: 28, preset: 'slow' },
      { file: 'hellyeah.webm', codec: 'libvpx-vp9', crf: 35, bitrate: '1000k' }
    ],
    scaleWidth: 1280
  }
];

function getFileSizeMB(filePath) {
  if (!fs.existsSync(filePath)) return 0;
  return (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
}

async function compressVideo(video) {
  let inputPath = path.join(VIDEOS_DIR, video.input);
  const backupInput = inputPath.replace(/\.(mp4|webm)$/, '_original.$1');
  
  if (fs.existsSync(backupInput)) {
    inputPath = backupInput;
    console.log(`  🔍 Using original backup as source: ${path.basename(backupInput)}`);
  } else if (!fs.existsSync(inputPath)) {
    console.log(`  ⏭️  Skipping: ${video.input} (not found)`);
    return;
  }

  const originalSizeMB = getFileSizeMB(inputPath);
  
  for (const out of video.outputs) {
    await new Promise((resolve, reject) => {
      const outputPath = path.join(VIDEOS_DIR, out.file);
      const tempOutput = path.join(VIDEOS_DIR, out.file.replace(/\.(mp4|webm)$/, '_temp.$1'));
      
      console.log(`\n🎬 Processing: ${out.file}`);
      
      const args = [
        '-i', inputPath,
        '-c:v', out.codec,
      ];

      if (out.codec === 'libx264') {
        args.push('-crf', String(out.crf), '-preset', out.preset, '-movflags', '+faststart');
      } else if (out.codec === 'libvpx-vp9') {
        args.push('-crf', String(out.crf), '-b:v', out.bitrate, '-deadline', 'good', '-cpu-used', '2');
      }

      args.push('-vf', `scale='min(${video.scaleWidth},iw)':-2`, '-an', '-y', tempOutput);

      const proc = spawn(FFMPEG, args);
      proc.on('close', (code) => {
        if (code === 0) {
          if (fs.existsSync(outputPath) && !outputPath.includes('_original')) {
             const backup = outputPath.replace(/\.(mp4|webm)$/, '_original.$1');
             if (!fs.existsSync(backup)) fs.renameSync(outputPath, backup);
          }
          fs.renameSync(tempOutput, outputPath);
          console.log(`  ✅ Done: ${out.file} (${getFileSizeMB(outputPath)} MB)`);
          resolve();
        } else {
          reject(new Error(`ffmpeg failed for ${out.file}`));
        }
      });
    });
  }
}

async function main() {
  console.log('🎬 Los Customs – Video Compressor');
  console.log('===================================');
  console.log(`ffmpeg: ${FFMPEG}\n`);

  let totalOriginal = 0;
  let totalNew = 0;

  for (const video of VIDEOS) {
    try {
      const result = await compressVideo(video);
      if (result) {
        totalOriginal += parseFloat(result.original);
        totalNew += parseFloat(result.compressed);
      }
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  }

  console.log('\n===================================');
  console.log(`📦 Total: ${totalOriginal.toFixed(2)}MB → ${totalNew.toFixed(2)}MB`);
  console.log(`✅ Saved: ${(totalOriginal - totalNew).toFixed(2)}MB (${Math.round((1 - totalNew/totalOriginal)*100)}%)`);
  console.log('\n⚠️  Originals backed up as *_original.mp4');
  console.log('Run "git push" to deploy the compressed videos.\n');
}

main().catch(console.error);
