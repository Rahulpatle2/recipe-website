import React, { useContext, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (

    <div className='w-full p-5  lg:flex lg:items-center lg:justify-between '>

      
      {/* logo and hamburger */}
      <div className='w-full lg:w-1/12 flex items-center justify-between '>
        <div className='text-2xl text-green-500 font-bold font-serif text-shadow-2xs'>
          FoodMountain
        </div>
        <div onClick={() => setToggle(!toggle)} className=' lg:hidden'>
          {toggle ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars w-28"></i>)}

        </div>

      </div>


     {/* Navbar */}

      <div>

        <div className='hidden lg:flex gap-10 '>
          <NavLink to='/' className={(e) => e.isActive ? 'text-red-500' : ""} >Home</NavLink>
          <NavLink to='/about' className={(e) => e.isActive ? 'text-red-500' : ""} >About</NavLink>
          <NavLink to='/favorite' className={(e) => e.isActive ? 'text-red-500' : ""}>Favorite</NavLink>
          <NavLink to='/recipes' className={(e) => e.isActive ? 'text-red-500' : ""}>Recipes</NavLink>
        </div>

        
          <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:2}} className={`${toggle ? "flex" : "hidden"} flex-col w-full bg-gray-200 p-5 gap-2`}>
            <NavLink to='/' className={(e) => e.isActive ? 'text-red-500' : ""} >Home</NavLink>
            <NavLink to='/about' className={(e) => e.isActive ? 'text-red-500' : ""} >About</NavLink>
            <NavLink to='/favorite' className={(e) => e.isActive ? 'text-red-500' : ""}>Favorite</NavLink>
            <NavLink to='/recipes' className={(e) => e.isActive ? 'text-red-500' : ""}>Recipes</NavLink>
          </motion.div>
        

      </div>

      <motion.button 
      initial={{ y: 10 }}
  animate={{ y: 0 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
       onClick={() => navigate('recipes/create-recipe')} className='cursor-pointer hidden lg:block px-2.5 py-1.5 rounded-md bg-blue-500 text-white shadow hover:border-blue-500 hover:text-blue-500 hover:bg-white '>Create</motion.button>
    </div>
  )
}

export default Navbar