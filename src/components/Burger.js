import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

export default class Burger extends Component {
  render() {
    const { menuOpen } = this.props;
    return (
      <Btn
        className={'d-md-none' + (menuOpen ? ' X' : '')}
        onClick={this.props.toggleMenu}
      >
        <span className="line-top" />
        <span className="line-middle-one" />
        <span className="line-middle-two" />
        <span className="line-bottom" />
      </Btn>
    );
  }
}

const Btn = styled.div`
  height: 30px;
  width: 30px;
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 1000;

  &::before {
    content: '';
    display: block;
    position: fixed;
    width: 100vw;
    height: 4em;
    left: 0;
    top: 0;
    background-color: #000018;
    background-image: url(${logo});
    background-size: contain;

    background-repeat: no-repeat;
    background-position: 20px center;
    padding-left: 20px;
  }

  span {
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    background-color: #fff;
    transition: width 0.25s, transform 0.5s;
    transform-origin: center;
  }

  .line-top {
    top: 0;
  }
  .line-middle-one {
    top: calc(50% - 2px);
  }
  .line-middle-two {
    top: calc(50% - 2px);
  }

  .line-bottom {
    bottom: 0;
  }

  &.X {
    & span {
      transform: scale(0);
    }

    .line-middle-one {
      transform: rotate(45deg) scale(1.2);
    }
    .line-middle-two {
      transform: rotate(-45deg)  scale(1.2);
    }
  }
`;
