import { Icon } from "@iconify-icon/react";

const Cart = ({ cartCounter }) => {
  return (
    <>
      <div className="container">
        <div className="shop-wrapper">
          <div className="notification">
            <span>
              <Icon icon="ic:outline-shopping-cart" color="white" width="40" height="40" />
            </span>
            <span className="badge">{cartCounter}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
