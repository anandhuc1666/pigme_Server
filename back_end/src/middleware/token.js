// import jwt from "jsonwebtoken";

// const verifyUser = (req, res,next) => {
//   const token = req.cookies?.userToken;
//   console.log(req.cookie)
//   if (!token) {
//     return res.status(401).json({ message: "user token not created" });
//   }
//   try {
//     jwt.verify(token,process.env.ACCESS_KEY,(err,decoded)=>{
//         if(err){
//             return res.status(404).json({message:"user id not found"})
//         }
//         console.log(token,decoded)
//          req.user = decoded;
//          next()
//     })
//   } catch (error) {
//     return res.status(401).json({message:"invalide token"})
//   }
// };
// export default verifyUser;
import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token =
    authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : req.cookies?.userToken;

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(token, process.env.ACCESS_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = decoded; // ✅ Save user data in request
    next();
  });
};

export default verifyUser;
