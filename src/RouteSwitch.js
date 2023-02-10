import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./styles/style.css";
const RouteSwitch = () => {
  const [weapons, setWeapons] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((res) => res.json())
      .then((data) => setWeapons(data.data))
      .catch((err) => console.error(err));
  }, []);

  const HandleClick = (key, value, image) => {
    console.log("you clicked", key);

    if (cart.some((obj) => key === obj.name)) {
      setCartCounter(cartCounter + 0);
    } else {
      setCartCounter(cartCounter + 1);
    }

    console.log(cart);
    const index = cart.findIndex((item) => item.name === key);
    if (index === -1) {
      setCart([...cart, { name: key, price: value, photo: image, quantity: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[index].quantity++;
      updatedCart[index].price += value;
      setCart(updatedCart);
    }
  };
  console.log(cart);

  return (
    <>
      <HashRouter basename="/">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                weapons={weapons}
                setWeapons={setWeapons}
                cart={cart}
                setCart={setCart}
                cartCounter={cartCounter}
                setCartCounter={setCartCounter}
                HandleClick={HandleClick}
              />
            }
          />
          \
        </Routes>
      </HashRouter>
    </>
  );
};

export default RouteSwitch;
