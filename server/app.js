import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/authRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
    .connect('mongodb://localhost:27017/madasky', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

app.use('/api/admin', authRouter);
app.use('/api/blog', blogRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
