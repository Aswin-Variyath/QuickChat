import { Server } from "socket.io";
import { MessageRepository } from "../repositories/implementation/message.repository";
import { MessageService } from "../service/implementation/message.service";

const users: Record<string, string> = {};

const messageRepo = new MessageRepository();
const messageService = new MessageService(messageRepo);

export const initSocket = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:4200",
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    console.log("✅ User connected:", socket.id);

    // ✅ ✅ THIS WAS MISSING (CRITICAL)
    socket.on("register", (userId: string) => {
      users[userId] = socket.id;
      console.log("✅ User registered:", userId, socket.id);
    });

    socket.on("send-message", async (data) => {
      console.log("📩 Message received in backend:", data);

      // ✅ Save to MongoDB
      await messageService.saveMessage(data);

      // ✅ Send ONLY to receiver
      const receiverSocketId = users[data.to];

      if (receiverSocketId) {
        io.to(receiverSocketId).emit("receive-message", data);
        console.log("✅ Message sent to receiver:", data.to);
      } else {
        console.log("❌ Receiver not connected:", data.to);
      }
    });

    socket.on("disconnect", () => {
      for (const key in users) {
        if (users[key] === socket.id) {
          delete users[key];
          break;
        }
      }
      console.log("❌ User disconnected:", socket.id);
    });
  });
};
