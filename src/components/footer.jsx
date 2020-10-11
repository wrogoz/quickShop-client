import React from 'react'
import styled from 'styled-components'

const Footer = ()=>{
    return(
        <FooterContainer>
            <p>footer</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
  grid-area: "Footer";
  border-top: 1px solid #35d388;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#35d388;
  color:#fff;
`;


export default Footer