import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const CountryInfoModal = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const VertModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Information on {props.statdata.value}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardDeck>
            <Card border="primary">
              <Card.Body>
                <Card.Title>Flag</Card.Title>
                <Card.Text>
                  <img
                    src={props.statdata.flagurl}
                    alt={props.statdata.value}
                    height="40rem"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary">
              <Card.Body>
                <Card.Title>Population</Card.Title>
                <Card.Text>{props.statdata.population} </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary">
              <Card.Body>
                <Card.Title>Capital City</Card.Title>
                <Card.Text>{props.statdata.capital}</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <br />
          <CardDeck>
            <Card border="primary">
              <Card.Body>
                <Card.Title>Languages</Card.Title>
                <Card.Text>
                  {props.statdata.language.map(
                    (l, index) => `${index}: ${l.name} - ${l.nativename}, `
                  )}{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary">
              <Card.Body>
                <Card.Title>Currencies</Card.Title>
                <Card.Text>
                  {props.statdata.currency.map((c) => [c.name])}{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary">
              <Card.Body>
                <Card.Title>Alternative Name/s</Card.Title>
                <Card.Text>
                  {props.statdata.altname.map(
                    (n, index) => `${index} - ${n}, `
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Country Info
      </Button>

      <VertModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        statdata={props.statData}
      />
    </>
  );
};

export default CountryInfoModal;
