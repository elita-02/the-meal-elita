
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../axios/apiClient";
import { flag } from "../data/Flag";
import "./DetailMeal.css";
const IMAGE_API = "https://www.themealdb.com/images/ingredients";
const API = "https://www.themealdb.com/images/icons/flags/big/64";
function DetailMeal() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [info, setInfo] = useState({});
  const findTitle = flag.find((x) => x.title === info?.strArea);
  async function getMealById() {
    try {
      const res = await apiClient.get(`/lookup.php?i=${id}`);
      setInfo(res.data.meals[0] || {});
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMealById();
  }, [id]);

  let ingredientsArray = [];
  for (let i = 1; i <= 20; i++) {
    let strName = info[`strIngredient${i}`];
    if (strName) {
      ingredientsArray.push({ name: strName });
    }
  }
  function setId(text) {
    let newxId = text == "next" ? Number(id) +1 : Number(id) -1
    navigate(`/meal/${newxId}`)
  }
  let textArray = info?.strInstructions?.split(",")
  console.log(textArray);
  
  return (
    <div className="container info">
      <div className="arrow">
        <img onClick={() => setId("prew")}  src="https://www.themealdb.com/images/icons/Arrow-Left.png" alt="" className="strelka" />
        {findTitle && <img src={`${API}/${findTitle.img}.png`} alt={info.strArea} className="flag"/>}
        <img onClick={() => setId("next")} src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt="" className="strelka"/>
      </div>
      <div className="info-content">
        <div className="info-left">
          {info.strMealThumb && <img src={info.strMealThumb} alt={info.strMeal} />}
        </div>
        <div className="info-right">
          {ingredientsArray.map((item, index) => (
            <div key={index} className="ingredient" onClick={() => navigate(`/ingredient/${encodeURIComponent(item.name)}`)} >
              <img src={`${IMAGE_API}/${encodeURIComponent(item.name)}.png`} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="info-des">
        <h2>Instructions</h2>
        <div className="des">
        {
            textArray?.map((item, index) => (
                <div key={index}>{item}</div>
            ))
        }

        </div>
      </div>
    </div>
  );
}
export default DetailMeal;

