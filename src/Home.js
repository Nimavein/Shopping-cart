import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-site">
      <div className="home-content">
        <h1 className="home-heading"> Apple Store</h1>
        <p className="home-under-heading">Buy all the Apple products</p>

        <Link to="/shop" className="react-link">
          <button className="go-to-shop-button">Go to shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
