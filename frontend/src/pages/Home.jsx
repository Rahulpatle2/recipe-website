import React from 'react'
import HomePageImage1 from '../assets/home-page-img1.avif'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate();
  return (
    <div className='flex w-full flex-col items-center gap-10 pb-10'>
      
      <div className='w-full flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:px-12 lg:py-10 gap-10'>
        
        <motion.div 
        initial={{opacity:0,x:-30}} 
        animate={{opacity:1,x:0}} 
        transition={{duration:2}}
        className='flex flex-col lg:w-1/2 items-center lg:items-start gap-6 px-6 lg:px-0'>
          <h1 className='text-4xl md:text-5xl font-bold uppercase text-center lg:text-start leading-tight'>
            Your Daily Dish <br /> A <span className='text-red-500'>Food</span> Journey
          </h1>
          <p className='text-base text-gray-600 text-center lg:text-start max-w-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt hic tempore, dolor, quasi quae similique vel atque illo tempora, totam quia ducimus aut saepe sunt.
          </p>

          <div className='flex items-center gap-4 mt-2'>
            <button onClick={() => navigate('/login')} className='bg-gray-200 text-gray-800 px-6 py-2 rounded font-medium transition-colors duration-300 hover:bg-gray-300'>
              Log in
            </button>
            <button onClick={() => navigate('/signup')} className='bg-green-500 text-white px-6 py-2 rounded font-medium transition-all duration-300 border border-transparent hover:bg-white hover:text-green-500 hover:border-green-500'>
              Sign up
            </button>
          </div>
        </motion.div>

        <motion.div
        initial={{opacity:0,x:30}} 
        animate={{opacity:1,x:0}} 
        transition={{duration:2}}
         className='w-full lg:w-1/2 px-4 lg:px-0'>
          <img 
            src={HomePageImage1} 
            alt="Food Journey" 
            className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-lg' 
          />
        </motion.div>
      </div>

      <motion.div 
      initial={{opacity:0}}
          transition={{duration:3}}
          whileInView={{opacity:1}}
      className='flex flex-col items-center justify-center p-8 gap-5 text-center bg-gray-50 w-full'>
        <h3 className='text-3xl font-black text-gray-800'>Share Your Recipes</h3>
        <p className='text-base text-gray-600 max-w-2xl font-light'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo maiores atque corporis eum, officia quasi rem alias perspiciatis, quo harum, ea dolores? Hic.
        </p>
        <Link to='/recipes/create-recipe'>
          <motion.button 
          initial={{opacity:0 ,y:50,scale:1}}
          transition={{duration:1}}
          whileInView={{opacity:1,y:0}}
          whileHover={{scale:1.2,transition:0.3}}
           className='bg-green-500 text-white px-6 py-2 rounded font-medium transition-all duration-300 border border-transparent hover:bg-white hover:text-green-500 hover:border-green-500 shadow-md'>
            Create Recipe
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Home