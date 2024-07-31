import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
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
      </div>
    </div>
  );
}

export default Navbar;
