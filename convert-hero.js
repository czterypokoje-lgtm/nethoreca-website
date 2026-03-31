const sharp = require('sharp');
const path = require('path');

const inFile = '/Users/mac/Downloads/elysse-serisi-20-2-ring-iplik-otel-ayak-havlusu-5889-1200x1800.jpg';
const outFile = '/Users/mac/Downloads/nethoreca-website/public/images/products/bathmats/stopka-hero.webp';

async function run() {
    await sharp(inFile).webp({quality: 85, width: 800}).toFile(outFile);
    console.log("Done converting hero image");
}
run();
