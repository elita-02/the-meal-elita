import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
function Card({cart}) {
  return (
    <div className='par'>
      <Link to ={`/meal/${cart.idMeal}`}>
      <img src={cart.strMealThumb} alt="" />
     <p>{cart.strMeal}</p>
    </Link>

     </div>

  )
}

export default Card
