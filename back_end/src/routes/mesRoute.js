import express from "express"
import { newMsg } from "../controller/users/messages.js"
import verifyUser from "../middleware/token.js"

const router = express.Router()

router.post('/newMsg',verifyUser,newMsg)

export default router