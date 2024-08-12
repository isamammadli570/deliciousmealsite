const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export async function getMealsApi() {
  const res = await fetch(`${BASE_URL}search.php?s=`);
  const { meals } = await res.json();
  return meals;
}

export async function getStarterMeals() {
  const res = await fetch(`${BASE_URL}filter.php?c=Starter`);
  const { meals } = await res.json();
  return meals;
}

export async function getExampleMeal() {
  const res = await fetch(`${BASE_URL}lookup.php?i=52771`);
  const { meals } = await res.json();
  return meals;
}
