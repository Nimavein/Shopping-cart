import React from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import ShopContainer from "./ShopContainer";
import { useGlobalContext } from "./context";

function App() {
  const { isCartOpen } = useGlobalContext();
  return (
    <>
      <ShopContainer />
    </>
  );
}

export default App;
