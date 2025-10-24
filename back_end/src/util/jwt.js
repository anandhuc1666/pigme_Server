import jwt from "jsonwebtoken";

export const getUserToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.ACESS_KEY, { expiresIn: "60m" });
};
