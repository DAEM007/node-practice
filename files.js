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
fs.writeFile('./docs/blog1.txt', 'Hello then gang!', (err) => {
    if(err) {
        console.log(err.message);
    }
    console.log(`Data has been changed!`);
})

fs.writeFile('./docs/blog2.txt', 'Hello once again', (err) => {
    if(err) {
        console.log(err.message);
    }
    console.log('New data created');
})

// directories
if(fs.existsSync('./assets')) {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log('directory has been removed!');
    })
} else {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log('directory has been created');
    })
}

// deleting files
fs.unlink('./docs/deleteme.txt', (err) => {
    if(err) {
        console.log(err.message);
    }
    console.log('file has been deleted!');
})