import Users from "../../models/userSchema.js";
import bcrypt from "bcrypt";
import { getUserToken } from "../../util/jwt.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;

    if (!name || !email || !password || !number) {
      return res
        .status(400)
        .json({ message: "Please complete the registration" });
    }

    const existed = await Users.findOne({ email });
    if (existed) {
      return res.status(400).json({ message: "User already exists" });
    }
    const gensalt = await bcrypt.genSalt(8);
    const hidepassword = await bcrypt.hash(password, gensalt);

    const newUser = new Users({
      name,
      email,
      password: hidepassword,
      number,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "please enter your email and password" });
    }
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "user not exsisted" });
    }
    const userPass = await bcrypt.compare(password, user.password);
    if (!userPass) {
      return res.status(400).json({ message: "user password invalide" });
    }
const token = getUserToken(user._id);

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(200).json({
      message: `${user.role} ${user.name} logged in successfully`,
      token,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "users not available" });
    }
    res.status(200).json({ message: "users are:", users: users });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "users not found" });
  }
};
