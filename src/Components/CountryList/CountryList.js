import React from "react";
import Select from "react-select";

const CountryList = (props) => {
  const handleChange = (selectedOption) => {
    props.handleQuery(selectedOption.value);
  };

  return (
    <>
      <Select
        menuPlacement="auto"
        placeholder="Select Country..."
        defaultValue={props.currentCountry}
        options={props.Countries}
        onChange={handleChange}
      />
    </>
  );
};

export default CountryList;
