import "./ThisMonth.css";
import BestSellingProduct from "./bestSellingProduct/BestSellingProduct";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const ThisMonth = () => {
  const { data, isPending, error } = useContext(DataContext).bestProductsData;

  return (
    <>
      <div className="section-header container">
        <h1>ThisMonth</h1>
      </div>
      <div className="container">
        {isPending && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}

        {data &&
          data.map((item, index) => {
            return (
              <div className="product" key={index}>
                <div className="img">
                  <img src={item.images[0]} alt="product image" />
                </div>
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
      <BestSellingProduct />
    </>
  );
};

export default ThisMonth;
