const fs = require('fs');
const https = require('https');
const path = require('path');

const prompts = {
  'ind-1.png': 'photorealistic bright orange sports car aerodynamics wind tunnel colorful smoke neon',
  'ind-2.png': 'sunburst offshore oil rig ocean waves bright colorful cinematic lighting golden hour',
  'ind-3.png': 'smart factory robotic arms bright yellow and green colorful vibrant high tech manufacturing',
  'ind-4.png': 'colorful shipping containers port aerial view bright sunny day logistics network',
  'ind-5.png': 'sunset colorful sky modern commercial airplane taking off runway vibrant',
  'ind-6.png': 'desert military base radar system bright day action dynamic camo colors',
  'ind-7.png': 'vibrant colorful olympic stadium lights action dynamic motion blur running track',
  'ind-8.png': 'bright fiery orange glowing molten steel mill factory sparks colorful intense heat',
  'ind-9.png': 'bright daylight nuclear power plant cooling tower green nature surrounding clear blue sky',
  'product-ui.png': 'colorful bright modern web dashboard interface 3d charts data visualization analytics ui'
};

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} from ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

(async () => {
  const promises = Object.entries(prompts).map(async ([filename, prompt]) => {
    console.log('Downloading ' + filename);
    const dest = path.join(__dirname, 'public', filename);
    try {
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=600&nologo=true&seed=${Math.floor(Math.random() * 10000)}`;
      await download(url, dest);
      console.log('Success: ' + filename);
    } catch (e) {
      console.error('Error for ' + filename + ' : ' + e.message);
    }
  });

  await Promise.all(promises);
})();
