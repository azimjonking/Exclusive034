import "./Home.css";
import Featured from '../../components/featured/Featured';
import Services from '../../components/services/Services';
import ThisMonth from '../../components/thisMonth/ThisMonth'
function Home() {
  return (
    <div>
      <ThisMonth />
      <Featured />
      <Services />
    </div>
  );
}

export default Home;
