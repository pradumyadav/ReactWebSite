import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const TestimonialData = mongoose.model('testimonials', testimonialSchema);

export default TestimonialData;
