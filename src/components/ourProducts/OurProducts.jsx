import "./OurProducts.css";

const OurProducts = ({ productsData }) => {
  const { data, isPending, error } = productsData;

  return (
    <>
      <div className="ourProducts-header container">
        <h1>Our Products</h1>
      </div>
      <div className="ourProducts-container container">
        {isPending && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {data &&
          data.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="image">
                  <img src={item.images[0]} alt={item.name} />
                </div>
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OurProducts;