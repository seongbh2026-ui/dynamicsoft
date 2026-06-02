const fs = require('fs');
const https = require('https');
const path = require('path');

const url = "https://image.pollinations.ai/prompt/colorful%20vibrant%20global%20network%203d%20hologram%20earth%20bright%20vivid%20colors%20technology?width=1920&height=1080&nologo=true";
const dest = path.join(__dirname, 'public', 'main-visual.png');

https.get(url, (res) => {
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Done downloading main-visual.png');
  });
});
