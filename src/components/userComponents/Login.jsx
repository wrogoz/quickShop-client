import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from "../loginComponents/loginForm";
const Login = () => {
  return (
    <LoginContainer>
      <LoginForm />
     
        <BackLink to="/">Back </BackLink>
      
    </LoginContainer>
  );
};
const LoginContainer = styled.section`
  width: 70%;
  max-width: 400px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const BackLink = styled(Link)`
      min-width: 150px;
    background: #534292;
    border: none;
    padding: 10px 0;
    margin-top: 10px;
    color: #fff;
    border-radius: 10px;
    text-align:center;
    text-decoration: none;
    color: #fff;
    font-size: 15px;
 
`;
const mapStateToProps = (state, ownProps) => ({
  test: state.test,
  isUserLoggedIn: state.isUserLoggedIn,
});

export default connect(mapStateToProps)(Login);
