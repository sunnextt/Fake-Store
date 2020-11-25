import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import CartScreen from "./screens/cartScreen";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import CartLink from "./components/CartLinks";
import OrderScreen from "./screens/OrderScreen";
import SearchBox from "./components/SesrchBox";


function App() {
    const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open");
    };
    const closeMenu = () => {
      document.querySelector(".sidebar").classList.remove("open");
    };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Fake Store</Link>
          </div>
          <Route render={({ history }) => <SearchBox history={history} />} />
          <div className="header-links">
            <CartLink />
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories </h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Men Clothing</a>
            </li>

            <li>
              <a href="index.html">Women Clothing</a>
            </li>
            <li>
              <a href="index.html">Jewelery</a>
            </li>
            <li>
              <a href="index.html">Electronics</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/search/:keyword" component={HomeScreen} exact />
            <Route path="/" exact={true} component={HomeScreen} />{" "}
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
