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

(async () => {
  const images = {
    'ind-9.png': 'https://loremflickr.com/800/600/nature,bright',
    'product-ui.png': 'https://loremflickr.com/800/600/office,bright',
    'main-visual.png': 'https://loremflickr.com/1280/720/city,bright'
  };

  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(__dirname, 'public', filename);
    try {
      await download(url, dest);
    } catch (e) {
      console.error(e);
    }
  }
})();
