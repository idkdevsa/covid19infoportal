import React from "react";
import Navbar from "react-bootstrap/Navbar";
import CountryList from "../../Components/CountryList/CountryList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterMain({ countries, currentCountry, handleQuery }) {
  return (
    <Row className="footermain">
      <Col>
        <Navbar collapseOnSelect expand="md" fixed="bottom">
          <Container fluid>
            <Col md={{ span: 4, offset: 4 }}>
              <CountryList
                Countries={countries}
                currentCountry={currentCountry}
                handleQuery={handleQuery}
              />
            </Col>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}

export default FooterMain;
