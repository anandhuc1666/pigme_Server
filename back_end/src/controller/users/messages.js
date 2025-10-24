import Users from "../../models/userSchema.js";
import Msg from "../../models/messageSchema.js";

export const newMsg = async (req, res) => {
   const { msg } = req.body;
  const userId = req.user.id;
  try {
    const user = await Users.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    const newmsg = await Msg.create({
        userId:user._id,
        msg:msg
    })
     await newmsg.save()
     res.status(200).json({message:"new message"})
  } catch (error) {
    res.status(404).json({message:"invalide msg"})
    console.log(error);
  }
};

export const getUserMsg = async (req, res) => {
  const userId = req.user?.id || req.user?._id;

  try {
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const userMessages = await Msg.find({ userId: userId });

    if (!userMessages.length) {
      return res.status(404).json({ message: "No messages found" });
    }

    res.status(200).json({
      message: "User messages fetched",
      data: userMessages,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getNonUserMsg = async(req,res)=>{
    const userId = req.user.id
    const findMsg = await Msg.find()
    if(!userId){
        return res.status(400).json({message:"user not exsisted"})
    }
   const findallmsg = findMsg.filter((item)=>item.userId != userId)
   if(!findallmsg || findallmsg.length === 0){
    return res.status(400).json({message:"no messages available now"})
   }
   res.status(200).json({message:"non user message",data:findallmsg})
}
