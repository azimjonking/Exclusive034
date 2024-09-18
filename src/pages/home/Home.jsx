import "./Home.css";
import MainSection from "../../components/mainSection/MainSection";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";
import ThisMonth from "../../components/thisMonth/ThisMonth";
import Categories from "../../components/categories/Categories";
import FlashSales from "../../components/flashSales/FlashSales";
import OurProducts from "../../components/ourProducts/OurProducts";
function Home() {
  return (
    <div>
      <MainSection />
      <FlashSales />
      <Categories />
      <ThisMonth />
      <OurProducts />
      <Featured />
      <Services />
    </div>
  );
}

export default Home;
