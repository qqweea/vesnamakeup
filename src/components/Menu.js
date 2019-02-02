import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Social from './Social';
import Burger from './Burger';

export default class Menu extends Component {
  render() {
    const { toggleMenu, menuOpen } = this.props;
    return (
      <React.Fragment>
        <Burger menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Navbar className={menuOpen ? 'show' : ''}>
          <NavLink to="/" exact activeClassName="current" className="anchor">
            Обо мне
          </NavLink>
          <NavLink
            to="/services"
            exact
            activeClassName="current"
            className="anchor"
          >
            Услуги
          </NavLink>
          <NavLink
            to="/gallery"
            exact
            activeClassName="current"
            className="anchor"
          >
            Галерея
          </NavLink>
          <Social />
        </Navbar>
      </React.Fragment>
    );
  }
}

const Navbar = styled.div`
  background-color: #b29879;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 16.666667%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 5px grey;
  padding: 10px 1vw;
  z-index: 1;


  @media screen and (max-width: 767px) {
    & {
      width: 85%;
      height: 100vh;
      z-index: 100;
      box-shadow: none;
      transform: translate3d(-100%, 0, 0);
      transition: transform 0.5s;
      top: 4em;
      padding: 10px 10vmin;

      &.show {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  & .anchor {
    display: block;
    padding: 15px 10px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    transition: all 0.5s;
    text-align: center;
    margin-bottom: 10px;

    &.current,
    &.current:hover {
      color: #fff;
      background-color: #86725c;
      box-shadow: inset 0 0 0px 3px #fff;
    }

    &:hover {
      background-color: #86725c;
    }
  }
`;
