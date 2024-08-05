import React, { useState } from "react";
import { FaBars, FaHeart, FaWallet, FaUserFriends } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import {
  FaCartShopping,
  FaCircleQuestion,
  FaCircleArrowDown,
} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { IoTicket } from "react-icons/io5";

const menu = [
  {
    id: "1",
    icon: <TbTruckDelivery size={20} />,
    name: "Orders",
  },
  {
    id: "2",
    icon: <FaHeart size={20} />,
    name: "Favorites",
  },
  {
    id: "3",
    icon: <FaWallet size={20} />,
    name: "Wallet",
  },
  {
    id: "4",
    icon: <FaCircleQuestion size={20} />,
    name: "Help",
  },
  {
    id: "5",
    icon: <IoTicket size={20} />,
    name: "Promotions",
  },
  {
    id: "6",
    icon: <FaCircleArrowDown size={20} />,
    name: "Best One",
  },
  {
    id: "7",
    icon: <FaUserFriends size={20} />,
    name: "Invite Friens",
  },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div
      className="max-w-[1640px] flex mx-auto justify-between
    items-center p-4"
    >
      {/* sol hisse */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <FaBars size={30} />
        </div>
        <h1 className="text-2xl px-2 sm:text-3xl lg:text-4xl">
           Delici<span className="font-bold">ous</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 ">
          <p className="bg-black text-white rounded-full p-2 ">Delivery</p>
          <p>Pickup</p>
        </div>
      </div>
      {/* input hissesi */}
      <div
        className="bg-gray-200 flex items-center w-[200px] px-2 rounded-full
      sm:w-[400px] lg:w-[500px]"
      >
        <CiSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none "
          placeholder="Search foods.."
          type="text"
        />
      </div>
      {/* order hissesi */}
      <button className="bg-black text-white p-2 rounded-full hidden md:flex items-center px-2">
        <FaCartShopping size={20} />
        <p className="px-1">Order</p>
      </button>

      {/* mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <IoMdClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Delici<span className="font-bold">ous</span>
        </h2>
        <nav>
          <ul className="p-2">
            {menu.map((menu) => {
              return (
                <li key={menu.id} className="flex items-center px-2 py-3">
                  <p>{menu.icon}</p>
                  <p className="px-2">{menu.name}</p>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
