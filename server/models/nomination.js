import mongoose from "mongoose";

const nominationSchema = new mongoose.Schema({
    email: {
        type: String
    },
    phone: {
        type: String
    },
    amount: {
        type: String
    },
    about: {
        type: String
    },
    terms: {
        type: String
    }
});

const NominationData = mongoose.model("nomination_datas", nominationSchema);

export default NominationData;