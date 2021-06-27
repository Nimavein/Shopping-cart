import React from "react";
import { useGlobalContext } from "./context";

const ShopItem = ({ id, name, price, img, inCartAmount }) => {
  const { addItemToCart } = useGlobalContext();

  return (
    <div className="shop-item-container">
      <img className="shop-img" alt="product" src={img} />
      <div className="item-info">
        <p>{name}</p>
        <p>${price}</p>
        {inCartAmount < 1 && (
          <button
            className="add-to-cart-button"
            onClick={() => addItemToCart(id)}
          >
            Add to cart
          </button>
        )}
        {inCartAmount > 0 && (
          <button
            className="add-to-cart-button disabled-button"
            disabled
            onClick={() => addItemToCart(id)}
          >
            Already in cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ShopItem;
