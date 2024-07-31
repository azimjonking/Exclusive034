import "./Statistics.css";

const Statistics = () => {
  return (
    <section className='container statistics'>

      <div className="content">
        <div className="icon-div">
          <div className="icon-border">
            <img src="./src/assets/icon_shop.png" alt="shop icon" />
          </div>
        </div>
        <h3 className="count">10.5k</h3>
        <p>Sallers active our site</p>
      </div>

      <div className="content">
        <div className="icon-div">
          <div className="icon-border">
            <img src="./src/assets/Icon-Sale.png" alt="sale icon" />
          </div>
        </div>
        <h3 className="count">33k</h3>
        <p>Mopnthly Produduct Sale</p>
      </div>

      <div className="content">
        <div className="icon-div">
          <div className="icon-border">
            <img src="./src/assets/Icon-Shopping bag.png" alt="shopping bag icon" />
          </div>
        </div>
        <h3 className="count">45.5k</h3>
        <p>Customer active in our site</p>
      </div>

      <div className="content">
        <div className="icon-div">
          <div className="icon-border">
            <img src="./src/assets/Icon-Moneybag.png" alt="money bag icon" />
          </div>
        </div>
        <h3 className="count">25k</h3>
        <p>Anual gross sale in our site</p>
      </div>

    </section>
  );
};

export default Statistics;
