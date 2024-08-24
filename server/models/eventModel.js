import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
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
    eventDate: {
        type: String,
    },
    added_date: {
        type: String,
    },
    eventTime: {
        type: String,
    },
    description: {
        type: String,
        default: '',
    },
});

const EventData = mongoose.model('events', eventSchema);

export default EventData;
