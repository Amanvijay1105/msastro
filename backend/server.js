import dotenv from "dotenv"
import express from "express"
import {connectDB} from "./config/db.js";
dotenv.config()
const app = express();

app.use(express.json())
app.listen(process.env.PORT,()=>{
    console.log(`server is running at port : ${process.env.PORT}`)
    connectDB()
})