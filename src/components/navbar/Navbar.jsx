import "./Navbar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart, FaRegUser, FaRegStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { SlLogout } from "react-icons/sl";

function Navbar() {
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div className="navbar container">
      <Link to="/" className="logo">
        Exclusive
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>

      <div className="navbar-btns">
        <form className="navbar-search">
          <input type="text" placeholder="What are you looking for?" />
          <button>
            <FiSearch />
          </button>
        </form>

        <Link to="/wishlist">
          <FaRegHeart className="wishlist-icon" />
        </Link>

        <Link to="/cart">
          <IoCartOutline className="cart-icon" />
        </Link>

        <button
          className={showAccount ? "active" : undefined}
          onClick={() => setShowAccount(!showAccount)}
        >
          <FaRegUser className="user-icon" />

          <div>
            <Link to="/account">
              <FaRegUser className="user-icon" />
              <span>Manage My Account</span>
            </Link>
            <Link to="/account">
              <LuShoppingBag className="user-icon" />
              <span>My Order</span>
            </Link>
            <Link to="/account">
              <MdOutlineCancel className="user-icon" />
              <span>My Cancellations</span>
            </Link>
            <Link to="/account">
              <FaRegStar className="user-icon" />
              <span>My Reviews</span>
            </Link>
            <Link to="/">
              <SlLogout className="user-icon" />
              <span>Logout</span>
            </Link>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
