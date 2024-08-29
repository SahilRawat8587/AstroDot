import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Align Your Path with the Stars</h2>
        <p>Connect with Expert Astrologers for Personalized Insights</p>
        <div className="buttons">
        <Link to ="/OurAstrologer">

          <button className="Dark">Chat</button></Link>
          <Link to ="/OurAstrologer"><button className="Light">Talk</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
