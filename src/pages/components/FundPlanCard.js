// FundPlanCard.jsx - Enhanced with better transitions
import React from "react";
import "./FundPlanCard.css";

const FundPlanCard = ({
  image,
  amount,
  title,
  monthsText,
  bonusText,
  totalText,
}) => {
  return (
    <div className="fund-plan-container">
      <div className="image-wrapper">
        <img src={image} className="fund-image" alt="fund" />
        <div className="circle-overlay">
          <div className="big-circle">
            <div className="small-circle">
              <h2>₹{amount}</h2>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-content">
        <div className="left-info">
          <h6>{monthsText}</h6>
          <h6>{bonusText}</h6>
        </div>
        <div className="right-info">
          <h6 className="total-label">Total</h6>
          <h6 className="total-amount">₹{totalText}</h6>
        </div>
      </div>
    </div>
  );
};

export default FundPlanCard;
