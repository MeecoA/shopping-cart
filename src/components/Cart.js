import { Icon } from "@iconify-icon/react";

import { useState } from "react";

const Cart = ({ cartCounter, cart }) => {
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
            {cart.map((weapon) => (
              <>
                <div key={weapon.name} defaultValue={weapon.price && weapon.price} className="product">
                  <div className="display-name">{weapon.name}</div>
                  <div className="image-container">
                    <img src={weapon.photo} className="product-image"></img>
                  </div>
                  <div>
                    Price: {weapon.price && weapon.price} Quantity: {weapon.quantity}
                  </div>
                </div>
              </>
            ))}
            <div>Checkout: {checkoutTotal}</div>
          </div>
        )}
      </>
    </>
  );
};

export default Cart;
