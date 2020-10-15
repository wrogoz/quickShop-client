import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Created by WRogoz</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  grid-area: "Footer";
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-align: center;
  p {
    max-width: 75px;
  }
  &:before {
    content: "";

    height: 1px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0) 0%,
      rgba(255, 255, 255, 1) 60%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export default Footer;
