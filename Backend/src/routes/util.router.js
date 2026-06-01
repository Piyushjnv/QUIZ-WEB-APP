import express from "express"
import { visit } from "../controllers/Visit.controllers.js"
const router = express.Router()

router.route("/").post(visit)

export default router