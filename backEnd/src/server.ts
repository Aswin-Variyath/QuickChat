import app from './app'
import dotenv from 'dotenv'
import http from 'http'
// import {initSocket} from ''
import {connectDB} from './config/databse'
dotenv.config();

const server = http.createServer(app)

connectDB()
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log("Server is ruuning"))