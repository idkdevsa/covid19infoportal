import React from "react";
import { ReactComponent as CovidLightSvg } from "../../assets/covidlight.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeaderMain() {
  return (
    <Row className="headermain">
      <Col>
        <Navbar collapseOnSelect expand="md" fixed="top">
          <Nav className="mr-auto">
            <Container fluid={true}>
              <Row>
                <Col>
                  <CovidLightSvg height="30px" width="30px" /> Covid-19 Info
                  Portal
                </Col>
              </Row>
            </Container>
          </Nav>
          <Nav></Nav>
        </Navbar>
      </Col>
    </Row>
  );
}

export default HeaderMain;
