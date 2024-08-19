import "./Featured.css";
import { Link } from "react-router-dom";

// import images
import psImg from "../../assets/ps.png";
import collectionImg from "../../assets/collection.png";
import speakersImg from "../../assets/speakers.png";
import perfumeImg from "../../assets/perfume.png";

const Featured = () => {
  return (
    <section className="featured container">
      <h3 className="title">
        <span></span> Featured
      </h3>
      <h1 className="subtitle">New Arrival</h1>

      <div className="featured-container">
        <div className="left">
          <div className="featured-content ps">
            <img src={psImg} alt="Play Station 5" />
            <div className="text">
              <h3>PlayStation 5</h3>
              <p>Black and White version of the PS5 <br />coming out on sale.</p>
              <Link to="/">Shop Now</Link>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="featured-content collection">
            <img src={collectionImg} alt="women's collection" />
            <div className="text">
              <h3>Women’s Collections</h3>
              <p>Featured woman collections that give <br />you another vibe.</p>
              <Link to="/">Shop Now</Link>
            </div>
          </div>

          <div className="featured-content speakers">
            <img src={speakersImg} alt="speakers" />
            <div className="text">
              <h3>Speakers</h3>
              <p>Amazon wireless speakers</p>
              <Link to="/">Shop Now</Link>
            </div>
          </div>

          <div className="featured-content perfume">
            <img src={perfumeImg} alt="perfume" />
            <div className="text">
              <h3>Perfume</h3>
              <p>GUCCI INTENSE OUD EDP</p>
              <Link to="/">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
