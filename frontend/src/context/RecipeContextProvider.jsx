import React, { useEffect, useState } from 'react'
import RecipeContext from './RecipeContext';
import instance from '../config/config';
import LoadingSpinner from '../components/LoadingSpinner';

const RecipeContextProvider = ({children}) => {
    const [data,setData] = useState([]);
    
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() =>{
       const fetchData = async() =>{
         try {
          setIsLoading(true);
          const res = await instance.get('/recipes/')
          console.log(res.data)
          setData(prev => res?.data);
         } catch (error) {
          
           console.log(error.response?.data?.message);
         }
       }
       
       fetchData();
       setIsLoading(false)
    },[]);

    if(isLoading){
      return <LoadingSpinner/>
    }
    console.log(data)
  return (
    <RecipeContext.Provider value={{data,setData}}>
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider