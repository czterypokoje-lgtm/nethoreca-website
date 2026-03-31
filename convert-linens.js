const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inDir = '/Users/mac/Downloads/';
const outDir = '/Users/mac/Downloads/nethoreca-website/public/images/products/table-linens/';

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, {recursive: true});

const files = [
  { in: 'perlowa-biel-obrus-bialego-luksusu-dla-horeca-gastro.jpg.webp', out: 'hero-obrus.webp' },
  { in: '81ruRVUOonL._AC_UF1000,1000_QL80_.jpg', out: 'obrus-standard.webp' },
  { in: 'Serwetki-biale-materialowe-45x45-gastronomiczne-hotelowe-restauracyjne.jpeg', out: 'serwetka.webp' }
];

async function convert() {
  for (const f of files) {
    if (fs.existsSync(path.join(inDir, f.in))) {
        await sharp(path.join(inDir, f.in))
        .webp({ quality: 85 })
        .toFile(path.join(outDir, f.out));
        console.log(`Converted ${f.in} to ${f.out}`);
    } else {
        console.log(`File not found: ${f.in}`);
    }
  }
}
convert();
