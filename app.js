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
    const blogs = [
        { title: 'Mind the master', snippets: 'This is a very good compendium of James Allen best works' },
        { title: 'Cant Hurt me', snippets: 'This is a very good piece by David Goggins' },
        { title: 'Deep work', snippets: 'This is an excellent piece by Cal Newport' },
    ];
    res.render('index', { title: 'Home', blogs: blogs });

});

// get request from the about page
app.get('/about', (req, res) => {
    // res.send('<h1>About, Universe!</h1>');
    res.render('about', { title: 'About' });

});

// get request from the create new-blog page
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create new blog' });
});

// 404-error-page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});


