import { useState } from "react";
import FoodFireLogo from "../Images/swiggy2340.webp";
import { Link, NavLink } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodFireLogo}
      alt="Food Fire Logo"
      title="Food Fire Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const navigate = useNavigate();
  const cartItems=useSelector(store=>store.cart.items);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
          <NavLink to="/cart">
          <div className="cart-icon">
            <i className="fa-solid fa-cart-shopping " ><span className="cart-count">{cartItems.length}</span></i>
          </div>
            </NavLink>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;