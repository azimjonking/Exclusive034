import "./RelatedItems";

const RelatedItems = ({ relatedData }) => {
  const { data, isPending, error } = relatedData;

  console.log(data);

  return (
    <div className="container relatedItems">
      <div className="relatedItems-header">
        <h1>Related Item</h1>
      </div>
      <div className="relatedItems-container">
        <h1>data</h1>
      </div>
    </div>
  );
};

export default RelatedItems;
