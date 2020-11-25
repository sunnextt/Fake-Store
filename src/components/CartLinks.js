import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




export default function CartLink() {

      const cart = useSelector((state) => state.cart);
      const { cartItems } = cart;

  return (
    <div className="cart-link-container">
      <Link to="/cart">cart</Link>
      <span className="cart-link-total">
        {cartItems.reduce((a, c) => a + parseInt(c.qty), 0)}
      </span>
    </div>
  );
}
