const fs = require('fs');
const path = require('path');

const pubDir = path.join(__dirname, 'public');
const files = fs.readdirSync(pubDir);
files.forEach(f => {
  if (f.endsWith('.png')) {
    const stat = fs.statSync(path.join(pubDir, f));
    console.log(`${f}: ${stat.size} bytes`);
  }
});
