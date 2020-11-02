import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';
import logout from '../assets/images/power.svg'

const Header = (props)=>{
    const logoutHandler = ()=>{
        localStorage.removeItem('access-token')
        props.dispatch({type:"LOGOUT"})
    }
    return(
        <HeaderContainer>
            <h1>QuickShop</h1>
            {props.isUserLoggedIn?<div onClick={logoutHandler}><img src={logout} alt="logout"/> <p>Logout</p></div>:null}
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
    position: absolute;
    top: 10px;
    right: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:40px;
    @media(min-width:1000px){
        right:1%;
    }
      img{
        height:40px;
          @media(max-width:640px){
            display:none;
           
          }
      }
      p{
          margin:0;
      }
  }
  
`;
const mapStateToProps = (state, ownProps) => ({
    test: state.test,
    isUserLoggedIn: state.isUserLoggedIn,
    shoppingCart:state.shoppingCart
  });
  export default connect(mapStateToProps)(Header)

