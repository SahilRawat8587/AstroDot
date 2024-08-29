import React from "react";
import "./Count.css";

const Count = () => {
  return (
    <div className="counts">
      <div className="Heading">
        <h2 className="title">Some count that matters</h2>
        <p className="sub-heading">
          Our achievement in the journey depicted in numbers
        </p>
      </div>
      <div className="count-content">
        <div className="count-item">
          <p className="number">30</p>
          <p className="sub-text">Astrologers</p>
        </div>
        <div className="count-item-center">
          <p className="number">800+</p>
          <p className="sub-text">Total Calls/ Chats</p>
        </div>
        <div className="count-item">
          <p className="number">300+</p>
          <p className="sub-text">Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
