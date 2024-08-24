import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
});

const Enquiry = mongoose.model('enquiries', enquirySchema);

export default Enquiry;