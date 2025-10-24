import jwt from "jsonwebtoken";

const verifyUser = (req, res) => {
  const token = req.cookies?.userToken;
  if (!token) {
    return res.status(401).json({ message: "user token not created" });
  }
  try {
    jwt.verify(token,process.env.ACESS_KEY,(err,decode)=>{
        if(err){
            return res.status(404).json({message:"user id not found"})
        }
        req.user = decode
    })
  } catch (error) {
    return res.status(401).json({message:"invalide token"})
  }
};
export default verifyUser;
