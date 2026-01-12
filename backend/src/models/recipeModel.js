import mongoose, { Model } from "mongoose";


const recipeSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    chef:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }

});


const recipeModel = mongoose.model("recipes",recipeSchema);

export default recipeModel;