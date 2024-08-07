import React from "react";

function OptionsCocktail({
  selectedCategory,
  setSelectedCategory,
  selectedAlcoholic,
  setSelectedAlcoholic,
  categories,
  alcoholic,
}) {
  return (
    <div className="pt-1">
      <select
        className="p-[0.25rem] w-[80px] cursor-pointer ml-[0.3rem] 
        border border-black rounded-lg"
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        {categories?.map((category) => {
          return (
            <option
              key={category.idCategory || category.strCategory}
              value={category.strCategory}
            >
              {category.strCategory}
            </option>
          );
        })}
      </select>

      <select
        className="p-[0.25rem] w-[80px] cursor-pointer ml-[0.3rem] 
        border border-black rounded-lg "
        onChange={(e) => setSelectedAlcoholic(e.target.value)}
        value={selectedAlcoholic}
      >
        {alcoholic?.map((alcoholic) => {
          return (
            <option
              key={alcoholic.idAlcoholic || alcoholic.strAlcoholic}
              value={alcoholic.strAlcoholic}
            >
              {alcoholic.strAlcoholic}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default OptionsCocktail;
