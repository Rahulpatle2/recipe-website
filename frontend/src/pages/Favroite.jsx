import { useContext } from "react";
import RecipeTemplate from "../components/RecipeTemplate";
import RecipeContext from "../context/RecipeContext";

const Favroite = () => {
    const { fav ,setfav } = useContext(RecipeContext);


    const favrender = fav.map((f) => (<RecipeTemplate key={f.id} recipe={f} />));

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 px-3 pb-10 ">
            {fav.length > 0 ? favrender : "Recipe Not found..."}
        </div>
    );
};

export default Favroite;