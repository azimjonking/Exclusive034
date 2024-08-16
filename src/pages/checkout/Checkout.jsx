import "./Checkout.css";
import { FaCheck } from "react-icons/fa6";

const Checkout = () => {
  return (
    <section className="checkout container">
      <h1>Billing Details</h1>

      <form className="checkout-form">
        
        <div className="text-form">
          <div className="form-group">
            <label htmlFor="firstname">
              First Name<span>*</span>
            </label>
            <input type="text" id="firstname" />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input type="text" id="company" />
          </div>

          <div className="form-group">
            <label htmlFor="street">
              Street Address<span>*</span>
            </label>
            <input type="text" id="street" />
          </div>

          <div className="form-group">
            <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
            <input type="text" id="apartment" />
          </div>

          <div className="form-group">
            <label htmlFor="city">
              Town/City<span>*</span>
            </label>
            <input type="text" id="city" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone Number<span>*</span>
            </label>
            <input type="text" id="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email Address<span>*</span>
            </label>
            <input type="email" id="email" />
          </div>

          <label>
            <input type="checkbox" />
            <span className="icon">
              <FaCheck />
            </span>
            <span className="text">
              Save this information for faster check-out next time
            </span>
          </label>
        </div>

        <div className="payment-form">

          <ul className="checkout-items">
            <li>
              <div className="img">
                <img src="./src/assets/lcdmonitor.png" alt="LCD Monitor" />
              </div>
              <p className="item-name">LCD Monitor</p>
              <p className="item-price">$650</p>
            </li>
            <li>
              <div className="img">
                <img src="./src/assets/Gamepad.png" alt="Gamepad Cart Small" />
              </div>
              <p className="item-name">H1 Gamepad</p>
              <p className="item-price">$1100</p>
            </li>
          </ul>

          <div className="checkout-payment">
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
          </div>

          <div className='payment-way'>
            <label>
              <input type="radio" name="payment" />
              <div className="check">
                <span></span>
              </div>
              <span>Bank</span>
              <img src="./src/assets/payment.png" alt="Payment" />
            </label>
            <label>
              <input type="radio" name="payment" checked />
              <div className="check">
                <span></span>
              </div>
              <span>Cash on delivery</span>
            </label>
          </div>

          <div className="coupon">
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>

          <button className="order-btn">Place Order</button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
