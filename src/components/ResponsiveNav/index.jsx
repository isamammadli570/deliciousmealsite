import React from "react";
import { IoMdClose } from "react-icons/io";
import { GiHotMeal } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCocktail, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const menu = [
  {
    id: "1",
    icon: <FaCocktail size={20} />,
    name: "Cocktails",
    link: "/cocktails",
  },
  {
    id: "2",
    icon: <GiHotMeal size={20} />,
    name: "Meals",
    link: "/meals",
  },
  {
    id: "3",
    icon: <TbTruckDelivery size={20} />,
    name: "Orders",
    link: "/cart",
  },
  
];

function ResponsiveNav({ isOpen, setIsOpen }) {
  return (
    <div className="p-4">
      <IoMdClose
        onClick={() => setIsOpen((open) => !open)}
        size={30}
        className="absolute right-4 top-4 cursor-pointer"
      />
      <h2 className="text-3xl p-4">
        Delici<span className="font-bold">ous</span>
      </h2>
      <nav className="p-6">
        <ul className="p-4">
          {menu.map((menu) => {
            return (
              <li
                key={menu.id}
                className="flex items-center px-2 py-8  text-xl"
              >
                <p>{menu.icon}</p>
                <NavLink to={menu.link} className="px-2">
                  {menu.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="py-32">
          <p className="text-sm text-zinc-500 mt-40">
            @copyright 2024 made by Isa Mammadli
          </p>
        </div>
      </nav>
    </div>
  );
}

export default ResponsiveNav;
