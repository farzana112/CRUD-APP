import mongoose from "mongoose"
import dotenv from "dotenv" ;
dotenv.config()
const port=process.env.PORT || 6001
const url=process.env.MONGO_URI
const connectDB = async () => {
    try {
        console.log(process.env.PORT);
        if (!process.env.MONGO_URI) {
            throw new Error('MongoDB connection URI not found in environment variables.');
        }
       
        const conn = await mongoose.connect(url,{
           
            
        });

        console.log( '\x1b[42m%s\x1b[0m',`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
export default connectDB ; 
