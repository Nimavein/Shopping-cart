import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const ItemNumberForm = ({ inCartAmount }) => {
  const { calculateCartTotalCost } = useGlobalContext();
  const [amount, setAmount] = useState(inCartAmount);

  useEffect(() => {
    inCartAmount = amount;
    calculateCartTotalCost();
    console.log(inCartAmount);
  }, [amount]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="cart-form"
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default ItemNumberForm;
