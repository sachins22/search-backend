import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address:{
        type:String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

export { User}
