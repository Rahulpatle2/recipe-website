import { useContext } from "react"
import RecipeContext from "../context/RecipeContext"
import AuthContext from "../context/AuthContext";

export const useDataHook = () =>{
    const{data,setData} = useContext(RecipeContext);
    const{fav,setFav} = useContext(AuthContext);

    return{
        data,setData,
        fav,setFav
    }
}

