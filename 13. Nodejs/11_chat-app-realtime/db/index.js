import chalk from "chalk";
import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            process.env.MONGODB_URI
        );
        console.log(chalk.bgGreen(`MongoDB connected `));

    } catch (error) {
        console.error(chalk.red("MongoDB Connection failed:", error));
        // process.exit(1);
    }
}

export default connectDB;