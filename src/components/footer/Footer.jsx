import "./Footer.css";
import {Link} from "react-router-dom"
import { LuSendHorizonal } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-subscribe footer-content">
          <a href='/' className='logo'>Exclusive</a>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button>
              <LuSendHorizonal />
            </button>
          </form>
        </div>

        <div className="footer-support footer-content">
          <h3>Support</h3>

          <ul>
            <li>
              <a target="_blank" href="https://www.google.com/maps">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
            </li>
            <li>
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            </li>
            <li>
              <a href="tel:88018888888">+88015-88888-9999</a>
            </li>
          </ul>
        </div>

        <div className="footer-account footer-content">
          <h3>Account</h3>

          <ul>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/login">Login / </Link><Link to="/signup">Register</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <div className="footer-quicklink footer-content">
          <h3>Quick Link</h3>

          <ul>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms Of Use</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-download footer-content">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div>
            <div className="qrcode">
              <img src="./src/assets/qrcode.png" alt="QR Code" />
            </div>
            <div className="app">
              <a href="/">
                <img src="./src/assets/googleplay.png" alt="Google Play" />
              </a>
              <a href="/">
                <img src="./src/assets/appstore.png" alt="App Store" />
              </a>
            </div>
          </div>
          <ul>
            <li>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/">
                <FiTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; Copyright Azimjon King 2024. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
