import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container className="row pb-5 pt-4">
      <div className="container">
        <div className="row  mb-5">
          <div className="col-12">
            <Header>
              <span>Запишитесь на макияж прямо сейчас!</span>
            </Header>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-0 mb-md-5">
            <p>
              Работаю по записи по адресу:
              <br />
              с. Святопетровское,
              <br />
              ЖК «Петровский квартал»,
              <br />
              бул. Тараса Шевченка 7 <br />
              Телефон:{' '}
              <Tel href="tel:+38 (093) 210-4433">+38 (093) 210-4433</Tel>
            </p>
          </div>
          <div className="col-12 col-md-6">
              <Map title="Карта"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.539610119064!2d30.3192746159425!3d50.39378039932726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca5929658e97%3A0x66a2633e2ad16c27!2sPetrovsky+Quarter!5e0!3m2!1sen!2sua!4v1548597850851"
                allowfullscreen
              />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #000018;
  color: #fff;
`;

const Header = styled.h3`
  font-weight: 400;
  text-align: center;
  font-size: 18px;
  overflow: hidden;
  padding: 0px 50px;
  & span {
    display: inline-block;
    position: relative;
    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      /* width: calc(50% - 320px); */
      width: 200px;
      top: 0.7em;
      height: 2px;
      background-color: white;
    }
    &::before {
      right: 100%;
      margin-right: 15px;
    }
    &::after {
      left: 100%;
      margin-left: 15px;
    }
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 300px;
`;

const Tel = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: pink;
  }
`;
