import express from "express"

import {googleLogin,googleCallback,logout} from "../controller/auth.controller.js"


const router = express.Router();

router.get("/google", googleLogin);
router.get("/google/callback", ...googleCallback);
router.get("/logout", logout);

export default router;