const fs = require('fs');
const path = require('path');

async function download(url, dest) {
  console.log('Fetching', url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const arrBuffer = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(arrBuffer));
  console.log('Saved', dest);
}

const prompts = {
  'ind-9.png': 'bright daylight, beautiful modern nuclear power plant with large cooling towers, entirely surrounded by lush vibrant green nature and a clear blue sky, lovely day, photorealistic, 8k',
  'product-ui.png': 'bright colorful modern software dashboard user interface on a computer monitor, light theme, vibrant 3d charts, clean modern office desk space, photorealistic, daylight, 8k',
  'main-visual.png': 'bright daylight, beautiful futuristic eco-friendly smart city skyline, vivid green parks, clear blue sky, golden hour sunlight, colorful and vibrant, photorealistic photography, 8k'
};

(async () => {
  for (const [filename, prompt] of Object.entries(prompts)) {
    const dest = path.join(__dirname, 'public', filename);
    const width = 1000;
    const height = 600;
    const seed = Math.floor(Math.random() * 999999);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&nologo=true&seed=${seed}`;
    try {
      await download(url, dest);
    } catch (e) {
      console.error(e);
    }
  }
})();
