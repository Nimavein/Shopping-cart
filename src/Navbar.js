import React, { PureComponent } from "react";
import { useGlobalContext } from "./context";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openCart, closeCart, isCartOpen, totalItemsInCart } =
    useGlobalContext();
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="/" className="react-link">
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/shop" className="react-link">
            Shop
          </Link>
        </li>
      </ul>

      <button>
        {totalItemsInCart}
        <FaShoppingBag
          onClick={() => {
            if (!isCartOpen) {
              openCart();
            }
            if (isCartOpen) {
              closeCart();
            }
          }}
        />
      </button>
    </div>
  );
};

export default Navbar;
