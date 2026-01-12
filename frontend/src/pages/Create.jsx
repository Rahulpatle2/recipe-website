import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RecipeContext from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import instance from '../config/config'
import AuthContext from '../context/AuthContext'



const Create = () => {

  const {data,setData} = useContext(RecipeContext)
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(data)
  console.log(user?.isAuthor);

  const {
    register,
    handleSubmit,
    reset

  } = useForm()

  const SubmitHandler = async(formData) => { 
    try {
       const res = await instance.post('/recipes/create-recipe',formData);
  
       console.log(res.data);
       setData(prev => [...prev,res?.data?.recipe]);
       toast.success(res?.data?.message);
       navigate('/recipes')
    } catch (error) {
      toast.error(error.response?.data?.message)
    }

     
  }

  // console.log(SubmitHandler);
  // console.log(data);
  return (
    <div className='w-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col  gap-7 border p-12 lg:w-1/3 rounded shadow mt-5'>
        <h1 className='text-center text-3xl font-black pb-5'>Create Your Recipe</h1>

        <input type="text"
          placeholder='image url '
          {...register('imageUrl')}
          className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' />

        <input type="text"
          placeholder='tittle '
          {...register('title')}
          className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' />

        <input type="text"
          placeholder='chef'
          {...register('chef')}
          className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' />

        <textarea name="inst" placeholder='recipe instructions' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600'{...register('instructions')}  ></textarea>
        <textarea name="ing" placeholder='recipe ingredients' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('ingredients')} ></textarea>
        <textarea name="desc" placeholder='description' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('description')} ></textarea>

        <select name="category" className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' {...register('category')} >
          <option value="1st meal">breakfast</option>
          <option value="2nd meal">Lunch</option>
          <option value="3rd meal">Dinner</option>
        </select>


        <button className='px-3 py-1 bg-green-500 text-white rounded text-center hover:outline hover:outline-green-500 hover:text-green-500 hover:bg-white cursor-pointer'>create</button>

      </form>
    </div>
  )
}

export default Create