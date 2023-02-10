import { Icon } from "@iconify-icon/react";

import { useState } from "react";

const Cart = ({ cartCounter, cart, HandleClick, HandleRemove }) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkoutTotal = cart.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);
  return (
    <>
      <div className="container">
        {console.log(isOpen)}

        <div className="shop-wrapper">
          <div
            className="notification"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span>
              <Icon icon="ic:outline-shopping-cart" color="white" width="40" height="40" />
            </span>
            <span className="badge">{cartCounter}</span>
          </div>
        </div>
      </div>
      <>
        {isOpen && (
          <div className="modal-cart">
            <h2>Shopping Cart</h2>
            <br></br>
            <div className="items-container">
              {cart.map((weapon) => (
                <div className="cart-items">
                  <div key={weapon.name} defaultValue={weapon.price && weapon.price} className="product">
                    <div className="display-name">{weapon.name}</div>
                    <div className="image-container">
                      <img src={weapon.photo} className="product-image"></img>
                    </div>
                    <div>Price: {weapon.price && weapon.price}</div>
                    <div className="quantity-container">
                      <div>Quantity:</div>
                      <div className="add-delete">
                        <Icon
                          icon="carbon:subtract-alt"
                          width="30"
                          height="30"
                          className="ad-icon"
                          onClick={() => {
                            HandleRemove(weapon.name, weapon.price && weapon.price, weapon.photo);
                          }}
                        />

                        <div>{weapon.quantity}</div>
                        <Icon
                          icon="material-symbols:add-circle-outline"
                          width="30"
                          height="30"
                          className="ad-icon"
                          onClick={() => {
                            HandleClick(weapon.name, weapon.price && weapon.price, weapon.photo);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>Checkout: {checkoutTotal}</div>
          </div>
        )}
      </>
    </>
  );
};

export default Cart;
