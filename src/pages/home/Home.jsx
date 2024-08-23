import "./Home.css";
import MainSection from '../../components/mainSection/MainSection';
import Featured from '../../components/featured/Featured';
import Services from '../../components/services/Services';
import ThisMonth from '../../components/thisMonth/ThisMonth'
function Home() {
  return (
    <div>
      <MainSection />
      <ThisMonth />
      <Featured />
      <Services />
    </div>
  );
}

export default Home;
