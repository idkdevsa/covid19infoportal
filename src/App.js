import React, { useContext } from "react";
import { StatsContext } from "./StatsProvider";

import Container from "react-bootstrap/Container";
import LayoutMain from "./Layout/LayoutMain/LayoutMain";
import FooterMain from "./Layout/FooterMain/FooterMain";
import HeaderMain from "./Layout/HeaderMain/HeaderMain";
import PageLoader from "./Components/PageLoader/PageLoader";

const App = () => {
  const {
    filteredData,
    isLoading,
    Countries,
    currentCountry,
    handleQuery,
  } = useContext(StatsContext);

  return (
    <Container fluid={true} style={{ height: "100vh" }}>
      <HeaderMain />
      {isLoading ? <PageLoader /> : <LayoutMain statData={filteredData} />}
      <FooterMain
        countries={Countries}
        currentCountry={currentCountry}
        handleQuery={handleQuery}
      />
    </Container>
  );
};

export default App;
