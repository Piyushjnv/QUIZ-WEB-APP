import addQuestions from "../controllers/addquestion.controllers.js";
import { loginUser, logout, registerUser } from "../controllers/user.controller.js";
import express from "express";
const router = express.Router();

router.post("/register", registerUser)

router.post("/login", loginUser)
router.route("/logout").post(logout)
router.route("/qadd").post(addQuestions)

export default router