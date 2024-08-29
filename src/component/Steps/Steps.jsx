import React from "react";
import "./Steps.css";

const Steps = () => {
  return (
    <div className="steps">
      <div className="Heading">
        <div className="title">
          <span className="title-dark">How does it</span>
          <span className="title-light"> Work?</span>
        </div>
        <p className="Sub-title">Your Cosmic Journey in 4 Simple Steps</p>
      </div>
      <div className="step-main-content">
        <div class="form-steps__item ">
          <div class="form-steps__item-content">
            <span class="form-steps__item-icon">
              <img src="users-wm.png" alt="user" height="30px" />
            </span>
            <p class="form-steps__item-text">Sign-up</p>
            <p class="form-steps__item-subtext">
              Create Your Celestial Account
            </p>
          </div>
        </div>
        <div class="form-steps__item">
          <div class="form-steps__item-content">
            <span class="form-steps__item-icon">
              <img src="card-favorite.png" alt="card" height="30px" />
            </span>
            <span class="form-steps__item-line"></span>
            <p class="form-steps__item-text">Wallet</p>
            <p class="form-steps__item-subtext">
              Fund Your Cosmic Consultations
            </p>
          </div>
        </div>
        <div class="form-steps__item">
          <div class="form-steps__item-content">
            <span class="form-steps__item-icon">
              <img src="Connect.png" alt="connect" height="25px" />
            </span>
            <span class="form-steps__item-line"></span>
            <p class="form-steps__item-text">Connect</p>
            <p class="form-steps__item-subtext">
              Engage with Expert Astrologers
            </p>
          </div>
        </div>
        <div class="form-steps__item">
          <div class="form-steps__item-content">
            <span class="form-steps__item-icon">
              <img src="RateReview.png" alt="review" height="30px" />
            </span>
            <span class="form-steps__item-line"></span>
            <p class="form-steps__item-text">Rate & Review</p>
            <p class="form-steps__item-subtext">
              Share Your Stellar Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
