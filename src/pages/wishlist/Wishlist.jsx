import "./Wishlist.css";
import WishlistItems from "../../components/wishlist/WishlistItems";
import Recommend from "../../components/recommend/Recommend";

const Wishlist = ({ wishlistData, recommendedData }) => {
  return (
    <>
      <WishlistItems wishlistData={wishlistData} />
      <Recommend recommendedData={recommendedData} />
    </>
  );
};

export default Wishlist;
