// require moongose
const mongoose = require('mongoose');
// destructure the Schema property from the mongoose object...
const { Schema } = mongoose;

// create blog Schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// create blog model
const Blog = mongoose.model('Blog', blogSchema);

// export model
module.exports = Blog;