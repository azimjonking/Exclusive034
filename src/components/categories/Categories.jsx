import React, { useContext } from "react";
import "./Categories.css";
import DataContext from "../../context/DataContext";

const Categories = () => {
  const { data, isPending, error } = useContext(DataContext).categoryData;

  return (
    <section className="container categories">
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      <div className="categories-container">
        {data &&
          data.map((category, index) => {
            return (
              <div className="category" key={index}>
                <img src={category.icon} alt={`${category.name} icon`} />
                <p>{category.name}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Categories;
