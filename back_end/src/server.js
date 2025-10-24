import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello site is ok");
});

app.use("/users", router);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("server is not response", err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server is on running ${PORT}`));
