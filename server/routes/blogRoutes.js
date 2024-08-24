import express from 'express';
import CategoryData from '../models/categoryModel.js';
import BlogData from '../models/blogModel.js';
import multer from 'multer';
import path from 'path';
import SubCategoryData from '../models/subCategoryModel.js';
import TestimonialData from '../models/testimonialsModel.js';
import EventData from '../models/eventModel.js';
import GalleryData from '../models/galleryModel.js';

const blogRouter = express.Router();

function getFormattedDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
}

blogRouter.get('/showBlogs', async (req, res) => {
    try {
        const blogs = await BlogData.find().sort({ _id: -1 });
        return res.json({ blogs });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

blogRouter.post('/getPost', async (req, res) => {
    try {
        const { blogId } = req.body;
        console.log(blogId);
        const blog = await BlogData.findOne({ title: blogId });
        return res.json({ blog });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blog' });
    }
});

blogRouter.get('/getLast4Posts', async (req, res) => {
    try {
        const posts = await BlogData.find().sort({ _id: -1 }).limit(4);
        return res.json({ posts });
    } catch (error) {
        console.log(error);
    }
});

blogRouter.get('/getLatest5Categories', async (req, res) => {
    try {
        const categories = await CategoryData.find().sort({ _id: -1 }).limit(5);
        return res.json({ categories });
    } catch (error) {
        console.log(error);
    }
});

blogRouter.get('/getLatest3Posts', async (req, res) => {
    try {
        const posts = await BlogData.find().sort({ _id: -1 }).limit(3);
        return res.json({ posts });
    } catch (error) {
        console.log(error);
    }
});

blogRouter.get('/getPosts', async (req, res) => {
    try {
        const posts = await BlogData.find().sort({ _id: -1 });
        console.log('called');
        console.log('posts', posts);

        console.log('outputs', posts);

        return res.json({ posts });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

blogRouter.get('/getCategories', async (req, res) => {
    try {
        const categories = await CategoryData.find().sort({ _id: -1 });
        return res.json({ categories });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});

blogRouter.get('/getGallery', async (req, res) => {
    try {
        const gallery = await GalleryData.find().sort({ _id: -1 });
        return res.json({ gallery });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch gallery' });
    }
});

blogRouter.get('/getTestimonials', async (req, res) => {
    try {
        const testimonials = await TestimonialData.find().sort({ _id: -1 });
        return res.json({ testimonials });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch testimonials' });
    }
});

blogRouter.get('/getSubCategories', async (req, res) => {
    try {
        const formattedSubcategories = await SubCategoryData.aggregate([
            {
                $sort: { _id: -1 },
            },
            {
                $lookup: {
                    from: 'categorys',
                    let: { categoryId: { $toObjectId: '$category' } },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ['$_id', '$$categoryId'] },
                            },
                        },
                    ],
                    as: 'categoryData',
                },
            },
            {
                $unwind: {
                    path: '$categoryData',
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    category: 1,
                    categoryTitle: { $ifNull: ['$categoryData.title', null] },
                    createdAt: 1,
                    updatedAt: 1,
                },
            },
        ]);

        console.log(
            'Aggregation result:',
            JSON.stringify(formattedSubcategories, null, 2)
        );

        return res.json({ subcategories: formattedSubcategories });
    } catch (error) {
        console.error('Error in getSubCategories:', error);
        res.status(500).json({ error: 'Failed to fetch subcategories' });
    }
});

blogRouter.get('/getParentCategories', async (req, res) => {
    try {
        const categories = await CategoryData.find({ parent: '' }).sort({
            _id: -1,
        });
        return res.json({ categories });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});

blogRouter.get('/getEvents', async (req, res) => {
    try {
        const events = await EventData.find({}).sort({
            _id: -1,
        });
        return res.json({ events });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

blogRouter.post('/addCategory', async (req, res) => {
    try {
        const { title } = req.body;
        console.log('req.body', req.body);
        const category = new CategoryData({ title });
        await category.save();
        return res.json({
            message: 'Category added successfully',
            status: 200,
        });
    } catch (error) {
        res.json({ message: 'Failed to add category' });
    }
});

blogRouter.post('/addTestimonials', async (req, res) => {
    try {
        const { title, content } = req.body;
        console.log('req.body', req.body);
        const category = new TestimonialData({ title, content });
        await category.save();
        return res.json({
            message: 'Testimonials added successfully',
            status: 200,
        });
    } catch (error) {
        res.json({ message: 'Failed to add testimonials' });
    }
});

blogRouter.post('/addSubCategory', async (req, res) => {
    try {
        const { title, categoryId } = req.body;
        console.log('req.body', req.body);
        const category = new SubCategoryData({ title, category: categoryId });
        await category.save();
        return res.json({
            message: 'Sub Category added successfully',
            status: 200,
        });
    } catch (error) {
        res.json({ message: 'Failed to add sub category' });
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/uploads/');
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const fileName = `${file.fieldname}-${Date.now()}${fileExtension}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

blogRouter.post(
    '/addBlog',
    upload.single('featuredImage'),
    async (req, res) => {
        try {
            const {
                title,
                blogContent,
                description,
                selectedCategory,
                subcategory,
                featuredImage,
            } = req.body;
            const { filename } = req.file;

            const linkedUrl = title
                .toLowerCase()
                .replace(/[^\w\s-]/g, '') // Remove all non-word chars except spaces and hyphens
                .replace(/\s+/g, '-') // Replace spaces with hyphens
                .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
                .trim();

            console.log('title', title);
            console.log('blogContent', blogContent);
            console.log('selectedCategory', selectedCategory);
            console.log('subcategory', subcategory);
            console.log('description', description);
            console.log('featuredImage', featuredImage);
            console.log('filename', filename);
            console.log('linkedUrl', linkedUrl);

            // description, author, date, visibility, categories, featuredImage, tags, excerpt, url
            const blog = new BlogData({
                title: title,
                blogImage: filename,
                content: blogContent,
                author: 'madasky',
                url: linkedUrl,
                date: getFormattedDate(),
                visibility: 'Public',
                categories: selectedCategory,
                subcategory: subcategory,
                description: description,
            });
            await blog.save();

            return res.json({ message: 'Blog added successfully' });
        } catch (error) {
            res.json({ message: 'Failed to add blog' });
        }
    }
);

blogRouter.post(
    '/addGallery',
    upload.single('featuredImage'),
    async (req, res) => {
        try {
            console.log('req.body', req.body);
            const { featuredImage } = req.body;
            const { filename } = req.file;

            console.log('featuredImage', featuredImage);
            console.log('filename', filename);
            // description, author, date, visibility, categories, featuredImage, tags, excerpt, url
            const blog = new GalleryData({
                blogImage: filename,
            });
            await blog.save();

            return res.json({ message: 'Gallery Image added successfully' });
        } catch (error) {
            res.json({ message: 'Failed to add gallery image' });
        }
    }
);

blogRouter.post(
    '/addEvent',
    upload.single('featuredImage'),
    async (req, res) => {
        try {
            const {
                title,
                blogContent,
                description,
                eventDate,
                eventTime,
                featuredImage,
            } = req.body;
            const { filename } = req.file;

            const linkedUrl = title
                .toLowerCase()
                .replace(/[^\w\s-]/g, '') // Remove all non-word chars except spaces and hyphens
                .replace(/\s+/g, '-') // Replace spaces with hyphens
                .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
                .trim();

            console.log('title', title);
            console.log('blogContent', blogContent);
            console.log('eventDate', eventDate);
            console.log('eventTime', eventTime);
            console.log('description', description);
            console.log('featuredImage', featuredImage);
            console.log('filename', filename);
            console.log('linkedUrl', linkedUrl);
            // description, author, date, visibility, categories, featuredImage, tags, excerpt, url
            const blog = new EventData({
                title: title,
                blogImage: filename,
                url: linkedUrl,
                content: blogContent,
                eventDate: eventDate,
                added_date: getFormattedDate(),
                eventTime: eventTime,
                description: description,
            });
            await blog.save();

            return res.json({ message: 'Events added successfully' });
        } catch (error) {
            res.json({ message: 'Failed to add event' });
        }
    }
);

blogRouter.delete('/deletePost/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await BlogData.findByIdAndDelete(id);
        if (response) {
            return res.json({
                message: 'Blog deleted successfully',
                status: 200,
            });
        } else {
            return res.json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.json({ message: 'Failed to delete blog' });
    }
});

export default blogRouter;
