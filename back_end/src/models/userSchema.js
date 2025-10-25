import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number: { type: Number, required: true },
    gender: {type:String},
    role:{
        type:String,
        default:"user"
    }
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", UserSchema);
export default Users;
