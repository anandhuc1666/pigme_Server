import mongoose from "mongoose";

const message = new mongoose.Schema(
    {
        userId:{
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        msg:{
            type:String
        },
        
    },
    {timestamps:true}
);
const msg = mongoose.model("msg",message)
export default msg