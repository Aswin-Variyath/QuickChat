import app from './app'
import dotenv from 'dotenv'
import http from 'http'
import {connectDB} from './config/databse'
import { initSocket } from './sockets/chat.socket';
dotenv.config();



const server = http.createServer(app)
initSocket(server);  
connectDB()
const PORT = process.env.PORT || 5000

server.listen(PORT,()=>console.log("Server is ruuning"))