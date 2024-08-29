import React from 'react'
import "./KundliHero.css";
import { assets } from "../../assets/assets";

const KundliHero = () => {
  return (
    <div className='hero'>
         <div className=" hero-title">
    <h1> Kundli Matching</h1>
    <p> Find your right one, through matchmaking </p>
  </div>
  <div className= "hero-Container">
    <div className = "hero-left">
      <h3>Kundli Matching</h3>
      <p>Kundli milan or kundali matching is an important consideration to make when you decide to get married. Kundli matching, also called Gun matching or Horoscope matching is the first step towards marriage when the parents decide to match the kundlis of the girl and the boy to ensure the couple is compatible. The gun milan exercise has been a part of India's culture for 1000s of years now and continues to be so.</p>
    </div>
    <div className = "hero-right">
      <img src={assets.wheel} alt="" />
    </div>
  </div>
      
    </div>
  )
}

export default KundliHero
