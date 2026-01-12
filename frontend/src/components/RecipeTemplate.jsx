import { Link } from "react-router-dom";
import { motion } from "motion/react";

const RecipeTemplate = ({ recipe }) => {
  console.log(recipe)
  return (
    <Link
      to={`/recipes/details/${recipe._id}`}
      className="group flex flex-col w-full  bg-white rounded-xl shadow-sm border border-gray-200  transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gray-300"
    >
      <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden relative bg-gray-100">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={recipe.imageUrl}
          alt={recipe.title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300"></div>
      </div>

      <div className="flex flex-col flex-grow p-3 md:p-4 lg:p-5">
        <h1 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-1 capitalize mb-1 group-hover:text-green-600 transition-colors">
          {recipe.title || recipe.tittle}
        </h1>

        <p className="text-xs md:text-sm text-red-500 font-medium mb-3">
          By {recipe.chef}
        </p>

        <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed flex-grow">
          {recipe.description}
        </p>

        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs md:text-sm font-semibold text-blue-500 group-hover:underline">
            View Recipe
          </span>
          <span className="text-gray-400 text-lg transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeTemplate;