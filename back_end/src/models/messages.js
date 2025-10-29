import mongoose from "mongoose";

const Messages = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  reciverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  messages: {
    type: String,
  },
});
const MsgRoom = mongoose.model("messages", Messages);
export default MsgRoom;
