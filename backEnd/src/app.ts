import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors({
  origin: "http://localhost:4200",
  methods: ["GET", "POST"],
  credentials: true
}));


app.get('/',(req,res)=>{
    res.send("Server is running")
})

export default app;
