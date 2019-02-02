import React from 'react';
import styled from 'styled-components'

export default function Loader() {
  return (
    <Preloader>
      <LoaderEl />
    </Preloader>
  );
}

const Preloader = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const LoaderEl = styled.div`
  display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #000018;
    animation: spin 2s linear infinite;
    
    :before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color:#86725c;
    animation: spin 3s linear infinite;
  }
  :after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #b29879;
    animation: spin 1.5s linear infinite;
}

`