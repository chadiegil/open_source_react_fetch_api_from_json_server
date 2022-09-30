import React from "react";
import { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((product) => {
          return (
            <ul>
              <li>price: {product.price}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default Products;
