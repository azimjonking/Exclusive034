import "./MainSection.css";
import { FaAngleRight } from "react-icons/fa6";

const MainSection = () => {
  return (
    <section className="home-main container">
      <div className="category-list">
        <ul>
          <li>
            <span>Woman’s Fashion</span> <FaAngleRight />
            <ul>
              <li>Hat</li>
              <li>T-Shirt</li>
              <li>Shoes</li>
              <li>Other</li>
            </ul>
          </li>
          <li>
            <span>Men’s Fashion</span> <FaAngleRight />
            <ul>
              <li>Hat</li>
              <li>T-Shirt</li>
              <li>Shoes</li>
              <li>Other</li>
            </ul>
          </li>
          <li>
            <span>Electronics</span>
          </li>
          <li>
            <span>Home & Lifestyle</span>
          </li>
          <li>
            <span>Medicine</span>
          </li>
          <li>
            <span>Sports & Outdoor</span>
          </li>
          <li>
            <span>Baby’s & Toys</span>
          </li>
          <li>
            <span>Groceries & Pets</span>
          </li>
          <li>
            <span>Health & Beauty</span>
          </li>
        </ul>
      </div>
      <div className="slide">
        <h1>Slide</h1>
      </div>
    </section>
  );
};

export default MainSection;
