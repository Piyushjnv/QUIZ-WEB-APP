import addQuestions from "../controllers/addquestion.controllers.js";
import neetqadd from "../controllers/NeetQuestionadd.js"
import  mathsadd from "../controllers/Maths.controllers.js";
import engqadd from "../controllers/englishQueston.controller.js"
// import sendQuestions from "../controllers/questionsend.controller.js";
import  {Auth} from "../middlewares/Auth.middleware.js"
import {sendQuestions , History, Computer, Polity, Geography, English, economics, general, science,Static , neet, biology, chemistry, physics , Maths , currentAffair  } from "../controllers/questionsend.controller.js";
import { loginUser, logout, registerUser, ChangePassword } from "../controllers/user.controller.js";
import express from "express";
import currentaffairs from "../controllers/CurrentAffairs.controllers.js"
import userScore from "../controllers/userscore.controllers.js";
const router = express.Router();



//user
router.post("/register", registerUser)
router.post("/login", loginUser)
router.route("/logout").post( Auth,logout)
router.route("/changePassword").post( ChangePassword)
// questiion 
router.route("/qadd").post(addQuestions)
router.route("/qaddneet").post(neetqadd)
router.route("/engqadd").post(engqadd)
router.route("/mathqadd").post(mathsadd)
router.route("/currentaffairs").post(currentaffairs)
// send question

router.route("/qsend").get(sendQuestions)  
router.route("/qsend/history").get(History) 
router.route("/qsend/computer").get(Computer) 
router.route("/qsend/polity").get(Polity) 
router.route("/qsend/geography").get(Geography) 
router.route("/qsend/english").get(English) 
router.route("/qsend/maths").get(Maths) 
router.route("/qsend/currentAffairs").get(currentAffair) 
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