import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const ItemNumberForm = ({ inCartAmount, id }) => {
  const {
    calculateCartTotalCost,
    items,
    decreaseItemAmount,
    calculateTotalItemsInCartAmount,
  } = useGlobalContext();
  const [amount, setAmount] = useState(inCartAmount);

  useEffect(() => {
    if (amount < 1 || amount === "") {
      decreaseItemAmount(id);
      setAmount(0);
    }
    items[id - 1].inCartAmount = amount;
    calculateCartTotalCost();
    calculateTotalItemsInCartAmount();
  }, [amount]);

  useEffect(() => {
    setAmount(inCartAmount);
  }, [inCartAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="cart-form"
          type="number"
          name={id}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default ItemNumberForm;
