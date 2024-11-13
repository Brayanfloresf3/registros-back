import { Router } from "express";
import singIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExits.js";
import isValidPassword from "../middlewares/isValidPassword.js";

const router = Router()

router.post('/signIn', accountNoExist, isValidPassword , singIn)

export default router