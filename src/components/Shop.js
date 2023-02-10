import Cart from "./Cart";
const Shop = ({ weapons, setWeapons, cart, setCart, cartCounter, setCartCounter, HandleClick }) => {
  return (
    <div className="container">
      <div className="shop-wrapper">
        <h1>weapon Shop</h1>
        <Cart cartCounter={cartCounter} cart={cart} />
        <div className="products-container">
          {weapons.map((weapon, index) => (
            <>
              <div
                key={weapon.displayName}
                defaultValue={weapon.shopData && weapon.shopData.cost}
                className="product"
                onClick={() => {
                  HandleClick(
                    weapon.displayName,
                    weapon.shopData && weapon.shopData.cost,
                    weapon.displayIcon,
                    weapon.index
                  );
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
