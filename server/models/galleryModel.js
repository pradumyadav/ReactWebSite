import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
    blogImage: {
        type: String,
    },
});

const GalleryData = mongoose.model('gallerys', gallerySchema);

export default GalleryData;
