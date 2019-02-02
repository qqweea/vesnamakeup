import React from 'react';
import styled from 'styled-components';

export default function Phone() {
  return (
    <Container>
      <PhoneIco href="tel:+38 (093) 210-4433">
        <i className="fas fa-phone" />
      </PhoneIco>
      <Number> +38 (093) 210-4433</Number>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 20px;
`;

const PhoneIco = styled.a`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  color: white;
  box-shadow: inset 0 0 0px 3px #fff;
  font-size: 24px;
  text-decoration: none;
  height: 40px;
  width: 40px;
  transition: 0.5s all;
  & i {
    line-height: 0.8;
    font-size: 22px;

  }

  &:hover {
    color: pink;
    box-shadow: inset 0 0 0px 3px pink;
  }
`;

const Number = styled.p`
  color: white;
  margin-left: 10px;
`
