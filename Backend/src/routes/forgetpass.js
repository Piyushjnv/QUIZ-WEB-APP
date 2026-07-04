import {ForgetPass,sendotp,Verifyotp,ResetPass} from "../controllers/forgetPass.controller.js"
import express from "express"
const router = express.Router()


router.route("/forgetpass").post(ForgetPass)
router.route("/sendotp").post(sendotp)
router.route("/verifyotp").post(Verifyotp)
router.route("/setPassword").post(ResetPass)


export default router