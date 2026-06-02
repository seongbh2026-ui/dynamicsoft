const fs = require('fs');
const https = require('https');
const path = require('path');

const url = "https://image.pollinations.ai/prompt/bright%20beautiful%20futuristic%20eco%20friendly%20smart%20city%20skyline%20vivid%20green%20parks%20clear%20blue%20sky%20colorful%20and%20vibrant%20photorealistic?width=1920&height=1080&nologo=true&seed=" + Math.floor(Math.random() * 9999);
const dest = path.join(__dirname, 'public', 'main-visual.png');

console.log('Downloading main-visual...');
https.get(url, (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (res2) => {
      const file = fs.createWriteStream(dest);
      res2.pipe(file);
      file.on('finish', () => console.log('success redirect'));
    });
  } else {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => console.log('success'));
  }
});
