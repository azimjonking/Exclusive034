import "./Cart.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="container cart">
      <div className="cart-container">
        <table>
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="img">
                <button className="delete">
                  <ImCross />
                </button>
                <img src="./src/assets/lcdmonitor.png" alt="LCD Monitor" />
                <span>LCD Monitor</span>
              </td>
              <td className="price">$650</td>
              <td>
                <div className="quantity">
                  <span className="count">01</span>
                  <div className="quantity-btns">
                    <button>
                      <FaAngleUp />
                    </button>
                    <button>
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
              </td>
              <td className="subtotal">$650</td>
            </tr>
            <tr>
              <td className="img">
                <button className="delete">
                  <ImCross />
                </button>
                <img src="./src/assets/Gamepad.png" alt="Gamepad Cart Small" />
                <span>H1 Gamepad</span>
              </td>
              <td className="price">$550</td>
              <td>
                <div className="quantity">
                  <span className="count">02</span>
                  <div className="quantity-btns">
                    <button>
                      <FaAngleUp />
                    </button>
                    <button>
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
              </td>
              <td className="subtotal">$1100</td>
            </tr>
          </tbody>
        </table>
        <div className="cart-container__links">
          <Link to="/shop">Return To Shop</Link>
          <button>Update Cart</button>
        </div>
      </div>

      <div className="cart-total">

        <div className="coupon-code">
          <form>
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </form>
        </div>  

        <div className="cart-total__checkout">
          <h3>Cart Total</h3>
          <p>
            <span>Subtotal</span>
            <span>$1750</span>
          </p>
          <p>
            <span>Shipping</span>
            <span>Free</span>
          </p>
          <p>
            <span>Total:</span>
            <span>$1750</span>
          </p>
          <Link to="/checkout">Procees to checkout</Link>
        </div>
        
      </div>
    </section>
  );
};

export default Cart;
