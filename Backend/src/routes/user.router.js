import addQuestions from "../controllers/addquestion.controllers.js";
import neetqadd from "../controllers/NeetQuestionadd.js"
// import sendQuestions from "../controllers/questionsend.controller.js";
import {sendQuestions , History, Computer, Polity, Geography, English, economics, general, science,Static , neet, biology, chemistry, physics } from "../controllers/questionsend.controller.js";
import { loginUser, logout, registerUser } from "../controllers/user.controller.js";
import express from "express";
import userScore from "../controllers/userscore.controllers.js";
const router = express.Router();

router.post("/register", registerUser)

router.post("/login", loginUser)
router.route("/logout").post(logout)
// questiion 
router.route("/qadd").post(addQuestions)
router.route("/qaddneet").post(neetqadd)
router.route("/qsend").get(sendQuestions) 
router.route("/qsend/history").get(History) 
router.route("/qsend/computer").get(Computer) 
router.route("/qsend/polity").get(Polity) 
router.route("/qsend/geography").get(Geography) 
router.route("/qsend/english").get(English) 
router.route("/qsend/economics").get(economics) 
router.route("/qsend/general").get(general) 
router.route("/qsend/science").get(science) 
router.route("/qsend/static").get(Static) 
router.route("/neet/allneet").get(neet) 
router.route("/neet/biology").get(biology)
router.route("/neet/chemistry").get(chemistry)
router.route("/neet/physics").get(physics)
router.route("/score").post(userScore)
export default router