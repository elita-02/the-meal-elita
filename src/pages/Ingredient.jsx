
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../axios/apiClient';
import './Ingredient.css';
import { Link } from 'react-router-dom';

const IMAGE_API = "https://www.themealdb.com/images/ingredients";

function Ingredient() {
  const { title } = useParams();  
  const [meals, setMeals] = useState([]); 
  const [ingredientImage, setIngredientImage] = useState(null); 
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    const imageUrl = `${IMAGE_API}/${encodeURIComponent(title)}.png`;
    setIngredientImage(imageUrl);

    const getMealsByIngredient = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get(`/filter.php?i=${encodeURIComponent(title)}`);
        if (res.data.meals) {
          setMeals(res.data.meals);
        } else {
          setMeals([]);  
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    };

    getMealsByIngredient();
  }, [title]);  

  return (
    <div className="ingredient-container">
      <div className="ingredient-content">
        <div className="ingredient-left">
          {ingredientImage && <img src={ingredientImage} alt={title} />}
        </div>

   
        <div className="ingredient-right">
          {loading ? (
            <p className="loading">Загрузка...</p>
          ) : (
            meals.length > 0 ? (
              meals.map((meal) => (
                <div key={meal.idMeal} className="meal-card">
                    <Link to={`/meal/${meal.idMeal}`}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <h3>{meal.strMeal}</h3>
                    </Link>
                </div>
              ))
            ) : (
              <p>Для этого ингредиента не найдено блюд.</p>
            )
          )}
        </div>
      </div>

    </div>
  );
}

export default Ingredient;
