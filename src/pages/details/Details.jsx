import "./Details.css";
import Detail from "../../components/detail/Detail";
import RelatedItems from "../../components/relatedItems/RelatedItems";

const Details = ({ relatedData }) => {
  return (
    <>
      <Detail />
      <RelatedItems relatedData={relatedData} />
    </>
  );
};

export default Details;
