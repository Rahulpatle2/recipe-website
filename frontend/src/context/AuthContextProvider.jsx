import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext';
import instance from '../config/config';

const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState()
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [fav,setFav] = useState([]);

    useEffect(() => {
        const loadUser = async() =>{
            try {
                const res = await instance.get('/users/me');
    
                console.log(res.data);
                setUser(res.data);
                setFav(res.data.favRecipes);
                // setFav(prev =>res.data.favorites)
                setIsAuthenticated(true)
            } catch (error) {
                console.log(error);
                setUser(null);
                setIsAuthenticated(false);
            }
        }
        loadUser()
    },[]);


  return (
    <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated,fav,setFav}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider