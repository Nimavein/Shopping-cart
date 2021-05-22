import React from "react";
import { useGlobalContext } from "./context";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import ItemNumberForm from "./ItemNumberForm";

const CartItem = ({ id, name, img, inCartAmount, price }) => {
  const { increaseItemAmount, decreaseItemAmount } = useGlobalContext();
  return (
    <div>
      {inCartAmount > 0 && (
        <div className="cart-item">
          <img className="in-cart-img" src={img} />
          <div className="cart-item-info">
            <p className="in-cart-name">{name}</p>
            <p className="in-cart-price">${price}</p>
            <div className="in-cart-amount-section">
              <button
                className="amount-button"
                onClick={() => decreaseItemAmount(id)}
              >
                <FaMinus className="amount-button-icon" />
              </button>
              <p className="in-cart-amount-number">{inCartAmount}</p>
              {/*<ItemNumberForm inCartAmount={inCartAmount}  /> */}
              <button
                className="amount-button"
                onClick={() => increaseItemAmount(id)}
              >
                <FaPlus className="amount-button-icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
