const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to Database :: MongoDB'))
    .catch(error => console.log("Error in connecting to DB: ", error));

// Create a blog schema
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
});

// Create a blog model
const Blog = mongoose.model('Blog', blogSchema);

// Routes
app.get('/blogs', (req, res) => {
    Blog.find()
        .then(blogs => res.json(blogs))
        .catch(error => res.status(400).json('Error: ' + error));
});

app.post('/blogs', (req, res) => {
    const { title, content } = req.body;

    const newBlog = new Blog({
        title,
        content,
    });

    newBlog.save()
        .then(() => res.json('Blog added'))
        .catch(error => res.status(400).json('Error: ' + error));
});

// Update a blog
app.put('/blogs/:id', (req, res) => {
    const { title, content } = req.body;
    const blogId = req.params.id;

    Blog.findByIdAndUpdate(blogId, { title, content }, { new: true })
        .then(() => res.json('Blog updated'))
        .catch(error => res.status(400).json('Error: ' + error));
});

// Autosave route
app.post('/blogs/:id/autosave', (req, res) => {
    const { content } = req.body;
    const blogId = req.params.id;

    Blog.findByIdAndUpdate(blogId, { content }, { new: true })
        .then(() => res.json('Blog autosaved'))
        .catch(error => res.status(400).json('Error: ' + error));
});

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
