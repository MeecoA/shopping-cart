import { useState, useEffect } from "react";

const Shop = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((res) => res.json())
      .then((data) => setWeapons(data.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(weapons);

  return (
    <div className="container">
      <div className="shop-wrapper">
        <h1>weapon Shop</h1>
        <div className="products-container">
          {weapons.map((weapon) => (
            <>
              <div key={weapon.uuid} className="product">
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
