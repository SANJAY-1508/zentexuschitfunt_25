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

        {/* Double Circle */}
        <div className="big-circle">
          <div className="small-circle">
            <h2>₹{amount}</h2>
            <p>{title}</p>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="bottom-content d-flex justify-content-between">
        <div>
          <h6>{monthsText}</h6>
          <h6>{bonusText}</h6>
        </div>
        <div className="text-end">
          <h6>Total</h6>
          <h6>₹{totalText}</h6>
        </div>
      </div>
    </div>
  );
};

export default FundPlanCard;
