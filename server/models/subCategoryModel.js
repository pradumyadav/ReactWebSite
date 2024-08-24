import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const SubCategoryData = mongoose.model('subcategorys', subCategorySchema);

export default SubCategoryData;
