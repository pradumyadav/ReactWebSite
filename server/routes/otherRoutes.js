import mongoose from "mongoose";
import express from "express";
import AboutData from "../models/aboutModel.js";
import AwardData from "../models/awardModel.js";
import NominationData from "../models/nomination.js";
import EventData from "../models/eventModel.js";
import multer from "multer";
import path from "path";
import Enquiry from "../models/enquiryModel.js";
import UserData from "../models/userModel.js";

const otherRouter = express.Router();

otherRouter.post('/api/admin/postAbout', async (req, res) => {
    try {
        const { blogContent } = req.body;
        const about = new AboutData({
            blogContent
        });
        await about.save();
        return res.json({ status: 200, message: 'About data saved successfully' });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.get('/api/admin/getAbout', async (req, res) => {
    try {
        const about = await AboutData.findOne().sort({ _id: -1 });
        return res.json({ about });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/events/');
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const fileName = `${file.fieldname}-${Date.now()}${fileExtension}`;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

otherRouter.post('/api/admin/addEvents', upload.single('eventImage'), async (req, res) => {
    try {
        console.log('req.file', req.file);
        console.log('req.body', req.body);
        const { eventTitle, eventDate } = req.body;
        const eventImage = req.file.filename;

        const events = new EventData({
            eventImage,
            eventTitle,
            eventDate
        });
        await events.save();
        return res.json({ status: 200, message: 'Event added successfully' });

    } catch (error) {
        console.log(error);
    }
});

otherRouter.get('/api/admin/allEvents', async (req, res) => {
    try {
        const events = await EventData.find().sort({ _id: -1 });
        return res.json({ events });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.post('/api/admin/insertEnquiry', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const enquiries = new Enquiry({
            name,
            email,
            subject,
            message
        });

        await enquiries.save();
        return res.json({ status: 200, message: 'Enquiry added successfully' });

    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Couldn\'t save data' });
    }
})

otherRouter.post('/api/user/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new UserData({
            username,
            email,
            password
        });

        await user.save();
        return res.json({ status: 200, message: 'User added successfully' });

    } catch (error) {
        console.log(error);
        res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.post('/api/user/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email, password);

        const user = await UserData.findOne({ email, password });

        if (user) {
            return res.json({ status: 200, message: 'Login successful' });
        } else {
            return res.json({ status: 401, message: 'Invalid credentials' });
        }

    } catch (error) {
        console.log(error);
        res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.post('/api/admin/addNewAwards', async (req, res) => {
    try {
        const { awardName } = req.body;
        const awards = new AwardData({
            awardName
        });
        await awards.save();
        return res.json({ status: 200, message: 'Awards added successfully' });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.get('/api/admin/allAwards', async (req, res) => {
    try {
        const awards = await AwardData.find().sort({ _id: -1 });
        return res.json({ awards });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.delete('/api/admin/deleteAwards/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const awards = await AwardData.findByIdAndDelete(id);
        return res.json({ status: 200, message: 'Awards deleted successfully' });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.post('/api/admin/editAwards', async (req, res) => {
    try {
        const { awardName, id } = req.body;
        console.log(req.body);
        const awards = await AwardData.findByIdAndUpdate(id, {
            awardName
        });
        return res.json({ status: 200, message: 'Awards updated successfully' });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.get('/api/admin/getAwardName/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const awards = await AwardData.findById(id);
        return res.json({ awards });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.post('/api/admin/addNomination', async (req, res) => {
    try {
        const { email, phone, amount, about, terms } = req.body;
        console.log(req.body);
        const nomination = new NominationData({
            email,
            phone,
            amount,
            about,
            terms
        });
        await nomination.save();
        return res.json({ status: 200, message: 'Nomination added successfully' });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

otherRouter.get('/api/admin/getNomination', async (req, res) => {
    try {
        const nomination = await NominationData.find().sort({ _id: -1 });
        return res.json({ nomination });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: 'Internal server error' });
    }
});

export default otherRouter;
