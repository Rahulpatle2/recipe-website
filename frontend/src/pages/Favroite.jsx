import { useContext } from "react";
import RecipeTemplate from "../components/RecipeTemplate";
import AuthContext from "../context/AuthContext";
import { useDataHook } from "../hooks/useDataHook";

const Favroite = () => {
    const { fav } = useContext(AuthContext);

    const {user} = useContext(AuthContext);
    const {data} = useDataHook();
//   console.log(data)
    const favRender = fav.map((f) => f);
    console.log(favRender)

    console.log(fav.length);
    // console.log(data);
    // const favrender = data.filter((recipe,index) => recipe._id === favRender[index]).map((f,index) => (<RecipeTemplate key={index} recipe={f} />));

    return (
       <div className="grid lg:grid-cols-3 min-h-screen md:grid-cols-2 grid-cols-1 gap-3 m-3">
        {data
        .filter(recipe => favRender.includes(recipe._id) )
        .map((recipe,index) =>(
            <RecipeTemplate key={recipe._id} recipe={recipe} />
        ))}

       {fav.length === 0 && <div className="h-screen lg:w-screen flex items-center justify-center">
           <p className="text-2xl text-green-500">No Recipes Found!</p>
        </div>}
          
       </div>
    );
};

export default Favroite;