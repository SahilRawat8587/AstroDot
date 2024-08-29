import React from 'react'
import"./AstrologerProfile.css";

const reviews = [
    { name: "Yessica Christy", location: "Shanxi, China", rating: 4.5, comment: "Lorem ipsum..." },
    { name: "Viezih Robert", location: "Warsaw, Poland", rating: 4.5, comment: "Lorem ipsum..." },
    { name: "Yessica Christy", location: "Shanxi, China", rating: 4.5, comment: "Lorem ipsum..." },
    { name: "Viezih Robert", location: "Warsaw, Poland", rating: 4.5, comment: "Lorem ipsum..." },
    // Add more reviews here
  ];

const AstrologerProfile = () => {
  return (
    <div className="astrologer-profile">
    <div className="profile-container">

    <div className="about-section">
      <h2>About</h2>
      <ul>
        <li><span role="img" aria-label="Female">👩</span> Female</li>
        <li><span role="img" aria-label="Birthday">🎂</span> Born June 26, 1980</li>
        <li><span role="img" aria-label="Languages">🌐</span> English, Hindi, Telugu</li>
        <li><span role="img" aria-label="Experience">🎓</span> Exp: 5 Years</li>
        <li><span role="img" aria-label="Price">💸</span> ₹140/min</li>
        <li><span role="img" aria-label="Talked Minutes">⏰</span> 848 minutes</li>
        <li><span role="img" aria-label="Total Minutes">📞</span> 8765 minutes</li>
      </ul>
    </div>

      <div className="main-info-section">
      <div className="astrologer-photo"></div>
      <h2>Sujata</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit euismod...</p>
    </div>

    </div>
    <div className="bottom-section">
    <div className="reviews-section">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h4>{review.name}</h4>
          <p>{review.location}</p>
          <div className="rating">{review.rating} ⭐</div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>


      {/* <RatingSection /> */}
      <div className="rating-section">
      <h3>Rating & Review</h3>
      <div className="overall-rating">
        <h1>5.0</h1>
        <div className="stars">⭐⭐⭐⭐⭐</div>
      </div>
      <div className="rating-breakdown">
        <div className="rating-bar">
          <span>5</span> <div className="bar" style={{ width: "80%" }}></div>
        </div>
        <div className="rating-bar">
          <span>4</span> <div className="bar" style={{ width: "10%" }}></div>
        </div>
        <div className="rating-bar">
          <span>3</span> <div className="bar" style={{ width: "5%" }}></div>
        </div>
        <div className="rating-bar">
          <span>2</span> <div className="bar" style={{ width: "3%" }}></div>
        </div>
        <div className="rating-bar">
          <span>1</span> <div className="bar" style={{ width: "2%" }}></div>
        </div>
      </div>
    </div>
    </div>
    <div className="chat-with-assistant">
      <button>Chat with Assistant?</button>
    </div>
  </div>
  )
}

export default AstrologerProfile
