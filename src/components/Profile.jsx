import React from "react";
import InfoBar from "./profile-components/InfoBar";
import UpperPart from "./profile-components/UpperPart";
import BottomPart from "./profile-components/BottomPart";
import "./Profile.css";

function Profile() {
  return (
    <div className="container">
      <UpperPart />
      <div className="main-bd">
        <BottomPart />
        <InfoBar />
      </div>
    </div>
  );
}

export default Profile;
