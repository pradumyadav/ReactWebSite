import mongoose from "mongoose";

const awardSchema = new mongoose.Schema({
    awardName: {
        type: String
    }
});

const AwardData = mongoose.model("awards", awardSchema);

export default AwardData;