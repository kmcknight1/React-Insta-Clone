import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
// import "./LoginPage.css";

library.add(fab, faInstagram);

function LoginPage() {
  const [username, setUsername] = useState("");

  const StyledDiv = styled.div`
    border: 1px solid red;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: darkslategrey;
  `;

  const StyledButton = styled.button`
    border: 1px solid red;
    margin-top: 2rem;
  `;

  return (
    // <StyledLogin>
    // <header className="login-header">
    <StyledDiv>
      {/* <Card>
        <CardBody> */}
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
      {/* </header> */}
      <div className="login-input">
        <h1>Log In</h1>
        <form className="login-form">
          <h3>Username</h3>
          <input
            type="text"
            // className="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <h3>Password</h3>
          <input type="text" className="password" />
          <StyledButton>Submit</StyledButton>
        </form>
      </div>
      {/* </CardBody>
      </Card> */}
    </StyledDiv>
  );
}

export default LoginPage;
