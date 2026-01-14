import { useContext } from "react";
import RecipeTemplate from "../components/RecipeTemplate";
import AuthContext from "../context/AuthContext";

const Favroite = () => {
    // const { fav ,setfav } = useContext(RecipeContext);

    const {user} = useContext(AuthContext);


    const favrender = user.favRecipes.map((f) => (<RecipeTemplate key={f._id} recipe={f} />));

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 px-3 pb-10 ">
            {user.favRecipes.length > 0 ? favrender : "Recipe Not found..."}
        </div>
    );
};

export default Favroite;