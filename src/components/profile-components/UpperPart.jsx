import React from "react";
function UpperPart() {
  return (
    <div className="profile-header">
      <div className="profile-img">
        <img
          className="circle-img"
          src="https://image.freepik.com/vecteurs-libre/profil-avatar-homme-icone-ronde_24640-14044.jpg"
          alt=""
          width="200"
        />
      </div>
      <div className="profile-nav-info">
        <h3 className="user-name">Salim M'hamdi</h3>
        <div className="address">
          <p className="state">Berlin,</p>
          <span className="country"> Germany.</span>
        </div>
      </div>
      <div className="profile-option">
        <div className="notification">
          🔔
          <span className="alert-message">3</span>
        </div>
      </div>
    </div>
  );
}
export default UpperPart;
