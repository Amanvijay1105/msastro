import dotenv from "dotenv"
import express from "express"
import {connectDB} from "./config/db.js";
import passport from 'passport'
import configurePassport from "./utils/passport.js";
import session from "express-session"
import authRoute from "./routes/auth.route.js";
dotenv.config()
const app = express();

app.use(express.json())
configurePassport(passport);
// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth",authRoute)
app.listen(process.env.PORT,()=>{
    console.log(`server is running at port : ${process.env.PORT}`)
    connectDB()
})