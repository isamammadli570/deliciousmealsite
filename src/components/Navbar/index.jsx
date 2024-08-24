import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/ContextProvider";

function Navbar({ isOpen, setIsOpen }) {
  const { cart } = useContext(CartContext);

  return (
    <div
      className="max-w-[1640px] flex mx-auto justify-between
    items-center p-4"
    >
      {/* sol hisse */}
      <div className="flex items-center">
        <div
          onClick={() => setIsOpen((open) => !open)}
          className="cursor-pointer"
        >
          <FaBarsStaggered size={30} />
        </div>
        <NavLink to="/">
          <h1 className="text-2xl px-2 sm:text-3xl lg:text-4xl">
            Delici<span className="font-bold">ous</span>
          </h1>
        </NavLink>
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
      <Link className="flex" to="/cart">
        <FaCartShopping />
        <sup className="mt-1 text-yellow-900">{`${cart.length}`}</sup>
      </Link>
    </div>
  );
}

export default Navbar;
