import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";


export const isUserAuthor = async(req,res,next) =>{
   try {
    const token = req.cookies.token
    
    if(!token){
      return res.status(401).json({message:"user not logged in"});
    }
 
    const decoded = jwt.verify(token,process.env.SECRET_KEY);
   
 
    req.user = decoded;

    const user = await userModel.findById(decoded._id);
    
    if(!user || !user.isAuthor){
        return res.status(403).json({message:"Access denied"});
    }
 
    next()
   } catch (error) {
     res.status(401).json({message:"user not logged in"})
   }
}

export const isValidUser = async(req,res,next) =>{
    try {
      const token = req.cookies.token
      
      if(!token){
        return res.status(401).json({message:"user not logged in"});
      }
   
      const decoded = jwt.verify(token,process.env.SECRET_KEY);
     
   
      req.user = decoded;
      next();
    } catch (error) {
       res.status(401).json({message:"user not logged in"})
    }


}