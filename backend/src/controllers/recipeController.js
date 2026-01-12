import recipeModel from "../models/recipeModel.js";


export const createRecipeController = async(req,res) =>{
    try {
     const {title,imageUrl,description,instructions,ingredients,chef,category} = req.body;
 
     const recipe = await recipeModel.create({
         title,
         description,
         ingredients,
         instructions,
         imageUrl,
         chef,
         category
     })
 
     res.status(201).json({message:"recipe created successfully",recipe})
   } catch (error) {
     res.status(500).json(error)
   }
}

export const getAllRecipeController = async(req,res) =>{

   try {
     const recipes = await recipeModel.find();
 
     res.status(200).json(recipes);
   } catch (error) {
     res.status(401).json({message:"something went wrong!",error})
   }
}

export const updateRecipeController = async(req,res) =>{
    try {
      const {id} = req.params;
      const {title,
           description,
           ingredients,
           instructions,
           imageUrl,
           chef,
          category} = req.body;
  
      const recipe = await recipeModel.findByIdAndUpdate(id,{
           title,
           description,
           ingredients,
           instructions,
           imageUrl,
           chef,
          category},
           {new:true}
          )
  
      res.status(201).json({message:"recipe updated successfully",recipe});
    } catch (error) {
      res.status(500).json({message:"internal server error",error})
    }

}

export const deleteRecipeController = async(req,res) =>{
  try {
    const {id} = req.params;
  
    const recipe = await recipeModel.findByIdAndDelete(id);
  
    res.status(204).json({message:"recipe deleted successfully"})
  } catch (error) {
    res.status(500).json({message:"internal server error",error})
  }
}

export const getSingleRecipeController = async(req,res) =>{
  try {
    const id = req.params.id;
  
    const recipe = await recipeModel.findById(id);
  
    res.status(200).json(recipe);
    console.log("request chali")
  } catch (error) {
    res.status(404).json({message:"recipe not found"});
    console.log("request nhi chali")
  }

}
