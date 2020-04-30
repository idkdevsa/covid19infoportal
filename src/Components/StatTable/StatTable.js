import React from "react";
import { getDayName } from "../../HelperFunctions/HelperFunctions";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

function StatTable(props) {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Date Updated</th>
          <th>Time</th>
          <th>Active Cases</th>
          <th>Critical Cases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`${getDayName(props.statData.day)} ${props.statData.day}`}</td>
          <td>{props.statData.time.split(/[T+]/).slice(1, 2)}</td>
          <td>
            {props.statData.cases.active}{" "}
            <Badge variant="warning">{props.statData.cases.new}</Badge>
          </td>
          <td>{props.statData.cases.critical}</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th>Total Deaths</th>
          <th>Total Recovered</th>
          <th>Total Tests</th>
          <th>Total Cases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {props.statData.deaths.total}{" "}
            <Badge variant="danger">{props.statData.deaths.new}</Badge>
          </td>

          <td>
            <Badge variant="success">{props.statData.cases.recovered}</Badge>
          </td>
          <td>{props.statData.tests.total}</td>
          <td>{props.statData.cases.total}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StatTable;
