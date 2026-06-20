import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
  origin: 'process.env.ORIGIN' ,
  credentials: true,
  // optionsSuccessStatus: 200 
}))

app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(cookieParser())
app.use(express.static('public'))
import user from "./routes/user.router.js"
import visit from "./routes/util.router.js"

app.use("/user", user)
app.use("/visit", visit)


export default app 
