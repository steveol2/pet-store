import React, { useContext } from "react";
import { Store, getCartItemCount } from "../Store.jsx";
import { FaShoppingCart } from "react-icons/fa";

const CartBadge = () => {
  const { state } = useContext(Store);
  const itemCount = getCartItemCount(state.cart.cartItems);

  return (
    <div className="relative">
      {/* Replace this placeholder SVG with the actual SVG from the library */}
      <FaShoppingCart className="w-8 h-8 text-gray-600" />

      {itemCount > 0 && (
        <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-500 rounded-full text-white text-xs">
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default CartBadge;
