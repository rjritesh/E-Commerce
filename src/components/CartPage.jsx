import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../utils/cartSlice"

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) return <p className="text-center mt-10">Your cart is empty 🛒</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 text-white">
      <h2 className="text-2xl mb-4">Your Cart</h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-gray-700 p-3 rounded mb-3"
        >
          <p>{item.title}</p>
          <p>₹{item.price} × {item.quantity}</p>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={() => dispatch(clearCart())}
        className="bg-yellow-500 px-4 py-2 rounded mt-3"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartPage;
