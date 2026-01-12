import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const userRegisterController = async(req,res) =>{
   try {
     const{username,email,password} = req.body;
     
     if(!username || !email || !password){
        return  res.status(400).json({message:"All field required"});
     }
 
     const hashPassword = await bcrypt.hash(password,10);
 
     const existingUser = await userModel.findOne({
         email
     });
 
     if(existingUser){
         return res.status(409).json({message:"user already exists! please try another email or username"})
     }
 
     const user = await userModel.create({
         username,
         email,
         password:hashPassword
     });
 
     const token = jwt.sign({
         _id:user._id,
         email:user.email
     },process.env.SECRET_KEY,{expiresIn:"1d"});
 
     res.cookie("token",token,{
         secure:true,
         httpOnly:true,
         maxAge:1000 * 60 * 60 * 24,
         samesite:"lax",
        
     },);

     user.password = undefined;
 
     res.status(201).json({message:"You are registered now!",user});
   } catch (error) {
     res.status(500).json({message:"internal server error"})
   }
}

export const userLoginController = async(req,res) =>{
    try {
        const{email,password} = req.body;
    
        if(!email || !password){
            return res.status(400).json({message:"All fields required"});
        }
    
        const user = await userModel.findOne({
            email
        }).select('+password');;
    
        if(!user){
            return res.status(404).json({message:"User not found!"});
        }
    
        const isCorrectPassword = await bcrypt.compare(password,user.password);
    
        if(!isCorrectPassword){
            return res.status(401).json({message:"Incorrect email or password!"})
        }
    
        const token = jwt.sign({
            _id:user._id,
            email:user.email,
            isAuthor:user.isAuthor
        },process.env.SECRET_KEY,{expiresIn:"1d"});
    
        res.cookie("token",token,{
            secure:process.env.NODE_ENV === "production",
            httpOnly:true,
            maxAge:1000 * 60 * 60 * 24,
            sameSite:"lax"
        });
    
        user.password = undefined;
    
        res.status(200).json({message:"You Are LoggedIn!",user});
    } catch (error) {
        res.status(500).json({message:"internal server error",error:error.message});
    }


}

export const userLogoutController = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};



export const addFavoriteRecipeController = async (req, res) => {
  try {
    const userId = req.user._id;
    const recipeId = req.params.id;


    
    if (!recipeId) {
      return res.status(400).json({ message: "Recipe ID is required" });
    }

   
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $addToSet: { favRecipes: recipeId } },
      { new: true } 
    );


    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ 
      message: "Recipe added to favorites!",
      favorites: updatedUser.favRecipes 
    });

  } catch (error) {
    console.error("Add Favorite Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const removeFavoriteRecipeController = async(req,res) =>{
  try {
    const userId =  req.user._id;
    const recipeId = req.params.id;
  
    if(!recipeId){
      return res.status(400).json({message:"recipeId is required"});
    }
  
    const updatedUser = await userModel.findByIdAndUpdate(userId,
      {$pull: { favRecipes:recipeId }},
      {new:true}
    );
  
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ 
        message: "Recipe removed to favorites!",
        favorites: updatedUser.favRecipes 
      });
  
  } catch (error) {
     console.error("remove Favorite Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const loadUserController = async(req,res) =>{
   try {
    const id = req.user._id
 
    const user = await userModel.findById(id).select('-password');
 
    if(!user){
      return res.status(401).json("user not logged in");
    }
 
    res.status(200).json(user)
   } catch (error) {
    console.log(error);
    res.status(500).json("internal server error!")
   }
}



