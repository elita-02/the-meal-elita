import React from 'react'
import './Country.css'
import { flag } from '../../data/Flag'
import { Link } from "react-router-dom"
const API = "https://www.themealdb.com/images/icons/flags/big/64"


function Country() {
    return (
        <div className='div'>
            {
                flag.map((item) => (
                    <Link to={`/flag/${item.title}`} key={item.id} className='flag1'>
                        <img src={`${API}/${item.img}.png`} alt="" />
                    </Link>
                ))
            }
        </div>
    )
}

export default Country