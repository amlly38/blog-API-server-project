import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

export default Post; 