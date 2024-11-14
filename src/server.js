import express from "express";
import mongoose from "mongoose";

import postRoutes from '../routes/post.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/blog', postRoutes);

app.all('*', (req, res) => {
    res.status(404).send('Page not found');
})

mongoose.connect('mongodb://localhost:27017/blog-api') 
    .then(() => app.listen(port))
    .then(() => console.log(`Server running on port ${port}`))
    .catch(error => console.log('Connection error', error));