import "./Detail.css";
import { FaStar } from "react-icons/fa";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { GrPowerCycle } from "react-icons/gr";

const Detail = () => {
  return (
    <section className="detail container">
      <div className="detail-images">
        <div className="images-options">
          <div className="image">
            <img src="../src/assets/console-1.png" alt="image 1" />
          </div>
          <div className="image">
            <img src="../src/assets/console-2.png" alt="image 2" />
          </div>
          <div className="image">
            <img src="../src/assets/console-3.png" alt="image 3" />
          </div>
          <div className="image">
            <img src="../src/assets/console-4.png" alt="image 4" />
          </div>
        </div>
        <div className="show-image">
          <img src="../src/assets/console-5.png" alt="image 5" />
        </div>
      </div>

      <div className="detail-info">

        <h2>Havic HV G-92 Gamepad</h2>

        <div className="detail-reviews">
          <div className="stars">
            <FaStar color="#FFAD33" />
            <FaStar color="#FFAD33" />
            <FaStar color="#FFAD33" />
            <FaStar color="#FFAD33" />
            <FaStar color="#00000025" />
          </div>
          <span>(150 Reviews) |</span>
          <span>In Stock</span>
        </div>
        
        <p className="price">$192.00</p>
        <p className='desc'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
        <div className="line"></div>

        <div className='color'>
          <p>Color:</p>
          <label>
            <input type="radio" name='color' />
            <span className='cornflowerblue'>
              <span></span>
            </span>
          </label>
          <label>
            <input type="radio" name='color' />
            <span className='indianred'>
              <span></span>
            </span>
          </label>
        </div>

        <div className="size">
          <p>Size:</p>
          <label>
            <input type="radio" name='size' />
            <span>XS</span>
          </label>
          <label>
            <input type="radio" name='size' />
            <span>S</span>
          </label>
          <label>
            <input type="radio" name='size' />
            <span>M</span>
          </label>
          <label>
            <input type="radio" name='size' />
            <span>L</span>
          </label>
          <label>
            <input type="radio" name='size' />
            <span>XL</span>
          </label>
        </div>

        <div className='count-div'>
          <div className="count">
            <button className='dec'>
              <FaMinus className='icon' />
            </button>
            <span>1</span>
            <button className='inc'>
              <FaPlus className='icon' />
            </button>
          </div>
          <button className='buynow'>Buy Now</button>
          <button className='wishlist'>
            <FaRegHeart className='icon' />
          </button>
        </div>

        <div className="delivery">

          <div className='fast-delivery'>
            <div className="icon-div">
              <TbTruckDelivery className='icon' />
            </div>
            <div className="info">
              <h3>Free Delivery</h3>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </div>

          <div className='return-delivery'>
            <div className="icon-div">
              <GrPowerCycle className='icon' />
            </div>
            <div className="info">
              <h3>Return Delivery</h3>
              <p>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Detail;
