import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 
}))

app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(cookieParser())
import user from "./routes/user.router.js"

app.use("/user", user)


export default app 
