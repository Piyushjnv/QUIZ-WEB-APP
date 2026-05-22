import addQuestions from "../controllers/addquestion.controllers.js";
// import sendQuestions from "../controllers/questionsend.controller.js";
import {sendQuestions , History, Computer, Polity, Geography, English, economics, general, science,Static , neet, biology, chemistry, physics } from "../controllers/questionsend.controller.js";
import { loginUser, logout, registerUser } from "../controllers/user.controller.js";
import express from "express";
const router = express.Router();

router.post("/register", registerUser)

router.post("/login", loginUser)
router.route("/logout").post(logout)
router.route("/qadd").post(addQuestions)
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
router.route("/qsend/neet").get(neet) 
router.route("/qsend/biology").get(biology)
router.route("/qsend/chemistry").get(chemistry)
router.route("/qsend/physics").get(physics)
export default router