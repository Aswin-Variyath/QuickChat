import mongoose, { Schema } from "mongoose";
import { IMessageDocument } from "../../interfaces/message.interface";

const MessageSchema:Schema = new Schema({
    from:{
        type: String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    messageId: {
        type:String,
        required:true
    },
    timestamp:{
        type:Number,
        required:true
    }
    
},{timestamps:true})

export const messageModel = mongoose.model<IMessageDocument>('Message', MessageSchema)
