import React from "react";
import { useGlobalContext } from "./context";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const CartItem = ({ id, name, img, inCartAmount, price }) => {
  const { increaseItemAmount, decreaseItemAmount } = useGlobalContext();
  return (
    <div>
      {inCartAmount > 0 && (
        <div>
          <p>price: ${price}</p>
          <p>{name}</p>
          <p>
            {inCartAmount} x ${price} = ${inCartAmount * price}
          </p>
          <div className="in-cart-amount-section">
            <button onClick={() => decreaseItemAmount(id)}>
              <FaMinusCircle />
            </button>
            <p>{inCartAmount}</p>
            <button onClick={() => increaseItemAmount(id)}>
              <FaPlusCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
