import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "../routes/userRoute.js";
import newMsg from "../routes/mesRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.FRONT_END,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello site is ok 🚀");
});

app.use("/users", router);
app.use("/user", newMsg);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error", err));

// ❌ REMOVE app.listen
// ✅ Export app
export default app;
