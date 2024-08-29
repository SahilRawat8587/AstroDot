import React from 'react'
import "./DailyHoroscope.css"
import { assets } from "../../assets/assets";

const DailyHoroscope = () => {
    const horoscopes = [
        {
            sign:"Aries",
            description:
        "Personal: Aries will start the day off with the feeling that all is the same but steady but surely, as the day passes, the horoscope shows an improvement will spring up. It’s not recommended to withdraw, surround yourself with energetic people and follow their example.....read more",
        imageUrl: "1.png",
         },{
            sign: "Taurus",
            description:
              "Patience is your key today. Take your time to make decisions, and don’t rush into anything.",
            imageUrl: "2.png",
          },{
            sign:"Gemini",
            description:
        "Personal: Aries will start the day off with the feeling that all is the same but steady but surely, as the day passes, the horoscope shows an improvement will spring up. It’s not recommended to withdraw, surround yourself with energetic people and follow their example.....read more",
        imageUrl: "3.png",
         },{
            sign: "Cancer",
            description:
              "Patience is your key today. Take your time to make decisions, and don’t rush into anything.",
            imageUrl: "4.png",
          },
          {
            sign:"Leo",
            description:
        "Personal: Aries will start the day off with the feeling that all is the same but steady but surely, as the day passes, the horoscope shows an improvement will spring up. It’s not recommended to withdraw, surround yourself with energetic people and follow their example.....read more",
        imageUrl: "5.png",
         },{
            sign: "Virgo",
            description:
              "Patience is your key today. Take your time to make decisions, and don’t rush into anything.",
            imageUrl: "6.png",
          },
          {
            sign:"Libra",
            description:
        "Personal: Aries will start the day off with the feeling that all is the same but steady but surely, as the day passes, the horoscope shows an improvement will spring up. It’s not recommended to withdraw, surround yourself with energetic people and follow their example.....read more",
        imageUrl: "7.png",
         },{
            sign: "Scorpio",
            description:
              "Patience is your key today. Take your time to make decisions, and don’t rush into anything.",
            imageUrl: "8.png",
          },
          {
            sign:"Sagittarius",
            description:
        "Personal: Aries will start the day off with the feeling that all is the same but steady but surely, as the day passes, the horoscope shows an improvement will spring up. It’s not recommended to withdraw, surround yourself with energetic people and follow their example.....read more",
        imageUrl: "9.png",
         },{
            sign: "Capricorn",
            description:
              "Patience is your key today. Take your time to make decisions, and don’t rush into anything.",
            imageUrl: "10.png",
          },
          {
            sign:"Aquarious",
            description:
        "Personal: Aries will start the day off with the feeling that all is the same but steady but surely, as the day passes, the horoscope shows an improvement will spring up. It’s not recommended to withdraw, surround yourself with energetic people and follow their example.....read more",
        imageUrl: "11.png",
         },{
            sign: "Pisces",
            description:
              "Patience is your key today. Take your time to make decisions, and don’t rush into anything.",
            imageUrl: "12.png",
          },
    
    ]
  return (
    
    
    <div className="horoscope-container">
      {/* Top Images Section */}
      <div className="horoscope-top-images">
        <img
          src={assets.horo}
          alt="TopImage1"
          className="horoscope-top-image"
        />
       
      </div>

      {/* Heading */}
      <h2>Today's Horoscope</h2>

      {/* Horoscope Cards */}
      {horoscopes.map((horoscope, index) => (
        <div className="horoscope-card" key={index}>
          <img
            src={horoscope.imageUrl}
            alt={horoscope.sign}
            className="horoscope-image"
          />
          <div className="horoscope-details">
            <h3>{horoscope.sign}</h3>
            <p>{horoscope.description}</p>
          </div>
        </div>
      ))}

      {/* Bottom Images Section */}
      <div className="horoscope-top-images">
        <img
          src={assets.horo}
          alt="BottomImage1"
          className="horoscope-top-image"
        />
       
      </div>
    </div>
  )
}

export default DailyHoroscope
