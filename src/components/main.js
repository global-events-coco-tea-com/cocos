// Imports
import React, { useState } from 'react';

// CSS
import './main.css';

// Assets
import HalfOff from './../assets/halfOff.png';

const getMobileOperatingSystem = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

const Main = () => {
  const [redeemed, setRedeemed] = useState("Redeem (by staff)");

  const redeemButtonClick = () => {
    setRedeemed("Redeemed");
    window.confirm("Would you like to redeem your prize now? Click confirm to continue.");
  }

  const renderModal = () => {
    return (
      getMobileOperatingSystem()
    );
  }

  return (
    <div className="main">
      {renderModal()}
      <img className="offer" src={HalfOff} alt="50% off"></img>
      <div className="promo-text">
        <div className="half-off-text">50% OFF</div>
        <div className="redemption-text">Redemption dates: 2020-08-25 ~ 2020-10-09</div>
        <div className="instructions-text">
          <p>1. Redeem the prize by showing the winning voucher at any CoCo Fresh Tea and Juice stores in Ontario.</p>
          <p>2. Please let CoCo cashier press the redeem button.</p>
          <p>3. Coupon is not valid once redeem button is pressed.</p>
        </div>
        <button className={redeemed === "Redeemed" ? "redeem-button-clicked" : "redeem-button"} onClick={() => redeemButtonClick()}>
          {redeemed}
        </button>
        <div className="bar"> </div>
        <div className="winner-comments">Winner Comments</div>
        <button className="edit">Edit</button>
      </div>
    </div>
  );
};

export default Main;