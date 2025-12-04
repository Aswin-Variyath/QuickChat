import { Server } from "socket.io";

export const initSocket = (server:any)=>{
    const io = new Server(server,{
        cors:{
            origin:'http://localhost:4200',
            methods:["GET", "POST"],
            credentials:true
        }
    })

    io.on('connection', (socket)=>{
        console.log("User connected", socket.id)

        socket.on("register", (userId:string)=>{
            console.log("user registered", userId, socket.id)
        })
        socket.on("send-message", (data)=>{
            console.log("Message received", data)
            io.emit("receive-messag",data)
        })
        socket.on("disconnect",()=>{
            console.log("User disconnected", socket.id)
        })
    })

}