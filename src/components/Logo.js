import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoIcon from "../assets/logo.PNG"

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  & img {
    width: 120px;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">
        <img src={logoIcon} alt="logo" />
      </Link>
    </LogoText>
  );
};

export default Logo;
