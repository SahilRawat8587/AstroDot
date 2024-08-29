// Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, image, date }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className='card-image' />
      <div className="card-content">
      <h3>{title}</h3>
      <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;
