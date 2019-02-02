import React from 'react';
import styled from 'styled-components';

export default function Services(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="container">
          {props.content.map((service, index) => (
            <React.Fragment>
            <div className="row pb-5 pt-5" key={index}>
              <div
                className={
                  'col-sm-12 col-md-6' + (index % 2 ? ' order-md-last' : '')
                }
              >
                <Image src={service.services__img.url} alt="" />
              </div>
              <div
                className={
                  'col-sm-12 col-md-6' + (index % 2 ? ' text-md-right' : '')
                }
              >
                <Header>{service.services__header}</Header>
                <List>
                  {service.services__list.map((service, index) => (
                    <li key={index}>
                      {service.service__name} - {service.service__price}
                    </li>
                  ))}
                </List>
              </div>
            </div>
            <hr />
            </React.Fragment>
          ))}
          {props.children[0]}
        </div>
      </div>
      {props.children[1]}
    </React.Fragment>
  );
}

const Header = styled.h3``;

const List = styled.ul`
  padding: 0;
  margin: 0 auto;
  list-style-type: none;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
