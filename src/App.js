import React from "react";
import {connect} from 'react-redux'
import styled from "styled-components";
import { GlobalStyles } from "./globalStyles";
import User from "./components/user";
import ShoppingList from './components/shoppingList'
import {Switch,Route} from 'react-router-dom'
import Register from "./components/userComponents/Register"
import Login from "./components/userComponents/Login"
function App(props) {
  return (
    <Container>
      <GlobalStyles />
      <Header>header</Header>
      <Main>
      <Switch>
        <Route exact path="/">
          {props.isUserLoggedIn? <ShoppingList/>:<User />}
        </Route>
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

      </Switch>
       
       
        
      </Main>
      <Footer>footer</Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 98vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;
const Header = styled.header`
  border-bottom: 1px solid #35d388;
  grid-area: "header";
`;
const Main = styled.main`
  grid-area: "Main";
  display: flex;
  flex-direction: column;
  align-items:center;
`;
const Footer = styled.footer`
  grid-area: "Footer";
  border-top: 1px solid #35d388;
`;


const mapStateToProps = (state, ownProps) => ({
  test: state.test,
  isUserLoggedIn:state.isUserLoggedIn
})

export default connect(mapStateToProps)(App)