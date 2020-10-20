import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import RegisterForm from "../registerComponents/registerForm";
const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm />
      <Link to="/">
        {" "}
        <BackButton>Back </BackButton>
      </Link>
    </RegisterContainer>
  );
};
const RegisterContainer = styled.section`
  width: 70%;
  max-width: 400px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const BackButton = styled.button`
  min-width: 150px;
  background: #534292;
  border: none;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const mapStateToProps = (state, ownProps) => ({
  test: state.test,
  isUserLoggedIn: state.isUserLoggedIn,
});

export default connect(mapStateToProps)(Register);
