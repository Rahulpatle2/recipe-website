import express from "express"
import * as userController from '../controllers/userController.js'
import { isValidUser } from "../middleware/userAuth.js";

const userRouter = express.Router();

userRouter.post('/signup',userController.userRegisterController);
userRouter.post('/login',userController.userLoginController);
userRouter.post('/logout',userController.userLogoutController);
userRouter.post('/fav-recipe/:id',isValidUser,userController.addFavoriteRecipeController);
userRouter.post('/fav-recipe-rem/:id',isValidUser,userController.removeFavoriteRecipeController);
userRouter.get('/me',isValidUser,userController.loadUserController);


export default userRouter;