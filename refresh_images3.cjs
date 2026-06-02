const fs = require('fs');
const https = require('https');
const path = require('path');

const prompts = {
  'ind-8.png': 'bright vibrant photography of a clean modern steel mill interior, glowing orange molten steel pouring, bright sparks, photorealistic, highly detailed industrial photography, 8k',
  'ind-9.png': 'bright daylight, beautiful modern nuclear power plant with large cooling towers, entirely surrounded by lush vibrant green nature and a clear blue sky, lovely day, photorealistic, 8k',
  'product-ui.png': 'bright colorful modern software dashboard user interface on a computer monitor, light theme, vibrant 3d charts, clean modern office desk space, photorealistic, daylight, 8k',
  'main-visual.png': 'bright daylight, beautiful futuristic eco-friendly smart city skyline, vivid green parks, clear blue sky, golden hour sunlight, colorful and vibrant, photorealistic photography, 8k'
};

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  for (const [filename, prompt] of Object.entries(prompts)) {
    console.log(`Downloading ${filename}...`);
    const dest = path.join(__dirname, 'public', filename);
    const width = filename === 'main-visual.png' ? 1920 : 1080;
    const height = filename === 'main-visual.png' ? 1080 : 600;
    const seed = Math.floor(Math.random() * 999999);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&nologo=true&seed=${seed}`;
    try {
      await download(url, dest);
      console.log(`Success: ${filename}`);
    } catch (e) {
      console.error(`Error: ${filename} - ${e.message}`);
    }
  }
})();
