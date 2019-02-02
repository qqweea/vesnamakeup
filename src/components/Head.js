import React from 'react';
import styled from 'styled-components';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import logo from '../img/logo.svg';
import headerImg from '../img/header.jpg';

export default function Head() {
  return (
    <ParallaxProvider>
    <div className="row">
      <Header>
        <Parallax
          className="custom-class"
          offsetYMax={80}
          offsetYMin={-80}
          slowerScrollRate
          tag="div"
        >
          <Logo src={logo} alt="logo" />
        </Parallax>
      </Header>
    </div>
    </ParallaxProvider>
  );
}

const Header = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: height .5s ease 0.1s;
`;

const Logo = styled.img`
  max-width: 75vmin
`;
