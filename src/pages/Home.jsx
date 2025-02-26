import "./Home.css"
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../axios/apiClient';
import ProductList from '../Components/ProductList/ProductList';
import { FaSearch } from "react-icons/fa";
import Country from "../Components/Country/Country";
import meal from "../assets/meal-icon.png";
import coffe from "../assets/coffe.png"
import mal from "../assets/meal.png"
import kar from "../assets/kartink.png"
import bur from "../assets/burger.jpg"
import ash from "../assets/ash.jpg"
import kok from "../assets/kok.jpg"
import oliv from "../assets/olivia.jpg"
import blin from "../assets/blin.jpg"
import sup from "../assets/sup.jpg"
import borsh from "../assets/borsh.jpg"
import kab from "../assets/60oc3k1699009846.jpg"
import chiken from "../assets/Chicken-medium.png"
import salmon from "../assets/Salmon-medium.png"
import Beef from "../assets/Beef-medium.png"
import Pork from "../assets/Pork-medium.png"
import rise from "../assets/rise.jpg"
import japans from "../assets/japans.jpg"
import des from "../assets/deserdt.jpg"
import et from "../assets/1520083578.jpg"
import Kabb from "../assets/kabb.jpg"
import fish from "../assets/fish.jpg"
import buns from "../assets/vqpwrv1511723001.jpg"
import bread from "../assets/Wholegrain_Bread-medium.png"
import king from "../assets/King_Prawns-medium.png"
import kus from "../assets/Khus_Khus-medium.png"
import Banner from "../Components/Banner/Banner";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { query } = useParams();
  const [selectedLetter, setSelectedLetter] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  async function getProducts(query = "a") {
    try {
      const res = await apiClient.get(`/search.php?s=${query}`);
      setProducts(res.data.meals || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [query]);

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search/${search}`);
    }
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    getProducts(letter);
  };

  return (
    <div className='Home'>
      {/* <div className='Home-top'>
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
          <input type="text" placeholder="Search for a Meal.." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()}/>
          <button className="search-btn" onClick={handleSearch}><FaSearch /></button>
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
      </div> */}
      <Banner/>
      <ProductList data={products} />
      <div className='Home-latest'>
        <div>
          <h3>Latest Meals</h3>
          <div className='Home-lat'>
            <div className='par'>
              <img src={bur} alt="" />
              <p>15-minute chicken & halloumi burgers</p>
            </div>
            <div className='par'>
              <img src={ash} alt="" />
              <p>Lamb Pilaf (Plov)</p>
            </div>
            <div className='par'>
              <img src={kok} alt="" />
              <p>Strawberries Romanoff</p>
            </div>
            <div className='par'>
              <img src={oliv} alt="" />
              <p>Potato Salad (Olivier Salad)</p>
            </div>
            <div className='par'>
              <img src={blin} alt="" />
              <p>Blini Pancakes</p>
            </div>
            <div className='par'>
              <img src={sup} alt="" />
              <p>Fish Soup (Ukha)</p>
            </div>
            <div className='par'>
              <img src={borsh} alt="" />
              <p>Beetroot Soup (Borscht)</p>
            </div>
            <div className='par'>
              <img src={kab} alt="" />
              <p>Cabbage Soup (Shchi)</p>
            </div>
          </div>
        </div>

        <div className='popular-ingredients'>
          <h3>Popular Ingredients</h3>
          <div className='popular'>
            <div className='ingredient-item'>
              <img src={chiken} alt="Chicken" />
              <p>Chicken</p>
            </div>
            <div className='ingredient-item'>
              <img src={salmon} alt="Salmon" />
              <p>Salmon</p>
            </div>
            <div className='ingredient-item'>
              <img src={Beef} alt="Beef" />
              <p>Beef</p>
            </div>
            <div className='ingredient-item'>
              <img src={Pork} alt="Pork" />
              <p>Pork</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Latest Meals</h3>
          <div className='Home-lat'>
            <div className='par'>
              <img src={rise} alt="" />
              <p>Massaman Beef curry</p>
            </div>
            <div className='par'>
              <img src={japans} alt="" />
              <p>Japanese gohan rice</p>
            </div>
            <div className='par'>
              <img src={des} alt="" />
              <p>Salted Caramel Cheescake</p>
            </div>
            <div className='par'>
              <img src={et} alt="" />
              <p>Oxtail with broad beans</p>
            </div>
            <div className='par'>
              <img src={Kabb} alt="" />
              <p>Oxtail with broad beans</p>
            </div>
            <div className='par'>
              <img src={sup} alt="" />
              <p>Fish Soup (Ukha)</p>
            </div>
            <div className='par'>
              <img src={fish} alt="" />
              <p>Salmon Avocado Salad</p>
            </div>
            <div className='par'>
              <img src={buns} alt="" />
              <p>Chelsea Buns</p>
            </div>
          </div>
        </div>

        <div className='popular-ingredients'>
          <h3>Popular Ingredients</h3>
          <div className='popular'>
            <div className='ingredient-item'>
              <img src={bread} alt="" />
              <p>Wholegrain Bread</p>
            </div>
            <div className='ingredient-item'>
              <img src={king} alt="" />
              <p>King Prawns</p>
            </div>
            <div className='ingredient-item'>
              <img src={kus} alt="" />
              <p>Khus Khus</p>
            </div>
            <div className='ingredient-item'>
              <img src={Pork} alt="" />
              <p>Pork</p>
            </div>
          </div>
        </div>
      </div>
      <h3> Browse Country</h3>
      <Country />
      <div className="alphabet-container">
      <h3>Browse By Name</h3>
      {letters.map((letter, index) => (
        <h2
          key={letter}
          className="alphabet-btn"
          onClick={() => navigate(`/alfa/${letter.toLowerCase()}`)} 
        >
          {letter}
          {index < letters.length - 1 && <span>/</span>} 
        </h2>
      ))}
    </div>

    </div>
  );
}

export default Home;

