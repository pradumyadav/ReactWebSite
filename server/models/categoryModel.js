import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const CategoryData = mongoose.model('categorys', categorySchema);

export default CategoryData;
