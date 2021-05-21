import React from "react";
import { useGlobalContext } from "./context";
import CartItem from "./CartItem";
import { FaTimes } from "react-icons/fa";

const CartContainer = ({ id }) => {
  const { cart, clearCart, cartTotalPrice, isCartOpen, closeCart } =
    useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart-container">
        <button
          onClick={() => {
            if (isCartOpen) {
              closeCart();
            }
          }}
        >
          <FaTimes />
        </button>
        <h1>Empty cart</h1>
      </section>
    );
  }
  return (
    <section className="cart-container">
      <button
        onClick={() => {
          if (isCartOpen) {
            closeCart();
          }
        }}
      >
        <FaTimes />
      </button>
      <h1>Cart</h1>
      {cart.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
      <h3>total price: ${cartTotalPrice}</h3>
      <button onClick={() => clearCart()}>Clear all</button>
    </section>
  );
};

export default CartContainer;
