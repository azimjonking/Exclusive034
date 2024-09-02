import "./FlashSales.css";

const FlashSales = ({ flashSalesData }) => {
  const { data, isPending, error } = flashSalesData;

  return (
    <>
      <div className="flashSales-header container">
        <h1>Flash Sales</h1>
      </div>
      <div className="flashSales-container container">
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

export default FlashSales;
