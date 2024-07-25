import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    images: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true, 
        
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
