import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 
}))

app.use(express.json())

export default app 
