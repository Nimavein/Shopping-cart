import React from "react";
import { useGlobalContext } from "./context";
import CartItem from "./CartItem";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const {
    cart,
    clearCart,
    cartTotalPrice,
    isCartOpen,
    closeCart,
    filterByCategory,
  } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart-container">
        <button
          className="close-cart-button"
          onClick={() => {
            if (isCartOpen) {
              closeCart();
            }
          }}
        >
          <FaTimes className="x-icon" />
        </button>
        <div className="in-cart-container">
          <h1 className="cart-heading">Your shopping cart</h1>
          <p>Cart is empty</p>
        </div>
        <img
          className="empty-cart-img"
          src="https://img.icons8.com/ios/452/shopping-bag--v1.png"
        />

        <Link to="/shop" className="react-link">
          <button
            className="add-to-cart-button clear-all browse-products"
            onClick={() => {
              filterByCategory("all");
              closeCart();
            }}
          >
            Browse products
          </button>
        </Link>
      </section>
    );
  }
  return (
    <section className="cart-container">
      <button
        className="close-cart-button"
        onClick={() => {
          if (isCartOpen) {
            closeCart();
          }
        }}
      >
        <FaTimes className="x-icon" />
      </button>
      <div className="in-cart-container">
        <h1 className="cart-heading">Your shopping cart</h1>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
        <h3>Subtotal: ${cartTotalPrice}</h3>
        <button
          className="add-to-cart-button clear-all"
          onClick={() => clearCart()}
        >
          Clear all
        </button>
      </div>
    </section>
  );
};

export default CartContainer;
