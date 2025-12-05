import { MessageRepository } from "../../repositories/implementation/message.repository"

export class MessageService {
    constructor(private messageRepo: MessageRepository) {}

    async saveMessage(data:any) {
           let res = await this.messageRepo.saveMessage(data)
           return res
    }

    async getChatHistory(userA:string, userB:string) {
        return await this.messageRepo.getMessagesBetweenUser(userA, userB)
    }

}