import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        minlength: 6,
        select:false
    },
    isAuthor:{
        type:Boolean,
        default:false
    },
    favRecipes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"recipes"
        }
    ]
       
    
});


const userModel = mongoose.model("user",userSchema);

export default userModel;
