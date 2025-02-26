
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../axios/apiClient";
import ProductList from "../Components/ProductList/ProductList";

function Search() {
  const { text } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await apiClient.get(`/search.php?s=${text}`);
        setProducts(res.data.meals || []);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [text]); 

  return (
    <div className="search">
      <h1>Search Results for: {text}</h1>
      {products.length > 0 ? (
        <ProductList data={products} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default Search;
