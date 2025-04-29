
import express from "express";
import { register, login, refreshToken, secrets, verifyToken } from "../controller/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/refresh-token", refreshToken);
router.get("/secrets", verifyToken, secrets);

export default router;
