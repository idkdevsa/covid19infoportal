import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import { getDayName } from "../../HelperFunctions/HelperFunctions";
import CardDeck from "react-bootstrap/CardDeck";

function StatCard(props) {
  return (
    <CardDeck>
      <Card border="primary">
        <Card.Body>
          <Card.Title>Updated on</Card.Title>
          <Card.Text>
            {`${getDayName(props.statData.day)} ${props.statData.day}`} <br />
            at {props.statData.time.split(/[T+]/).slice(1, 2)}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary">
        <Card.Body>
          <Card.Title>Total Cases</Card.Title>
          <Card.Text>
            {props.statData.cases.total}
            <br />
            <Badge variant="warning">
              Active - <b>{props.statData.cases.active}</b>
            </Badge>{" "}
            <Badge variant="success">
              Recovered - <b>{props.statData.cases.recovered}</b>
            </Badge>{" "}
            <Badge variant="danger">
              Deaceased - <b>{props.statData.deaths.total}</b>
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary">
        <Card.Body>
          <Card.Title>Total Tests</Card.Title>
          <Card.Text>{props.statData.tests.total}</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default StatCard;
