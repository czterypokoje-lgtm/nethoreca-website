const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inFile = '/Users/mac/Downloads/logistyka.jpg';
const outDir = '/Users/mac/Downloads/nethoreca-website/public/images/home/';
if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, {recursive:true}); }
const outFile = path.join(outDir, 'logistyka-serwis.webp');

async function convert() {
    await sharp(inFile)
    .webp({ quality: 85 })
    .toFile(outFile);
    console.log(`Converted to ${outFile}`);
}
convert();
