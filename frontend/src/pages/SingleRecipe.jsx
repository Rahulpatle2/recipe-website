import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { motion } from 'motion/react';
import instance from '../config/config';
import { useDataHook } from '../hooks/useDataHook';
import AuthContext from '../context/AuthContext';



const SingleRecipe = () => {
  const {fav,setFav} = useDataHook();
  const {user} = useContext(AuthContext);
  const [recipe,setRecipe] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id)
   useEffect(() => {
    // console.log(id);
    const fetchRecipe = async() =>{
      try {
        const res = await instance.get(`/recipes/get-recipe/${id}`);
        console.log(res.data) 
        setRecipe(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchRecipe();
    
  },[id]);
  
  // console.log(user.favRecipes)

  
  // const recipe = data.find((r) => r._id === id);
  // console.log(id)

 

  // console.log(recipe)
 
  
  const {
    register,
    handleSubmit,
    reset // Reset function chahiye
  } = useForm({
    defaultValues: {
      imageUrl: '',
      title: '',
      chef: '',
      description: '',
      ingredients: '',
      instructions: '',
      category: '',
    }
  });

  // 3. Jaise hi 'recipe' state update ho, Form ko bhi update (reset) kardo
  useEffect(() => {
    if (recipe) {
      reset({
        imageUrl: recipe.imageUrl,
        title: recipe.title,
        chef: recipe.chef,
        description: recipe.description,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        category: recipe.category,
      });
    }
  }, [recipe, reset]);


  const SubmitHandler = async(updatedRecipeForm) =>{
    try {
      const res = await instance.patch(`/recipes/update-recipe/${id}`,updatedRecipeForm);
      console.log(res.data)
      toast.success(res?.data?.message)
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message)
    }

  }

  const FavHandler = async() => {
    try {
      const res = await instance.post(`/users/fav-recipe/${id}`);
  
      console.log(res.data);
      setFav(prev => res.data)
      toast.success(res?.data?.message)
      console.log(fav);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  const UnFavHandler = async() => {
    try {
      const res = await instance.post(`/fav-recipe-rem/${id}`)
  
      console.log(res.data);
      setFav("");
      toast.success(res?.data?.message)
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

  };

  // console.log(fav);

  
const DeleteHandler = async() => {
  try {
    const res = await instance.delete(`/users/delete-recipe/${id}`);
    toast.success("recipe deleted successfully")
  } catch (error) {
    toast.error("something went wrong!")
  }
    
};


// console.log(fav);


  
  return recipe ? (<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}   className='flex flex-col lg:flex-row justify-center lg:gap-72 mt-5'>
    {/* details about the recipe */}
    <motion.div 
    initial={{x:-50}} animate={{x:0}} transition={{duration:1}}
    className='flex flex-col  lg:w-1/3 ml-5 gap-5 shadow p-5 relative'>
    {user && (<div>
        {user.favRecipes.find((f) =>
        f._id === id
      ) ? (
         <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={UnFavHandler}
      viewBox="0 0 24 24"
      className={'w-6 h-6 transition-all duration-300 text-red-500 scale-110'}
      fill={"none"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
      ) : (
         <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={FavHandler}
      viewBox="0 0 24 24"
      className={'w-6 h-6 transition-all duration-300  text-gray-400 hover:text-red-300'}
      fill= "currentColor" 
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
      )}
      </div>) }  
      <img src={recipe.imageUrl} className='h-72 object-cover' />
      <p className='text-5xl font-black '>{recipe.title}</p>
      <p className='text-2xl font-bold text-red-500'>{recipe.chef}</p>

      <p className='text-lg font-semibold'>ingredients</p>
      <p>{recipe.ingredients}</p>
      <p className='text-lg font-semibold'>description</p>
      <p>{recipe.description}</p>
      <p className='text-lg font-semibold'>instruction</p>
      {recipe.instructions}
    </motion.div>

    {/* form to update the recipe or delete also */}

   {user && (<div>
      {user.isAuthor && (<motion.form
    initial={{x:50}} animate={{x:0}} transition={{duration:1}}
     onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col m-8  gap-7 border p-12 lg:w-1/3 rounded shadow '>
      <h1 className='text-center text-3xl font-black pb-5'>Update Your Recipe</h1>

      <input type="text"
        placeholder='image url '
        {...register('imageUrl')}
        className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' />

      <input type="text"
        placeholder='title '
        {...register('title')}
        className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' />

      <input type="text"
        placeholder='chef'
        {...register('chef')}
        className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' />

      <textarea placeholder='recipe instructions' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600'{...register('instructions')}  ></textarea>
      <textarea placeholder='recipe ingredients' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('ingredients')} ></textarea>
      <textarea placeholder='description' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('description')} ></textarea>

      <select name="category" className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' {...register('category')} >
        <option value="1st meal">breakfast</option>
        <option value="2nd meal">Lunch</option>
        <option value="3rd meal">Dinner</option>
      </select>

      <div className='flex items-center justify-center gap-12'>
        <button className='px-3 py-1.5 text-lg cursor-pointer text-center text-white bg-green-500 rounded  hover:outline hover:text-green-500 hover:bg-white'>Update</button>
        <button onClick={DeleteHandler} className='px-3 py-1.5 text-lg cursor-pointer text-center text-white bg-red-500 rounded  hover:outline hover:text-red-500 hover:bg-white'>Delete</button>

      </div>
    </motion.form>)}
    </div>)}
  </motion.div>) : ('...........Loading')
}

export default SingleRecipe