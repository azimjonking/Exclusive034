import "./Home.css";
import MainSection from "../../components/mainSection/MainSection";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";
import ThisMonth from "../../components/thisMonth/ThisMonth";
import Categories from "../../components/categories/Categories";
import FlashSales from "../../components/flashSales/FlashSales";
import OurProducts from "../../components/ourProducts/OurProducts";
function Home({
  flashSalesData,
  categoryData,
  bestProductsData,
  productsData,
}) {
  return (
    <div>
      <MainSection />
      <FlashSales flashSalesData={flashSalesData} />
      <Categories categoryData={categoryData} />
      <ThisMonth bestProductsData={bestProductsData} />
      <OurProducts productsData={productsData} />
      <Featured />
      <Services />
    </div>
  );
}

export default Home;
