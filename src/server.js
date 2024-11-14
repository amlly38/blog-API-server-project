import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/blog-api') 
    .then(() => app.listen(port))
    .then(() => console.log(`Server running on port ${port}`))
    .catch(error => console.log('Connection error', error));