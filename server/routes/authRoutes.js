import express from 'express';
import User from '../models/userModel.js';

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        console.log('user', user);
        console.log('password', password);
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default authRouter;
