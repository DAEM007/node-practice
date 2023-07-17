// file system
let fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err.message);
    }
    console.log(data.toString()); // without the toString method it gives me a buffer - packet of chars
})

// writing files

// directories

// deleting files