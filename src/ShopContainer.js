import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import items from "./data";
import ShopItem from "./ShopItem";

const ShopContainer = () => {
  const { items, filterByCategory, categories } = useGlobalContext();

  return (
    <div className="shop-container">
      <div className="categories-buttons">
        <h2 className="categories-heading">Categories</h2>
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
