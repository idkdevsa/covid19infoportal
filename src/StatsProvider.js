import React, { useState, createContext } from "react";
import App from "./App";

import { Countries } from "./Api/CountryListData";
import useFetchData from "./CustomHooks/useFetchData/useFetchData";
import useDataFilter from "./CustomHooks/useDataFilter/useDataFilter";

const StatsContext = createContext();

function StatsProvider() {
  const [currentCountry, setCurrentCountry] = useState("All");

  const [{ data, isLoading }] = useFetchData(
    "https://covid-193.p.rapidapi.com",
    "/statistics",
    {
      initialData: [],
    },
    {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
    true
  );

  // handleQuery sets state for current country

  const [{ filteredData }] = useDataFilter(
    isLoading,
    [data, Countries],
    "country",
    currentCountry
  );

  // use in components that submit new country for filtering

  const handleQuery = (e) => {
    setCurrentCountry(e);
  };

  // TODO split context to avoid rerendering

  return (
    <StatsContext.Provider
      value={{
        Countries,
        currentCountry,
        filteredData,
        isLoading,
        handleQuery,
      }}
    >
      <App />
    </StatsContext.Provider>
  );
}

export { StatsProvider, StatsContext };
