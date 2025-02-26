import React, { useState, useEffect } from "react";
import ProductList from "../Components/ProductList/ProductList";
import apiClient from "../axios/apiClient";
import { useParams } from "react-router-dom";
import Country from "../Components/Country/Country";

function Alfaa() {
  const { value } = useParams();
  const [product, setProduct] = useState([]);

  async function getMealsByLetter() {
    try {
      const res = await apiClient.get(`/search.php?f=${value}`); 
      console.log(res);
      setProduct(res.data.meals || []); 
    } catch (error) {
      console.log(error);
      setProduct([]); 
    }
  }

  useEffect(() => {
    getMealsByLetter();
  }, [value]);

  return (
    <div>
      <h2>Meals starting with: {value.toUpperCase()}</h2>
      <ProductList data={product} /> 
      <Country />
    </div>
  );
}

export default Alfaa;
