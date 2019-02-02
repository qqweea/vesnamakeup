import React from 'react';
import styled from 'styled-components';
import LinkToGallery from './LinkToGallery';

export default function Extra(props) {
  const { content } = props;
  return (
    <ExtraContainer className="row pb-5 pt-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Text>{content}</Text>
            <LinkToGallery />
          </div>
        </div>
      </div>
    </ExtraContainer>
  );
}

const Text = styled.p`
  white-space: pre-line;
  text-align: center;
`;

const ExtraContainer = styled.div`
  background-color: #f7edd7;
`;
