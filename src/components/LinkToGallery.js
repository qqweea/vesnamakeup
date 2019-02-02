import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default class LinkToGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotated: false
    };
    this.el = ""
  }

  handler = ()=> {
    this.state.rotated || (this.el.getBoundingClientRect().top-window.innerHeight < -150 && this.setState({rotated: true}));
    this.state.rotated && this.el.getBoundingClientRect().top-window.innerHeight > -100 && this.setState({rotated: false});
  }

  throttled(delay, fn) {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date()).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  }

  tHandler = this.throttled(200, this.handler);

  componentDidMount() {
    window.addEventListener("scroll", this.tHandler, true)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.tHandler, true)
  }

  render() {
    return (
      <Container className="col-12 text-center pt-5 pb-3"  ref={el => this.el = el}>
        <LinkBot to="/gallery" className={this.state.rotated ? 'visible' : ''}>
          ПРОСМОТРЕТЬ&nbsp;РАБОТЫ
          <LinkTop to="/gallery" className={this.state.rotated ? 'hidden' : ''}>
            <span>ПРОСМОТРЕТЬ&nbsp;РАБОТЫ</span>
          </LinkTop>
        </LinkBot>
      </Container>
    );
  }
}

const Container = styled.div`
  perspective: 500;
`;

const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 18px;
  border: 3px solid #000018;
  color: #000018;
  text-decoration: none;
  letter-spacing: 0.2em;
  font-weight: 500;
  transition: all 0.5s;
  position: relative;
  /* transform: rotate3d(0, 0, 0, 90deg); */

  &:hover{
    background-color: #b29879;
  }
`;

const LinkBot = styled(Link)`
  transform: rotateX(-90deg);
  transform-origin: center center;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &.visible {
    transform: translate3d(0px, 0px, 0px);
  }
`;

const LinkTop = styled.p`
  display: inline-block;
  padding: 10px 18px;
  border: 3px solid #000018;
  color: #000018;
  letter-spacing: 0.2em;
  font-weight: 500;
  transition: all 0.5s;
  position: absolute;
  bottom: -3px;
  left: -3px;
  margin: 0;
  background-color: #b29879;
  transform: rotateX(-90deg);
  transform-origin: center top;
  transition: 0.5s all;

  &.notvisible {
    background-color: #655748;
  }

  & span {
    display: block;
    transform: rotateX(180deg);
  }
`;
