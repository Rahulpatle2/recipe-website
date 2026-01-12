import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext';
import instance from '../config/config';

const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState()
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    useEffect(() => {
        const loadUser = async() =>{
            try {
                const res = await instance.get('/users/me');
    
                console.log(res.data);
                setUser(res.data);
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
    <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider