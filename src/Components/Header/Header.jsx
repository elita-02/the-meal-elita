import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";  
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  const [text, setText] = useState(""); 
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim()) { 
      navigate(`/search/${text}`);
      setText(""); 
    }
  };

  return (
    <div className="header">
      <div className="header-top">
        <Link to="/"> <img src={logo} alt="Logo" /></Link>
        <button className="burger-menu">
          <FaBars />
        </button>
        <div className="header-btn">
          <Link to="/"><button>Home</button></Link>
          <Link to="/api"><button>API</button></Link>
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Search" onKeyDown={handleKeyDown}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
