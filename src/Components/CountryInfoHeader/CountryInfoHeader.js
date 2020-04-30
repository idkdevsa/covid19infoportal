import React from "react";

const CountryInfoHeader = (props) => {
  return (
    <>
      Covid-19 Stats for {props.statData.country}{" "}
      <img
        alt={`Flag of ${props.statData.country}`}
        src={props.statData.flagurl}
        height="20rem"
        className="d-inline-block align-top"
      />
      <br />
    </>
  );
};

export default CountryInfoHeader;
