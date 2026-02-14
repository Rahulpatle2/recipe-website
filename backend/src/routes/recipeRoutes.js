import express from 'express';
import { isUserAuthor } from '../middleware/userAuth.js'; 
import { createRecipeController, deleteRecipeController, getAllRecipeController, getSingleRecipeController, updateRecipeController } from '../controllers/recipeController.js';

const recipeRouter = express.Router();


recipeRouter.get('/',getAllRecipeController);
recipeRouter.post('/create-recipe',isUserAuthor,createRecipeController);
recipeRouter.patch('/update-recipe/:id',isUserAuthor,updateRecipeController);
recipeRouter.delete('/delete-recipe/:id',isUserAuthor,deleteRecipeController);
recipeRouter.get('/get-recipe/:id',getSingleRecipeController);


export default recipeRouter