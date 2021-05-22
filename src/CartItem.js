import React from "react";
import { useGlobalContext } from "./context";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const CartItem = ({ id, name, img, inCartAmount, price }) => {
  const { increaseItemAmount, decreaseItemAmount } = useGlobalContext();
  return (
    <div>
      {inCartAmount > 0 && (
        <div className="cart-item">
          <img className="in-cart-img" src={img} />
          <div className="cart-item-info">
            <p>{name}</p>
            <p>${price}</p>
            <div className="in-cart-amount-section">
              <button
                className="amount-button"
                onClick={() => decreaseItemAmount(id)}
              >
                <FaMinusCircle className="amount-button-icon" />
              </button>
              <p>{inCartAmount}</p>
              <button
                className="amount-button"
                onClick={() => increaseItemAmount(id)}
              >
                <FaPlusCircle className="amount-button-icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
