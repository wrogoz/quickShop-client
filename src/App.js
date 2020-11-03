import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { GlobalStyles } from "./globalStyles";
import User from "./components/user";
import ShoppingList from "./components/shoppingList";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import Register from "./components/userComponents/Register";
import Footer from "./components/footer";
import Login from "./components/userComponents/Login";
function App(props) {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            {props.isUserLoggedIn ? <ShoppingList /> : <User />}
          </Route>

          <Route path="/login">
            {props.isUserLoggedIn ? <Redirect to="/" /> : <Login />}
          </Route>

          <Route path="/register">
            {props.isUserLoggedIn ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-width: 340px;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 40px;
  grid-template-areas:
    "header"
    "main"
    "footer";
  background-image: linear-gradient(to bottom, #654a86, #534292);
  background-color: #534292;
`;

const Main = styled.main`
  grid-area: "Main";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = (state, ownProps) => ({
  test: state.test,
  isUserLoggedIn: state.isUserLoggedIn,
});

export default connect(mapStateToProps)(App);
