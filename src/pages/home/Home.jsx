import "./Home.css";
import MainSection from "../../components/mainSection/MainSection";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";
import ThisMonth from "../../components/thisMonth/ThisMonth";
import Categories from "../../components/categories/Categories";
import FlashSales from "../../components/flashSales/FlashSales";
function Home({ flashSalesData, categoryData, bestProductsData }) {
  return (
    <div>
      <MainSection />
      <FlashSales flashSalesData={flashSalesData} />
      <Categories categoryData={categoryData} />
      <ThisMonth bestProductsData={bestProductsData} />
      <Featured />
      <Services />
    </div>
  );
}

export default Home;
