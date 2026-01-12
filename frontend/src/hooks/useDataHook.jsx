import { useContext } from "react"
import RecipeContext from "../context/RecipeContext"

export const useDataHook = () =>{
    const{data,setData} = useContext(RecipeContext);
    const{fav,setFav} = useContext(RecipeContext);

    return{
        data,setData
    }
}