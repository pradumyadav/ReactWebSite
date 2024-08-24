import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    count: {
        type: Number,
        default: 0
    }
});

const TagData = mongoose.model("tags", tagSchema);

export default TagData;