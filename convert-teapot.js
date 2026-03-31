const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inFile = '/Users/mac/Downloads/Obrus-Horeca-Aligator-100bawelna-CO100-160x250cm-www.poscielandropol.pl_.jpg';
const outFile = '/Users/mac/Downloads/nethoreca-website/public/images/products/table-linens/obrus-teapot.webp';

async function convert() {
    await sharp(inFile)
    .webp({ quality: 85 })
    .toFile(outFile);
    console.log(`Converted to ${outFile}`);
}
convert();
