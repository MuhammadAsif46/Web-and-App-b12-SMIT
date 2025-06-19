import chalk from "chalk";
import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            "mongodb+srv://smit:smit@smittech.kitbqlb.mongodb.net/test?retryWrites=true&w=majority&appName=SmitTech"
        );
        console.log(chalk.bgGreen(`MongoDB connected `));

    } catch (error) {
        console.error(chalk.red("MongoDB Connection failed:", error));
        // process.exit(1);
    }
}

export default connectDB;