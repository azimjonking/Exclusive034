import "./Home.css";
import MainSection from "../../components/mainSection/MainSection";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";
import ThisMonth from "../../components/thisMonth/ThisMonth";
import Categories from '../../components/categories/Categories';
function Home({ categoryData, bestProductsData }) {
  return (
    <div>
      <MainSection />
      <Categories categoryData = {categoryData} />
      <ThisMonth
        bestProductsData={bestProductsData}
      />
      <Featured />
      <Services />
    </div>
  );
}

export default Home;
