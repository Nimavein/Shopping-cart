import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import items from "./data";
import ShopItem from "./ShopItem";

const ShopContainer = () => {
  const { totalItemsInCart, items, filterByCategory, categories } =
    useGlobalContext();
  useEffect(() => {
    console.log("amount changed");
  }, []);

  return (
    <div className="shop-container">
      <div className="categories-buttons">
        {categories.map((category, index) => {
          return (
            <button
              className="category-button"
              key={index}
              onClick={() => {
                filterByCategory(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="all-items-in-shop">
        {items.map((item) => {
          if (item.id) {
            return <ShopItem key={item.id} {...item} />;
          }
        })}
      </div>
    </div>
  );
};

export default ShopContainer;
