import React from 'react'
import Navbar from '../../components/Navbar';

function DetailsMeal({details}) {
  return (
    <div>
      <div>
        <Navbar />
        <div className="w-full max-w-7xl md:m-[100px] border shadow-2xl ">
          {details?.map((detail) => {
            return (
              <div
                className="flex justify-evenly flex-wrap p-[30px]"
                key={detail.idMeal}
              >
                <div className="max-w-lg min-w-72 overflow-hidden m-[25px] ">
                  <img
                    className="w-[100rem] h-[100rem] max-h-96 block object-cover"
                    src={detail.strMealThumb}
                    alt=""
                  />
                </div>
                <div className="max-w-lg min-w-72 m-[25px]">
                  <div className="mb-[15px] ">
                    <h2 className="text-4xl text-gray-700">{detail.strMeal}</h2>
                    <p className="text-green-800 py-1">
                      {detail.strCategory} / {detail.strArea}
                    </p>
                    <p className="py-4 text-sm">{detail.strInstructions}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailsMeal