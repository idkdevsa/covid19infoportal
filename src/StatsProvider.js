import React, { useState, createContext } from "react";
import { Countries } from "./Api/CountryListData";
import useFetchData from "./CustomHooks/useFetchData/useFetchData";
import App from "./App";
import useDataFilter from "./CustomHooks/useDataFilter/useDataFilter";

const StatsContext = createContext();

function StatsProvider() {
  // setup state hooks
  const [currentCountry, setCurrentCountry] = useState("All");
  //setup custom hooks

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

  const [{ filteredData }] = useDataFilter(
    isLoading,
    [data, Countries],
    "country",
    currentCountry
  );

  const handleQuery = (e) => {
    setCurrentCountry(e);
  };

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
