import "./Recommend.css";

const Recommend = ({ recommendedData }) => {
  const { data, isPending, error } = recommendedData;

  return (
    <div className="container recommend">
      <div className="recommend-header">
        <h1>Just for you</h1>
        <button>See All</button>
      </div>
      <div className="recommend-container">
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

export default Recommend;
