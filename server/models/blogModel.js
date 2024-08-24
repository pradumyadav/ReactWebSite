import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    blogImage: {
        type: String,
    },
    url: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
    visibility: {
        type: String,
        default: 'Public',
    },
    categories: {
        type: String,
        default: '',
    },
    subcategory: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
});

const BlogData = mongoose.model('blog_datas', blogSchema);

export default BlogData;
