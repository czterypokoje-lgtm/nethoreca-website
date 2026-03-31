const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inDir = '/Users/mac/Downloads/';
const outDir = '/Users/mac/Downloads/nethoreca-website/public/images/products/bathmats/';

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, {recursive: true});

const files = [
  { in: 'ODELIA.jpg', out: 'stopka-rosa.webp' },
  { in: 'stella-serisi-20-2-ring-iplik-otel-ayak-havlusu-5987-1200x1800.jpg', out: 'stopka-grecka-premium.webp' },
  { in: 'patia-serisi-20-2-ring-iplik-otel-ayak-havlusu-5816-1200x1800.jpg', out: 'stopka-szara-elegance.webp' },
  { in: 'talia-serisi-20-2-ring-iplik-otel-ayak-havlusu-5887-1200x1800.jpg', out: 'stopka-premium-700g.webp' }
];

async function convert() {
  for (const f of files) {
    if (fs.existsSync(path.join(inDir, f.in))) {
        await sharp(path.join(inDir, f.in))
        .webp({ quality: 80 })
        .toFile(path.join(outDir, f.out));
        console.log(`Converted ${f.in} to ${f.out}`);
    } else {
        console.log(`File not found: ${f.in}`);
    }
  }
}
convert();
