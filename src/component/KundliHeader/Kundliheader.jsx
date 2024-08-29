import React from 'react'
import "./KundliHeader.css"
import { assets } from "../../assets/assets";
const KundliHeader = () => {
  return (
    <div className='hero'>
         <div className=" hero-title">
    <h1> Free Kundli  online</h1>
    <p> Get Instant & Accurate, Janam Kundli</p>
  </div>
  <div className= "hero-Container">
    <div className = "hero-left">
      <h3>Kundli</h3>
      <p >Talking about future predictions, the kundali catered by Astrotalk to you is such that it considers the movement of all the planets in the native's life from the beginning of his or her life till as far as 100 years. Doing so helps you understand the reasons behind not only the ongoing circumstances but also what's to come for you in the future. So if in any way you are confused about life, the online kundli can be your saviour. Having said that, make sure you try the free online kundli, and let us know what you feel about </p>
    </div>
    <div className = "hero-right">
      <img src={assets.wheel} alt="" />
    </div>
  </div>
      
    </div>
  )
}

export default KundliHeader
