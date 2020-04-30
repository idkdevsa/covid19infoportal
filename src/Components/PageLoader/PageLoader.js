import React from "react";
import { ReactComponent as LoaderSvg } from "../../assets/covid.svg";
import styled, { keyframes } from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
0% {
  transform: scale(0.5);
  opacity: 0.5;
  transform-origin: center;
}
100% {
  transform: scale(1);
  opacity: 1;
  transform-origin: center;
}
`;

const StyledLogo = styled(LoaderSvg)`
  animation: ${rotate} infinite 2s alternate-reverse linear;
  height: 10rem;
  width: 10rem;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: 20vh;
  .covidSvg3 {
    animation: ${pulse} infinite 0.5s alternate-reverse linear;
  }
  .covidSvg4 {
    animation: ${pulse} infinite 2s reverse linear;
  }
  .covidSvg5 {
    animation: ${pulse} infinite 1s alternate linear;
  }
  .covidSvg2 {
    animation: ${pulse} 1s linear;
    &:hover {
      animation-play-state: paused;
      cursor: pointer;
    }
  }
`;

const PageLoader = () => {
  return (
    <Container fluid>
      <Row>
        <StyledLogo />
      </Row>
    </Container>
  );
};

export default PageLoader;
