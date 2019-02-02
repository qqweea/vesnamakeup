import React from 'react';
import styled from 'styled-components';

export default function Materials(props) {
  return (
    <React.Fragment>
      <div className="row pb-3">
        <div className="col">
          <Header>Материалы</Header>
        </div>
      </div>
      <div className="row pb-5">
        {props.content.map((brand, index) => (
          <div className="col-6 col-md-4 col-lg-2" key={index}>
            <Link href={brand.materials__link} target="_blank">
              <Logo src={brand.materials__logo.url} alt={brand.materials__name} />
            </Link>
          </div>
        ))}
      </div>

    </React.Fragment>
  );
}

const Link = styled.a`
  color: black;
`;

const Logo = styled.img`
  display: block;
  max-width: 100%;
  color: black;
  transform: scale(0.9);
  transition: 0.2s all;
  filter: grayscale(1);
  &:hover, &:focus {
    filter: none;
    transform: scale(1);
  }
`;

const Header = styled.h3`
  text-align: center;
`
