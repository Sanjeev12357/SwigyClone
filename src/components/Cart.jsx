import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1 className="cart-items">Cart Items - {cartItems.length}</h1>
      <h2>Total Price: Rupees {totalPrice / 100}</h2>
      <button className="cart-btn" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="menu-items-list">
        {cartItems.map((item, index) => (
          <div key={item.id}>
            <FoodItem {...item} />
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
