// require express
const express = require('express');

// invoke the express function and store in the app variable
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// get request from the homepage which is the root
app.get('/', (req, res) => {
    // res.send('<h1>Hello, Universe!</h1>');
    res.render('index');

});

// get request from the about page
app.get('/about', (req, res) => {
    // res.send('<h1>About, Universe!</h1>');
    res.render('about');

});

// get request from the create new-blog page
app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// 404-error-page
app.use((req, res) => {
    res.status(404).render('404');
});


