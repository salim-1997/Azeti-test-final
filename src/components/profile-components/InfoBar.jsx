import React, { useState } from "react";
import "../Profile.css";
import PostsPage from "./PostsPage";
import ReviewsPage from "./ReviewsPage";
import SettingsPage from "./SettingsPage";

function InfoBar() {
  const [isMousedOver1, setMouseOver1] = useState(false);
  const [isMousedOver2, setMouseOver2] = useState(false);
  const [isMousedOver3, setMouseOver3] = useState(false);
  const [pageOnScreen, setPageOnScreen] = useState(<PostsPage />);
  function handleMouseOut1() {
    setMouseOver1(false);
  }
  function handleMouseOver1() {
    setMouseOver1(true);
  }
  function handleMouseOut2() {
    setMouseOver2(false);
  }
  function handleMouseOver2() {
    setMouseOver2(true);
  }
  function handleMouseOut3() {
    setMouseOver3(false);
  }
  function handleMouseOver3() {
    setMouseOver3(true);
  }
  function handleClick1() {
    setPageOnScreen(<PostsPage />);
  }
  function handleClick2() {
    setPageOnScreen(<ReviewsPage />);
  }
  function handleClick3() {
    setPageOnScreen(<SettingsPage />);
  }
  return (
    <div className="right-side">
      <div className="nav">
        <ul>
          <li
            className="user-post"
            style={{ backgroundColor: isMousedOver1 ? "#50a3a2" : null }}
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
            onClick={handleClick1}
          >
            Posts
          </li>
          <li
            className="user-review"
            style={{ backgroundColor: isMousedOver2 ? "#50a3a2" : null }}
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
            onClick={handleClick2}
          >
            Review
          </li>
          <li
            className="user-setting"
            style={{ backgroundColor: isMousedOver3 ? "#50a3a2" : null }}
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
            onClick={handleClick3}
          >
            Settings
          </li>
        </ul>
      </div>
      <div className="profile-body">{pageOnScreen}</div>
    </div>
  );
}

export default InfoBar;
