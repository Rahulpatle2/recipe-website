import RecipeTemplate from '../components/RecipeTemplate';
import { useDataHook } from '../hooks/useDataHook';



const Recipes = () => {
  const {data} = useDataHook();
  console.log(data)
 
  const recipeRender = data.map((recipe) => 
    <RecipeTemplate key={recipe._id} recipe={recipe} />
  )

  // console.log(recipeRender);
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gird gap-3 h-auto px-3 pb-10' >
      
        {data.length > 0 ? recipeRender : <h1 className='text-2xl text-center mt-10'>No Recipes Found</h1>}
    
    </div>
  )
}

export default Recipes