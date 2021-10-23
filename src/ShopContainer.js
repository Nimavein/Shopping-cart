import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import ShopItem from "./ShopItem";

const ShopContainer = () => {
  const {
    items,
    filterByCategory,
    categories,
    filteredItemsList,
    setFilteredItemsList,
  } = useGlobalContext();

  useEffect(() => {
    setFilteredItemsList(items);
  }, [items]);

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
        {filteredItemsList.map((item) => {
          if (item.id) {
            return <ShopItem key={item.id} {...item} />;
          }
        })}
      </div>
    </div>
  );
};

export default ShopContainer;
