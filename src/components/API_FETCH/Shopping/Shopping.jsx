import React, { useEffect, useState } from "react";

const Shopping = () => {
  let [apiData, setApidata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((elem) => setApidata(elem));
  }, []);
  console.log(apiData);

  return (
    <>
      <div className="api-header">Online Shopping</div>
      <div className="cardcontainer">
        {apiData.map((elem) => {
          let { id, title, price, description, category, image, rating } = elem;
          return (
            <div key={id} className="cards">
              <img src={image} alt={title} className="product-image" />
              <h3>{title}</h3>
              <p className="description">{description}</p>
              <p className="price">Price: ${price}</p>
              {/* <p className="rating">Rating: {rating.rate} ★</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shopping;
