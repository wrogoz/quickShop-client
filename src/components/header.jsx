import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';

const Header = (props)=>{
    const logoutHandler = ()=>{
        localStorage.removeItem('access-token')
        props.dispatch({type:"LOGOUT"})
    }
    return(
        <HeaderContainer>
            <h1>QuickShop</h1>
            {props.isUserLoggedIn?<div onClick={logoutHandler}>logout</div>:null}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`

  grid-area: "header";
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  position: relative;
  div{
      position:absolute;
      top:10px;
      right:10px;
  }
  
`;
const mapStateToProps = (state, ownProps) => ({
    test: state.test,
    isUserLoggedIn: state.isUserLoggedIn,
    shoppingCart:state.shoppingCart
  });
  export default connect(mapStateToProps)(Header)

