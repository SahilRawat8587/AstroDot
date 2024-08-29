import React from "react";
import "./AstrologerCard.css";
import { Link } from 'react-router-dom';

const AstrologerCard = ({ image, name, experience, language, price, rating }) => {
  return (
    <div className="astrologer-card">
      <img src={image} alt={name} className="astrologer-image" />
      <div className="astrologer-info">
        <h3>{name}</h3>
        <p>{experience} years experience</p>
        <p>{language}</p>
        <div className="rating">{rating} ⭐</div>
        <div className="price">₹{price}/min</div>
        <Link to="/Profile" ><button className="connect-button">Connect Now</button></Link>
      </div>
    </div>
  );
};

export default AstrologerCard;
