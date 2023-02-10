import { Link } from "react-router-dom";
import logo from "./logo.png";
const Nav = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={logo}></img>
            <div>vAlorant Shop</div>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
