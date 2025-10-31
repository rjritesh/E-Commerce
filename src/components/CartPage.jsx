import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../utils/cartSlice";
import { GiShoppingCart } from "react-icons/gi";

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <div className="bg-white dark:bg-zinc-800 p-10 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-700">
          <GiShoppingCart className="text-6xl text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Your cart is empty
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Add some products to make it happy!
          </p>
        </div>
      </div>
    );


  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl"
              />
              <div>
                <h3 className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-blue-500 dark:text-blue-400 font-semibold">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="mt-4 sm:mt-0 bg-red-600/90 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6 rounded-2xl shadow-sm">
        <div className="flex justify-between text-lg font-medium mb-4">
          <span>Total:</span>
          <span className="text-blue-500 dark:text-blue-400 font-semibold">
            ${total.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => dispatch(clearCart())}
            className="flex-1 bg-amber-500/90 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Clear Cart
          </button>
          <button
            className="flex-1 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
