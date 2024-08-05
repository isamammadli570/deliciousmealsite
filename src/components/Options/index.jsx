import React from "react";

function Options({
  selectedCategory,
  setSelectedCategory,
  selectedArea,
  setSelectedArea,
  categories,
  areas,
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
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          );
        })}
      </select>

      <select
        className="p-[0.25rem] w-[80px] cursor-pointer ml-[0.3rem] 
        border border-black rounded-lg "
        onChange={(e) => setSelectedArea(e.target.value)}
        value={selectedArea}
      >
        {areas?.map((area) => {
          return (
            <option key={area.idArea} value={area.strArea}>
              {area.strArea}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Options;
