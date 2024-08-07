import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DetailsMeal from "../DetailsMeal";
import DetailsCocktail from "../DetailsCocktail";

function Details() {
  const [searchParam] = useSearchParams();
  const idMeal = searchParam.get("mealId");
  const idDrink = searchParam.get("drinkId");


  const [details, setDetails] = useState();

  useEffect(
    function () {
      async function FetchMeals() {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const { meals } = await res.json();
        setDetails(meals);
      }
      FetchMeals();
    },
    [idMeal]
  );

  const [detailsCocktail, setDetailsCocktail] = useState();
  console.log(detailsCocktail);

  useEffect(
    function () {
      async function FetchDrinks() {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        );
        const { drinks } = await res.json();
        setDetailsCocktail(drinks);
      }
      FetchDrinks();
    },
    [idDrink]
  );

  if (details) {
    return (
      <DetailsMeal
        details={details}
      />
    );
  }
  if (detailsCocktail) {
    return (
      <DetailsCocktail
        detailsCocktail={detailsCocktail}
      />
    );
  }
}
  


export default Details;
