const fs = require('fs');

// creating a readStream
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' });

// creating a writeStream
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// using the read/write stream without pipes
readStream.on('data', (chunk) => {
    // console.log('--- NEW CHUNK ---');
    // console.log(chunk);
    console.log('data writen!');
    // writeStream.write(`\n ===NEW CHUNK=== \n`);
    // writeStream.write(chunk);
})

// using the read/write stream with pipes
readStream.pipe(writeStream);