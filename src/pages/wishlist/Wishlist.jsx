import "./Wishlist.css";
import WishlistItems from "../../components/wishlist/WishlistItems";
import Recommend from "../../components/recommend/Recommend";

const Wishlist = ({ recommendedData }) => {
  return (
    <>
      <WishlistItems />
      <Recommend recommendedData={recommendedData} />
    </>
  );
};

export default Wishlist;
