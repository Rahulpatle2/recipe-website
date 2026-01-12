import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white pt-12 pb-8 w-full'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        
        {/* Top Section: Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          
          {/* Column 1: Branding */}
          <div className='flex flex-col gap-4'>
             <div className='text-2xl text-green-500 font-bold font-serif text-shadow-2xs'>
          FoodMountain
        </div>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Discover delicious recipes and share your own culinary masterpieces with the world. Your journey to better food starts here.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-semibold text-white'>Explore</h3>
            <ul className='flex flex-col gap-2 text-gray-400 text-sm'>
              <li>
                <Link to="/" className='hover:text-green-500 transition-colors'>Home</Link>
              </li>
              <li>
                <Link to="/recipes" className='hover:text-green-500 transition-colors'>All Recipes</Link>
              </li>
              <li>
                <Link to="/favorite" className='hover:text-green-500 transition-colors'>Favorites</Link>
              </li>
              <li>
                <Link to="/about" className='hover:text-green-500 transition-colors'>About Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-semibold text-white'>Legal</h3>
            <ul className='flex flex-col gap-2 text-gray-400 text-sm'>
              <li>
                <Link to="#" className='hover:text-green-500 transition-colors'>Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className='hover:text-green-500 transition-colors'>Terms of Service</Link>
              </li>
              <li>
                <Link to="#" className='hover:text-green-500 transition-colors'>Cookie Policy</Link>
              </li>
              <li>
                <Link to="#" className='hover:text-green-500 transition-colors'>Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-semibold text-white'>Stay Updated</h3>
            <p className='text-gray-400 text-sm'>Subscribe to get the latest recipes right in your inbox.</p>
            <form className='flex flex-col gap-2 mt-2'>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className='px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500 text-sm'
              />
              <button className='bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors'>
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 my-8'></div>

        {/* Bottom Section: Copyright */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-center'>
          <p className='text-gray-500 text-sm'>
            &copy; {new Date().getFullYear()} DailyDish. All rights reserved.
          </p>
          <div className='flex gap-4 text-gray-500 text-sm'>
            <span className='cursor-pointer hover:text-white transition-colors'>Instagram</span>
            <span className='cursor-pointer hover:text-white transition-colors'>Twitter</span>
            <span className='cursor-pointer hover:text-white transition-colors'>Facebook</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer