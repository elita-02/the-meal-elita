
import React from "react";
import "./List.css";
import Card from "../Card/Card";

function ProductList({ data }) {
  return (
    <div>
      <h5>Latest Meals</h5>
      <div className="product-list">
        {Array.isArray(data) ? (
          data.map((item) => <Card key={item.idMeal} cart={item} />)
        ) : (
          <p>Loading or no data available...</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
