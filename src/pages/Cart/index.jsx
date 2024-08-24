import React, { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";
import CartProducts from "../../components/CartProducts";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart?.map((food) => (
        <CartProducts food={food} key={food}></CartProducts>
      ))}
    </div>
  );
}

export default Cart;