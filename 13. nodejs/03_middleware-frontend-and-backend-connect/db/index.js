import mongoose from "mongoose";


const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(
          "mongodb+srv://<username>:<db-password>@sittech.kitbqlb.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=SmitTech"
        );
        console.log(` MongoDB connected `);
        
    } catch (error) {
        console.error("MongoDB Connection failed:", error);
        // process.exit(1);
    }
}

export default connectDB;