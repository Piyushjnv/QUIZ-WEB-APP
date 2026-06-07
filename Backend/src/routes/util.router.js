import express from "express"
import { visit } from "../controllers/Visit.controllers.js"
import UserHistory from "../controllers/userhistory.controllers.js";
import getHistory from "../controllers/HistoryQuestion.controllers.js";
const router = express.Router()

router.route("/visit").post(visit)
router.route("/Userhistory").post(UserHistory)
router.route("/getHistory").post(getHistory)

export default router