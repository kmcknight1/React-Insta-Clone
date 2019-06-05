import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./LoginPage.css";

library.add(fab, faInstagram);

function LoginPage() {
  return (
    <div className="login">
      <header className="login-header">
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          className="login-icon"
          size="2x"
        />
        <img
          className="login-logo"
          src="https://www.wslogos.com/wp-content/uploads/2019/02/latest-instagram-2-logo-svg-vector-png-transparent-vector-logo-supply-of-the-day.png"
          alt="InstagramLogo"
        />
      </header>
      <div className="login-input">
        <h1>Log In</h1>
        <form className="login-form">
          <h3>Username</h3>
          <input type="text" className="username" />
          <h3>Password</h3>
          <input type="text" className="password" />
          <button className="login-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
