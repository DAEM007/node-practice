// require express
const express = require('express');
// require mongoose
const mongoose = require('mongoose');
// require blogRoutes
const blogRoutes = require('./Routes/BlogRoutes');

// invoke the express function and store in the app variable
const app = express();

// use dbURI to connect to mongodb
const dbURI = 'mongodb+srv://daem007:Daem2017@cluster0.8snuhrq.mongodb.net/node-basics?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000))
    .catch(err => console.log(err))


// require morgan
const morgan = require('morgan');

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// get request from the homepage which the root of the project
app.get('/', (req, res) => {
    // redirect / route to /blogs route 
    res.redirect('/blogs');

});

// get request from the about page
app.get('/about', (req, res) => {
    // res.send('<h1>About, Universe!</h1>');
    res.render('about', { title: 'About' });

});

// middleware for mini-app containing all blogs routes
app.use('/blogs', blogRoutes);

// handle the 404-error-pages
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});


// mongoose & mongo tests
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//       title: 'new blog',
//       snippet: 'about my new blog',
//       body: 'more about my new blog'
//     })
  
//     blog.save()
//       .then(result => {
//         res.send(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  
//   app.get('/all-blogs', (req, res) => {
//     Blog.find()
//       .then(result => {
//         res.send(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  
//   app.get('/single-blog', (req, res) => {
//     Blog.findById('5ea99b49b8531f40c0fde689')
//       .then(result => {
//         res.send(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  
