import React, { useContext, useState } from "react";
import shopItems from "./data";

const AppContext = React.createContext();
const allCategories = [
  "all",
  ...new Set(shopItems.map((shopItem) => shopItem.category)),
];

const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemInCartAmount, setItemInCartAmount] = useState(0);
  const [itemTotalPrice, setItemTotalPrice] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [items, setItems] = useState(shopItems);
  const [cart, setCart] = useState([]);
  const [filteredItemsList, setFilteredItemsList] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [categories, setCategories] = useState(allCategories);

  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredItemsList(shopItems);
      return;
    } else {
      const filteredItems = shopItems.filter(
        (shopItem) => shopItem.category === category
      );
      setFilteredItemsList(filteredItems);
    }
  };

  const clearCart = () => {
    setCart([]);
    items.map((item) => {
      item.inCartAmount = 0;
    });
    setCartTotalPrice(0);
    setTotalItemsInCart(0);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const calculateTotalItemsInCartAmount = () => {
    const newTotalItemsInCart = items.reduce(
      (prev, cur) => prev + parseInt(cur.inCartAmount),
      0
    );
    setTotalItemsInCart(newTotalItemsInCart);
  };

  const calculateCartTotalCost = () => {
    const newTotalPrice = items.reduce(
      (prev, cur) => prev + cur.price * cur.inCartAmount,
      0
    );
    setCartTotalPrice(newTotalPrice);
  };

  const addItemToCart = (id) => {
    items.map((item) => {
      if (item.id === id) {
        calculateCartTotalCost();
        setCart([...cart, item]);
        return (item.inCartAmount = 1);
      }
      setTotalItemsInCart(totalItemsInCart + 1);
    });
  };

  const deleteItemFromCart = () => {
    const newCart = cart.filter((cartItem) => cartItem.inCartAmount !== 0);
    setCart(newCart);
  };

  const increaseItemAmount = (id) => {
    items.map((item) => {
      if (item.id === id) {
        item.inCartAmount += 1;
        calculateCartTotalCost();
      }
      calculateTotalItemsInCartAmount();
    });
  };

  const decreaseItemAmount = (id) => {
    items.map((item) => {
      if (item.id === id) {
        item.inCartAmount -= 1;
        calculateCartTotalCost();
      }
      calculateTotalItemsInCartAmount();
      deleteItemFromCart();
    });
  };

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        itemInCartAmount,
        itemTotalPrice,
        cartTotalPrice,
        items,
        cart,
        totalItemsInCart,
        categories,
        openCart,
        closeCart,
        increaseItemAmount,
        decreaseItemAmount,
        clearCart,
        addItemToCart,
        filterByCategory,
        calculateCartTotalCost,
        deleteItemFromCart,
        calculateTotalItemsInCartAmount,
        filteredItemsList,
        setFilteredItemsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
