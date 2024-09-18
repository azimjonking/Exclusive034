import "./WishlistItems.css";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const WishlistItems = () => {
  const { data, isPending, error } = useContext(DataContext).wishlistData;

  return (
    <div className="container wishlist">
      <div className="wishlist-header">
        <h1>Wishlist (4)</h1>
        <button>Move All To Bag</button>
      </div>

      <div className="wishlist-container">
        {isPending && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <div className="image">
                  <img src={item.images[0]} alt={item.name} />
                </div>
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WishlistItems;
