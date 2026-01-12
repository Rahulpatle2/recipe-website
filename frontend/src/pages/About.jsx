import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'
// Replace with your actual image path or a placeholder
import AboutImage from '../assets/home-page-img1.avif' 

const About = () => {
  return (
    <div className='w-full min-h-screen bg-white text-gray-800 pb-20'>
      
      {/* 1. Hero Section */}
      <div className='w-full h-[40vh] bg-green-50 relative flex items-center justify-center overflow-hidden'>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='z-10 text-center px-4'
        >
          <h1 className='text-4xl md:text-6xl font-black uppercase tracking-wide text-gray-900 mb-4'>
            Our <span className='text-green-500'>Story</span>
          </h1>
          <p className='text-gray-600 text-lg md:text-xl max-w-2xl mx-auto'>
            Bringing the joy of cooking back to your kitchen, one recipe at a time.
          </p>
        </motion.div>
        
        {/* Decorative background circle */}
        <div className='absolute -bottom-10 -right-10 w-64 h-64 bg-green-200 rounded-full opacity-50 blur-3xl'></div>
        <div className='absolute top-10 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-50 blur-2xl'></div>
      </div>

      {/* 2. Main Content Section */}
      <div className='max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        
        {/* Left: Image with slight hover animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // Animates when you scroll to it
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl'
        >
          <img 
            src={AboutImage} 
            alt="Cooking together" 
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-700' 
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-col gap-6'
        >
          <h2 className='text-3xl font-bold text-gray-900'>
            Why We Started <span className='text-green-500'>DailyDish</span>
          </h2>
          <p className='text-gray-600 leading-relaxed text-lg'>
            It all began with a simple idea: good food shouldn't be complicated. In a world full of fast food and instant meals, we wanted to create a sanctuary for home cooks.
          </p>
          <p className='text-gray-600 leading-relaxed text-lg'>
            Whether you are a seasoned chef or just learning how to boil water, DailyDish is designed to be your companion. We believe that the best memories are made gathered around a table, sharing a meal made with love.
          </p>

          {/* Stats / Features Grid */}
          <div className='grid grid-cols-2 gap-6 mt-4'>
            <div className='p-4 bg-gray-50 rounded-lg border border-gray-100 text-center'>
              <h3 className='text-3xl font-black text-green-500'>500+</h3>
              <p className='text-sm text-gray-500 uppercase font-semibold'>Recipes Shared</p>
            </div>
            <div className='p-4 bg-gray-50 rounded-lg border border-gray-100 text-center'>
              <h3 className='text-3xl font-black text-green-500'>10k+</h3>
              <p className='text-sm text-gray-500 uppercase font-semibold'>Happy Cooks</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Call to Action */}
      <div className='w-full bg-gray-900 text-white py-16 text-center px-4'>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to start cooking?</h2>
          <p className='text-gray-400 max-w-xl mx-auto mb-8 text-lg'>
            Join our community today and discover your next favorite meal.
          </p>
          <Link to='/recipes'>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-green-600 transition-colors'
            >
              Browse Recipes
            </motion.button>
          </Link>
        </motion.div>
      </div>

    </div>
  )
}

export default About