import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/authRoutes.js';
import blogRouter from './routes/blogRoutes.js';

import http from 'http';
import https from 'https';
import fs from 'fs';

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

const ipAddress = '195.35.20.58';

const privateKey = fs.readFileSync(
    '/etc/letsencrypt/live/devrudra.online-0001/privkey.pem',
    'utf8'
);
const certificate = fs.readFileSync(
    '/etc/letsencrypt/live/devrudra.online-0001/cert.pem',
    'utf8'
);
const ca = fs.readFileSync(
    '/etc/letsencrypt/live/devrudra.online-0001/chain.pem',
    'utf8'
);

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca,
};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(2443, ipAddress, () => {
    console.log('HTTPS Server running on port 2443');
});

const httpServer = http.createServer((req, res) => {
    res.writeHead(301, {
        Location: 'https://' + req.headers['host'] + req.url,
    });
    res.end();
});

app.use('/api/admin', authRouter);
app.use('/api/blog', blogRouter);

const PORT = 3016;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
