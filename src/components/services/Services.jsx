import "./Services.css";
const Services = () => {
  return (
    <div className='container services'>

      <div className="content">
        <div className="icon-div">
          <div className="icon-border">
            <img src="./src/assets/icon-delivery.png" alt="delivery icon" />
          </div>
        </div>
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>

      <div className="content">
        <div className="icon-div">
          <div className="icon-border">
            <img src="./src/assets/Icon-Customer service.png" alt="customer service icon" />
          </div>
        </div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>

      <div className="content">
        <div className="icon-div">
          <div className="icon-border">
            <img src="./src/assets/Icon-secure.png" alt="secure icon" />
          </div>
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We reurn money within 30 days</p>
      </div>


    </div>
  );
};

export default Services;
