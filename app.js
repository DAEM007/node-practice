// require express
const express = require('express');

// invoke the express function and store in the app variable
const app = express();

// listen for requests
app.listen(3000);

// get request from the homepage which is the root
app.get('/', (req, res) => {
    // res.send('<h1>Hello, Universe!</h1>');
    res.sendFile('./views/index.html', { root: __dirname });

});

// get request from the about page
app.get('/about', (req, res) => {
    // res.send('<h1>About, Universe!</h1>');
    res.sendFile('./views/about.html', { root: __dirname });

});

// redirect user
app.get('/about-us', (req, res) => {
    // res.send('<h1>About, Universe!</h1>');
    res.redirect('/about');

});

// 404-error-page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
