import React from 'react'
import "./Footer.css"
import brit from "../../assets/gb.png"
import facebook from "../../assets/facebook_icon.png"
import twiter from "../../assets/twitter_icon.png"
import discord from "../../assets/discord_icon.png"
import the from "../../assets/logo-tcdb.png"
import auto from "../../assets/logo-tadb.png"
import sport from "../../assets/logo-tsdb.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg'>
      <div className='footer'>
        <div className='footer-first'>
          <p>© 2025 TheMealDB</p>
          <p>Proudly built in the UK <img src={brit} alt="UK Flag" /></p>
        </div>
        <div className='footer-center'>
          <div className='footer-icons'>
            <p>Socials:</p>
            <img src={facebook} alt="Facebook" />
            <img src={twiter} alt="Twitter" />
            <img src={discord} alt="Discord" />
          </div>
          <div className='footer-logos'>
            <img src={the} alt="TheCocktailDB" />
            <img src={auto} alt="TheAudioDB" />
            <img src={sport} alt="TheSportsDB" />
          </div>
        </div>
        <div className='footer-right'>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/fag">Faq</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
