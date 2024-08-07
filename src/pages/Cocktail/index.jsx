import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import OptionsCocktail from "../../components/OptionsCocktail";

function Cocktails() {
  const [item, setItem] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Cocktail");
  const [selectedAlcoholic, setSelectedAlcoholic] = useState("Alcoholic");
  const [categories, setCategories] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);

  //? drinks use effect i
  useEffect(
    function () {
      async function FetchDrinks() {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${item}`
        );
        const { drinks } = await res.json();
        setDrinks(drinks);
      }
      FetchDrinks();
    },
    [item]
  );
  //? category use effect i
  useEffect(
    function () {
      async function FetchDataCategory() {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const { drinks } = await res.json();
        setDrinks(drinks);
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
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${selectedAlcoholic}`
        );
        const { drinks } = await res.json();
        setDrinks(drinks);
      }
      FetchDataArea();
    },
    [selectedAlcoholic]
  );
  //? DRINK
  useEffect(function () {
    async function FetchDataSelect() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      const { drinks } = await res.json();
      setCategories(drinks);
    }
    FetchDataSelect();
  }, []);

  useEffect(function () {
    async function FetchDataSelectArea() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`
      );
      const { drinks } = await res.json();
      setAlcoholic(drinks);
    }
    FetchDataSelectArea();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1
          className="text-orange-500 font-bold
      text-4xl text-center"
        >
          Top Drinks
        </h1>

        {/* filter row */}
        <div className="flex flex-col lg:flex-row justify-between ">
          <div>
            <OptionsCocktail
              key={drinks.Idmeal}
              selectedCategory={selectedCategory}
              selectedAlcoholic={selectedAlcoholic}
              setSelectedCategory={setSelectedCategory}
              setSelectedAlcoholic={setSelectedAlcoholic}
              categories={categories}
              alcoholic={alcoholic}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4  ">
          {drinks?.map((drink) => (
            <div
              key={drink.idDrink}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer "
            >
              <Link to={`/${drink.idDrink}?drinkId=${drink.idDrink}`}>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="flex justify-between px-2 py-4">
                  <p className="font-bold">{drink.strDrink}</p>
                  <p>
                    <span className="bg-orange-500 text-white p-1 rounded-full">
                      40$
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Category />
        <Footer />
      </div>
    </div>
  );
}

export default Cocktails;
