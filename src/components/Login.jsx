import React, { useState } from "react";
import Footer from "./Footer";
import "../Login.css";
function Login(props) {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [isMousedOver, setMouseOver] = useState(false);
  function handleClic() {
    console.log(contact);
  }
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setContact((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div>
      <div className="login-container">
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          type="text"
        />
        <input
          onChange={handleChange}
          type="text"
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        <button
          style={{ backgroundColor: isMousedOver ? "#777" : "white" }}
          onClick={() => {
            handleClic();
            props.onChecked();
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Login
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
