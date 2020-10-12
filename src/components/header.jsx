import React from 'react'
import styled from 'styled-components'

const Header = ()=>{
    const clear = ()=>{
        localStorage.removeItem('access-token')
    }
    return(
        <HeaderContainer>
            <h1 onClick={clear}>QuickShop</h1>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
  border-bottom: 1px solid #35d388;
  grid-area: "header";
  display:flex;
  align-items:center;
  justify-content:center;
  background:#35d388;
  color:#fff;
`;


export default Header