import express from "express";
import {
  getNonUserMsg,
  getUserMsg,
  newMsg,
} from "../controller/users/messages.js";
import verifyUser from "../middleware/token.js";

const router = express.Router();

router
  .post("/newMsg", verifyUser, newMsg)
  .get("/msgs", verifyUser, getUserMsg)
  .get("/nonusermsg", verifyUser, getNonUserMsg);

export default router;
