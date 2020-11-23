import React from "react";

function BottomPart() {
  return (
    <div className="left-side">
      <div className="profile-side">
        <p className="mobile-no">📞 +49 123 456 7899</p>
        <p className="user-email">✉ usernamer@email.com</p>
        <div className="user-bio">
          <h3>Bio</h3>
          <p className="bio">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="profile-btn">
          <button className="chatbtn"> 💬 message </button>
          <button className="createbtn"> 🧷 create</button>
        </div>
      </div>
    </div>
  );
}
export default BottomPart;
