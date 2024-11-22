import express from "express";
import { login, logout, Signup } from "../Controllers/authController.js";
const authRoutes = express.Router();
authRoutes.post("/signup", Signup);
authRoutes.post("/login", login);
authRoutes.get("/logout", logout);
export default authRoutes;