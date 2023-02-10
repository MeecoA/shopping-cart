import { useState, useEffect } from "react";
import Cart from "./Cart";
const Shop = () => {
  const [weapons, setWeapons] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((res) => res.json())
      .then((data) => setWeapons(data.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(weapons);

  const HandleClick = (key, value, image) => {
    console.log("you clicked", key);
    setCart([...cart, { name: key, price: value, photo: image }]);
    if (cart.some((obj) => key === obj.name)) {
      setCartCounter((cartCounter += 0));
    } else {
      setCartCounter(cartCounter + 1);
    }
  };
  console.log(cart);
  return (
    <div className="container">
      <div className="shop-wrapper">
        <h1>weapon Shop</h1>
        <Cart cartCounter={cartCounter} cart={cart} />
        <div className="products-container">
          {weapons.map((weapon) => (
            <>
              <div
                key={weapon.displayName}
                defaultValue={weapon.shopData && weapon.shopData.cost}
                className="product"
                onClick={() => {
                  HandleClick(weapon.displayName, weapon.shopData && weapon.shopData.cost, weapon.displayIcon);
                }}
              >
                <div className="add-cart">Add to Cart</div>
                <div className="display-name">
                  {weapon.displayName} | {weapon.shopData && weapon.shopData.category}
                </div>
                <div className="image-container">
                  <img src={weapon.displayIcon} className="product-image"></img>
                </div>
                <div className="price">{weapon.shopData && weapon.shopData.cost}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
