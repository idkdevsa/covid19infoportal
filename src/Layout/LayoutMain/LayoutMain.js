import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { CardHeadingIcon, TableIcon } from "../../assets";
import StatTable from "../../Components/StatTable/StatTable";
import StatCard from "../../Components/StatCard/StatCard";
import useChangeView from "../../CustomHooks/useChangeView/useChangeView";
import CountryInfoHeader from "../../Components/CountryInfoHeader/CountryInfoHeader";
import CountryInfoModal from "../../Components/CountryInfoModal/CountryInfoModal";

function LayoutMain({ statData }) {
  const viewArr = [
    {
      id: 1,
      name: "Card View",
      icon: CardHeadingIcon,
    },
    {
      id: 2,
      name: "Table View",
      icon: TableIcon,
    },
  ];

  const [
    { currentView, animated },
    renderDropdown,
    transitions,
  ] = useChangeView(viewArr, "outline-success", "Change View");

  const renderView = () => {
    return currentView === 1 ? (
      <animated.div>
        {" "}
        <StatCard statData={statData} />
      </animated.div>
    ) : currentView === 2 ? (
      <animated.div>
        {" "}
        <StatTable statData={statData} />
      </animated.div>
    ) : (
      "No Data"
    );
  };

  return (
    <Row className="layoutmain">
      <Col>
        <CardDeck>
          <Card border="danger" className="text-center">
            <Card.Header as="h4">
              <CountryInfoHeader statData={statData} />
              <br />
              {renderDropdown()} <CountryInfoModal statData={statData} />{" "}
            </Card.Header>
            <Card.Text></Card.Text>
            <Card.Body>{transitions(renderView())}</Card.Body>
          </Card>
        </CardDeck>
      </Col>
    </Row>
  );
}

export default LayoutMain;
