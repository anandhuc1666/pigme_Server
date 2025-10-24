import jwt from "jsonwebtoken";

export const getUserToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.ACCESS_KEY, { expiresIn: "60m" });
};
