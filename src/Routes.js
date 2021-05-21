import React, { memo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";
import CartContainer from "./CartContainer";

const Routes = () => {
  const { isCartOpen } = useGlobalContext();
  return (
    <BrowserRouter>
      {isCartOpen && <CartContainer />}
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
