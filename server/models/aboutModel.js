import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    blogContent: {
        type: String
    }
});

const AboutData = mongoose.model("abouts", aboutSchema);

export default AboutData;