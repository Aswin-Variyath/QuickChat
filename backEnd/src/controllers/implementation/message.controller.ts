import { Request, Response } from "express";
import { MessageRepository } from "../../repositories/implementation/message.repository";
import { MessageService } from "../../service/implementation/message.service";

const repo = new MessageRepository()
const service = new MessageService(repo)

export class MessageController {

    async getChat(req:Request, res: Response){
        const {userA, userB} = req.params;
        const message = await service.getChatHistory(userA,userB)
        res.json(message)
        return
    }
}