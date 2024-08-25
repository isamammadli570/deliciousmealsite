import React, { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";

function CartProducts({ food }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <div className="flex border md:w-[80rem] px-24 py-10 gap-3 md:m-6">
        <img
          src={food.strMealThumb || food.strDrinkThumb}
          className="md:w-24 md:h-full w-10 h-10"
          alt=""
        />
        <div className="ms-4">
          <h4>{food.strMeal || food.strDrink}</h4>
          <div className="mt-5 text-gray-500">
            <p className="line-clamp-1">{food.strInstructions}</p>
          </div>
          <button
            className="border border-red-500 text-red-500 rounded-md p-1
          hover:bg-red-500 hover:text-white duration-200 mt-2"
            onClick={() =>
              dispatch({ type: "Remove", id: food.idMeal || food.idDrink })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
