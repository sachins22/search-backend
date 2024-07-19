import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const DB_URL = "mongodb://127.0.0.1:27017";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log(`MongoDB connected! DB HOST: ${DB_URL}`);
    } catch (error) {
        console.error("MONGODB connection FAILED: ", error);
        throw new Error("Failed to connect to MongoDB");
    }
}

export { connectDB };
