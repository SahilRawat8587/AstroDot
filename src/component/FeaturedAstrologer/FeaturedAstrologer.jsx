import React from 'react'
import"./FeaturedAstrologer.css";
import { assets } from '../../assets/assets';

const FeaturedAstrologer = () => {
  return (
    <div>
        <div className="featured-astrologer">
            <div className="background-image">
                <img 
                    src={assets.horo}// Replace with actual background image source
                    alt="Background"
                />
            </div>
            <div className="profile-image">
                <img 
                    src="1.png" // Replace with actual profile image source
                    alt="Astrologer"
                />
            </div>
            <div className="info-section">
                <h2>Sujata</h2>
                <p>Vedic Expert</p>
            </div>
            <div className="booking-section">
                <button className="book-button">Call Now<p>Not Available</p></button>
                
                <button className="book-button">Chat Now<p>Available</p></button>
                
            </div>
        </div>
      
    </div>
  )
}

export default FeaturedAstrologer
