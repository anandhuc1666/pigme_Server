import express from "express";
import { register, getUsers, login } from "../controller/users/user.js";

const router = express.Router();

router
.post("/register", register)
.get("/users", getUsers)
.post("/login",login)

export default router;
