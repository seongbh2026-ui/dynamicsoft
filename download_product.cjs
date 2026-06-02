const fs = require('fs');
const https = require('https');

https.get('https://loremflickr.com/800/600/dashboard,ui', (res) => {
  if (res.headers.location) {
    https.get(res.headers.location, (res2) => {
      res2.pipe(fs.createWriteStream('public/product-ui.png'));
    });
  } else {
    res.pipe(fs.createWriteStream('public/product-ui.png'));
  }
});
