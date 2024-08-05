import React, { useEffect, useState } from "react";
import Options from "../Options";

function Food() {
  const [item, setItem] = useState("");
  const [meals, setMeals] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [selectedArea, setSelectedArea] = useState("American");
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  //? meals use effect i
  useEffect(
    function () {
      async function FetchMeals() {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`
        );
        const { meals } = await res.json();
        console.log(meals);
        setMeals(meals);
      }
      FetchMeals();
    },
    [item]
  );
  //? category use effect i
  useEffect(
    function () {
      async function FetchDataCategory() {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const { meals } = await res.json();
        setMeals(meals);
      }
      FetchDataCategory();
    },
    [selectedCategory]
  );
  //? area use effect i
  useEffect(
    function () {
      async function FetchDataArea() {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`
        );
        const { meals } = await res.json();
        setMeals(meals);
      }
      FetchDataArea();
    },
    [selectedArea]
  );
  //? MEAL
  useEffect(function () {
    async function FetchDataSelect() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const { categories } = await res.json();
      setCategories(categories);
      /* console.log(categories); */
    }
    FetchDataSelect();
  }, []);

  useEffect(function () {
    async function FetchDataSelectArea() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      const { meals } = await res.json();
      setAreas(meals);
    }
    FetchDataSelectArea();
  }, []);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1
        className="text-orange-500 font-bold
      text-4xl text-center"
      >
        Top Rated Menu Items
      </h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* categories */}
        <div>
          <Options
            key={meals.Idmeal}
            selectedCategory={selectedCategory}
            selectedArea={selectedArea}
            setSelectedCategory={setSelectedCategory}
            setSelectedArea={setSelectedArea}
            categories={categories}
            areas={areas}
          />
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 cursor-pointer'>
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{meal.strMeal}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  40$
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
