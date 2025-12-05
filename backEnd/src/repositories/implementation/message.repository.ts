import { messageModel } from "../../database/models/message.model";

export class MessageRepository {
    async saveMessage(data:any) {
        return await messageModel.create(data)
    }
    async getMessagesBetweenUser(userA:string, userB:string) {
        return await messageModel.find({
            $or:[
                {from:userA, to:userB},
                {from:userB, to: userA}
            ]
        }).sort({timestamp:1})
    }
}