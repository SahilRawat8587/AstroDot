import React from 'react';
import './FindBestAstrologers.css'; // Import the CSS file for styling

const FindBestAstrologers = () => {
  return (
    <div className="astrologers-container">
      <h2>Find Best Astrologers</h2>
      <div className="lists-container">
        {/* City Wise */}
        <div className="list city-wise">
          <h3>City Wise</h3>
          <ul>
            <li>Astrologers in Delhi</li>
            <li>Astrologers in Gurgaon</li>
            <li>Astrologers in Kolkata</li>
            <li>Astrologers in Pune</li>
            <li>Astrologers in Noida</li>
            <li>Astrologers in Mumbai</li>
          </ul>
        </div>

        {/* Country Wise */}
        <div className="list country-wise">
          <h3>Country Wise</h3>
          <ul>
            <li>Astrologers in USA</li>
            <li>Astrologers in Houston</li>
            <li>Astrologers in Chicago</li>
            <li>Astrologers in California</li>
            <li>Astrologers in New Jersey</li>
            <li>Astrologers in New York</li>
          </ul>
        </div>

        {/* Category Wise */}
        <div className="list category-wise">
          <div className="category-header">
            <h3>Category Wise</h3>
            <span className="popular-tag">Most Popular</span>
          </div>
          <ul>
            <li>Vedic Astrology</li>
            <li>Nadi Astrology</li>
            <li>Numerology</li>
            <li>Vasthu</li>
            <li>Tarot Reading</li>
            <li>Gemology</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FindBestAstrologers;
