import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Banner.css";
import { FaSearch } from "react-icons/fa";
import meal from "../../assets/meal-icon.png"
import coffe from "../../assets/coffe.png"
import mal from "../../assets/meal.png"
import kar from "../../assets/kartink.png";

function Banner() {
  const [search, setSearch] = useState(""); 
  const navigate = useNavigate(); 

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && search.trim()) { 
      navigate(`/search/${search}`);
      setSearch(""); 
    }
  };

  return (
    <div>
      <div className='Home-top'>
        <img src={meal} alt="" />
        <div>
          <h1>Welcome to TheMealDB</h1>
          <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
          <p>We also offer a free recipe API for anyone wanting to use it, with additional features for subscribers.</p>
          <button><span>Pay</span>Pal</button>
          <p>Click button above to upgrade free Recipe API to premium.</p>
          <p>$3 month and cancel anytime. Currently 54 supporters.</p>
        </div>
        <img src={meal} alt="" />
      </div>

      <div className='Home-bot'>
        <div className="search-box">
          <input type="text" placeholder="Search for a Meal.." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} 
          />
          <button className="search-btn" onClick={() => navigate(`/search/${search}`)}><FaSearch /></button>
        </div>

        <div className='Home-cat'>
          <div>
            <img src={coffe} alt="" />
            <p>Total Meals:303</p>
          </div>
          <div>
            <img src={mal} alt="" />
            <p>Total Ingredients:575</p>
          </div>
          <div>
            <img src={kar} alt="" />
            <p>Images:303</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
