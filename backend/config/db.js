import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGODB_URL;
        if (!uri) {
            throw new Error("MONGO_URI not found in environment variables");
        }

        console.log("Attempting to connect to MongoDB Atlas...");
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);
        process.exit(1); // Stop the server if DB connection fails in production
    }
};

export default connectDB;