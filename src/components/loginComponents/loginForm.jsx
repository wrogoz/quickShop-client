import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import isEmail from "validator/lib/isEmail"
import {connect} from 'react-redux'
import { saveTokenToLocalStorage } from "../../assets/token"
const LoginForm = (props) => {
  const [loginError, setLoginError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginUserHandler = (e) => {
    e.preventDefault();
    if (isEmail(email)) {
      axios
        .post("https://wr-quickshop.herokuapp.com/user/login", {
          email: email,
          password: password,
        })
        .then(function (response) {
          if (loginError) {
            setLoginError(false);
          }
          if (response.data.token) {
            saveTokenToLocalStorage(response.data.token);
            props.dispatch({ type: "LOGIN" });
          } else {
            if (!loginError) {
              setLoginError(true);
            }
          }
        })
        .catch(function (error) {
          setLoginError(true);
        });
    } else {
      setLoginError(true);
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Form>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        onChange={emailHandler}
        value={email}
      />
      <input
        type="password"
        name=""
        id="password"
        placeholder="password"
        onChange={passwordHandler}
        value={password}
      />
      {loginError ? <p>wrong email or password</p> : null}
      <button type="submit" onClick={LoginUserHandler}>
        Login
      </button>
    </Form>
  );
};

const Form = styled.form`
  font-family: "Lato", sans-serif;

  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  input {
    margin: 10px;
    text-align: center;
    border: 1px solid #534292;
    border-radius: 10px;
    padding: 10px;
    color: #534292;
    outline: none;
  }
  button {
    min-width: 150px;
    background: #534292;
    border: none;
    padding: 10px;
    margin-top: 10px;
    color: #fff;
    border-radius: 10px;
    font-family:'lato';
    font-size:15px;
  }
`;

const mapStateToProps =(state)=>({
    isUserLoggedIn: state.isUserLoggedIn
})
export default connect(mapStateToProps)(LoginForm)
