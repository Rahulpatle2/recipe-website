import express from 'express';
import * as recipeController from "../controllers/recipeController.js"
import { isUserAuthor } from '../middleware/userAuth.js'; 

const recipeRouter = express.Router();


recipeRouter.get('/',recipeController.getAllRecipeController);
recipeRouter.post('/create-recipe',isUserAuthor,recipeController.createRecipeController);
recipeRouter.patch('/update-recipe/:id',isUserAuthor,recipeController.updateRecipeController);
recipeRouter.delete('/delete-recipe/:id',isUserAuthor,recipeController.deleteRecipeController);
recipeRouter.get('/get-recipe/:id',recipeController.getSingleRecipeController);


export default recipeRouter