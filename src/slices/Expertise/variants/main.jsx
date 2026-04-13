import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import React from "react";
import Cards from "../components/cards";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} />
      <Cards slice={slice} />
    </StyledContainer>
  );
};

export default Main;
