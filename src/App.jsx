import React, { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Profile from "./components/Profile";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  function handleClick() {
    setLoggedIn(true);
  }
  return (
    <div>
      <Header />

      {isLoggedIn ? <Profile /> : <Login onChecked={handleClick} />}
    </div>
  );
}
//when we click on submit, we
// change LoggedIn to true , and
// we switch to the profile page
