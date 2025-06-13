import mongoose from "mongoose";


const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(
          ""
        );
        console.log(` MongoDB connected `);
        
    } catch (error) {
        console.error("MongoDB Connection failed:", error);
        // process.exit(1);
    }
}

export default connectDB;