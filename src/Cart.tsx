import React from "react";
import { useCart } from "./CartContext";

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <img src={item.image} alt={item.title} className="w-16 h-16" />
              <p>{item.title}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="border px-2 py-1 w-16"
              />
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl font-bold">
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
