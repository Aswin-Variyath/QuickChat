import mongoose from 'mongoose'

export const connectDB = async()=>{
    try {
        const mongoUrl = process.env.MONGODB_URI as string
        await mongoose.connect(mongoUrl)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Mongo DB connection failed")
        process.exit(1)
    }
}
