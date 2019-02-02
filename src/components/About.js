import React from 'react';
import styled from 'styled-components';
import Extra from './Extra';
import brush from '../img/brush.svg'
import brush1 from '../img/brush1.svg'

export default function About(props) {
  const { about__repeater, about__description } = props.content;
  return (
    <React.Fragment>
      <div className="row">
        <div className="container">
          <StickyContainer className="row pt-5 pb-5">
            <div className="col-12 col-md-6 p-0 pl-md-3 pr-md-3">
              <Me
                src={about__repeater['0']['about__img']['url']}
                alt={about__repeater['0']['about__img']['alt']}
              />
            </div>

            <div className="col-12 col-md-6">
              <h2>
                Bизажист, <br /> мастер по прическам.
              </h2>
              <BrushBgOne>{about__repeater['0']['about__text']}</BrushBgOne>
            </div>
          </StickyContainer>
          <hr />
          <StickyContainer className="row pt-5 pb-5">
            <div className="col-12 col-md-6 order-last order-md-first">
              <BrushBgTwo>{about__repeater['1']['about__text']}</BrushBgTwo>
            </div>
            <div className="col-12 col-md-6 p-0 pl-md-3 pr-md-3">
              <Me
                src={about__repeater['1']['about__img']['url']}
                alt={about__repeater['0']['about__img']['alt']}
              />
            </div>
          </StickyContainer>
        </div>
      </div>
      <Extra content={about__description} />
    </React.Fragment>
  );
}

const Me = styled.img`
  max-width: 100%;
  position: sticky;
  top: 20px;
  `;
const Text = styled.p`
  white-space: pre-line;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const StickyContainer = styled.div`
`;

const BrushBg = styled(Text)`
  background-position: top;
  background-repeat: round;
  `

const BrushBgOne = styled(BrushBg)`
  background-image: url(${brush});
  /* background-size: 110% 140%; */
  background-size: 100%;
`
const BrushBgTwo = styled(BrushBg)`
  background-image: url(${brush1});
  background-size: 100%;
`
