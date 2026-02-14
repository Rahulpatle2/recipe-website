import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Recipes from '../pages/Recipes'
import Favroite from '../pages/Favroite'
import About from '../pages/About'

import SingleRecipe from '../pages/SingleRecipe'
import Layout from '../pages/Layout'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import AuthContext from '../context/AuthContext'



const MainRoutes = () => {
  const {user} = useContext(AuthContext)
  return (

    <>

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path='recipes' element={<Recipes />} ></Route>
          {user?.isAuthor && <Route path='create-recipe' element={<Create />} ></Route>}
          <Route path='recipes/details/:id' element={<SingleRecipe />}></Route>
         { (user || !user?.isAuthor) && (<Route path='favorite' element={<Favroite />} ></Route>)}
          <Route path='about' element={<About />} ></Route>
          <Route path='signup' element={<SignUp/>} ></Route>
          <Route path='login' element={<Login/>}></Route>
          
          
        </Route>

      </Routes>
    </>
  )
}

export default MainRoutes