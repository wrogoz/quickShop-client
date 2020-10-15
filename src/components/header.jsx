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

  grid-area: "header";
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  
`;


export default Header