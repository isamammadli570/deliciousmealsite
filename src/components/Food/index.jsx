import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  getExampleMeal,
  getStarterMeals,
} from "../../services/mealApi/mealMain";

function Food() {
  const { data: meal } = useQuery({
    queryKey: ["meals"],
    queryFn: () => getStarterMeals(),
  });

  const { data: exampleMeal } = useQuery({
    queryKey: ["exampleMeals"],
    queryFn: () => getExampleMeal(),
  });

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1
        className="text-orange-500 font-bold
      text-4xl text-center"
      >
        Top Starter Meals
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4  ">
        {meal?.map((meal) => (
          <div
            key={meal.idMeal}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer "
          >
            <Link to={`/${meal.idMeal}?mealId=${meal.idMeal}`}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="md:w-[400px] md:h-[400px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{meal.strMeal}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    $$
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl md:m-[100px] border shadow-2xl ">
        {exampleMeal?.map((meal) => {
          return (
            <div
              className="flex justify-evenly flex-wrap p-[30px]"
              key={meal.idMeal}
            >
              <div className="max-w-lg min-w-72 overflow-hidden m-[25px] ">
                <img
                  className="w-[100rem] h-[100rem] max-h-96 block object-cover"
                  src={meal.strMealThumb}
                  alt=""
                />
              </div>
              <div className="max-w-lg min-w-72 m-[25px]">
                <div className="mb-[15px] ">
                  <h2 className="text-4xl text-gray-700">{meal.strMeal}</h2>
                  <p className="text-green-800 py-1">
                    {meal.strCategory} / {meal.strArea}
                  </p>
                  <p className="py-4 text-sm">{meal.strInstructions}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Food;
