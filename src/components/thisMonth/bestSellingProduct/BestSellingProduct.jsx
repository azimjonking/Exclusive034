import "./BestSellingProduct.css";
import speakerImg from "../../../assets/month-product.png";

const BestSellingProduct = () => {
  return (
    <div className="container">
      <div className="month-product">
        <div className="month-product__info">
          <h4>Categories</h4>
          <h1>Enhance Your Music Experience</h1>
          <div className="month-deadline">
            <div>
              <p>05</p>
              <span>Days</span>
            </div>
            <div>
              <p>23</p>
              <span>Hours</span>
            </div>
            <div>
              <p>59</p>
              <span>Minutes</span>
            </div>
            <div>
              <p>35</p>
              <span>Seconds</span>
            </div>
          </div>
          <button>Buy Now!</button>
        </div>
        <div className="month-product__img">
          <img src={speakerImg} alt="speaker" />
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
