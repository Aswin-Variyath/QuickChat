export interface IMessageDocument extends Document{
    from: string;
    to:string;
    message:string;
    messageId:string;
    timestamp:number;
}