import React from "react";
import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import Tiles from "../components/tiles";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} leftAligned />
      <Tiles slice={slice} />
    </StyledContainer>
  );
};

export default Main;
