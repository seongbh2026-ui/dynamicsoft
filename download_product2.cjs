const fs = require('fs');

async function download() {
  const res = await fetch('https://loremflickr.com/800/600/dashboard');
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync('public/product-ui.png', buffer);
  console.log('Size:', buffer.length);
  
  if (buffer.length < 100) {
    console.log(buffer.toString('utf8'));
  }
}
download();
