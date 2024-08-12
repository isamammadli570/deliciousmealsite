const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

export async function getCocktailsApi() {
  const res = await fetch(`${BASE_URL}search.php?s=`);
  const { drinks } = await res.json();
  return drinks;
}
