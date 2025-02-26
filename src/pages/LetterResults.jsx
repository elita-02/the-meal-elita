import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../axios/apiClient";
import ProductList from "../Components/ProductList/ProductList";

function LetterResults() {
  const { value } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchMealsByLetter() {
      try {
        const res = await apiClient.get(`/search.php?f=${value}`);
        setProducts(res.data.meals || []);
      } catch (error) {
        console.error("Error fetching meals by letter:", error);
        setProducts([]);
      }
    }

    if (value) {
      fetchMealsByLetter();
    }
  }, [value]);

  return (
    <div>
      <h2>Meals starting with "{value.toUpperCase()}"</h2>
      <ProductList data={products} />
    </div>
  );
}

export default LetterResults;
