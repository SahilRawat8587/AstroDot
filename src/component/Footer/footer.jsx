import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <div className="quicklinks">
          <ul>
            <li>Blog</li>
            <li>Numerology</li>
            <li>Kundli Matching</li>
            <li>Panchang</li>
            <li>Child Astrology</li>
          </ul>
          <ul>
            <li>Astro Mall</li>
            <li>Festival Calender</li>
            <li>Annprashan</li>
            <li>Mantras</li>
            <li>Love Calculator</li>
          </ul>
          <ul>
            <li>Horoscope</li>
            <li>Vastu Shastra</li>
            <li>Naamakaran</li>
            <li>Nakshatras</li>
            <li>Mole Astrology</li>
          </ul>
          <ul>
            <li>Tarot</li>
            <li>Zodiac Sign</li>
            <li>Marriage</li>
            <li>Vrat Calender</li>
            <li>Kaalsarp Doshas</li>
          </ul></div>
        </div>
        <div className="about">
        <div className="footer-company">
          <div className='Company'>
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className='Contact'>
            <h3>Contact</h3>
            <ul>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div className='Legal'>
            <h3>Legal</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Refund & Cancellation</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-subscribe">
          <h3>Follow Us</h3>
          <p>Receive exclusive offers in your mailbox</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter Your email" />
            <button>Subscribe</button>
          </div>
        </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All rights Reserved © Amsys</p>
        <p>Made with <span role="img" aria-label="love">💛</span></p>
      </div>
    </footer>
  );
}

export default Footer
