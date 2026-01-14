import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import instance from '../config/config.jsx'
import { toast } from 'react-toastify'

const SignUp = () => {
  const navigate = useNavigate();

  const{
    register,
    handleSubmit,
    formState:{errors},
    reset
  } = useForm()
  
  const SubmitHandler = async(formData) =>{
     try {
        const res = await instance.post('/users/signup',formData)
        toast.success(res?.data?.message);
        navigate('/');
     } catch (error) {
        toast.error(error?.response?.data?.message);
     }
    console.log(formData);

  }
  
  return (
    <div className='flex w-full min-h-screen items-center justify-center bg-gray-50 py-10 px-4'>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden'
      >
        
        {/* Left Side - Image (Hidden on small screens) */}
        <div className='hidden lg:block w-1/2 relative'>
          <img 
            src="https://cdn.pixabay.com/photo/2024/06/18/12/13/beef-roast-8837860_1280.jpg "
            alt="Cooking" 
            className='absolute inset-0 w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-green-900/20'></div> {/* Subtle overlay */}
          <div className='absolute bottom-10 left-10 text-white z-10'>
            <h2 className='text-3xl font-bold mb-2'>Join the Journey</h2>
            <p className='text-gray-100'>Start sharing your culinary masterpieces today.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className='w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Create Account</h2>
            <p className='text-gray-500'>Sign up to get started with your daily dishes</p>
          </div>

          <form onSubmit={handleSubmit(SubmitHandler)} className='space-y-5'>
            {/* Username Input */}
            <div>
                <label className='block text-gray-700 text-sm font-medium mb-1'>Username</label>
                <input 
                    type="text" 
                    name="username"
                    {...register("username",{required:true})}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all'
                    placeholder="ChefJohn"
                    required
                />
            </div>

            {/* Email Input */}
            <div>
                <label className='block text-gray-700 text-sm font-medium mb-1'>Email Address</label>
                <input 
                    type="email" 
                    name="email"
                    {...register("email",{required:true})}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all'
                    placeholder="john@example.com"
                    required
                />
            </div>

            {/* Password Input */}
            <div>
                <label className='block text-gray-700 text-sm font-medium mb-1'>Password</label>
                <input 
                    type="password" 
                    name="password"
                   {...register("password",{required:true})}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all'
                    placeholder="••••••••"
                    required
                />
            </div>

            {/* Error Message Display */}
            {/* {errors.password && <p className='text-red-500 text-sm text-center'>{errors.password}</p>} */}

            {/* Submit Button */}
            <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors shadow-md'
            >
                Sign Up
            </motion.button>
          </form>

          {/* Footer Link */}
          <div className='mt-6 text-center text-gray-600 text-sm'>
            Already have an account? {' '}
            <Link to='/login' className='text-green-600 font-semibold hover:underline'>
              Log in
            </Link>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default SignUp