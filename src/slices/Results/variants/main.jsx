import React from "react";
import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import ResultsContainer from "../components/results-container";
import StyledButtonContainer from "@/app/components/styled-button/styled-button-container";
import clsx from "clsx";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice} paddingX={false}>
      <div className="section-padding-x">
        <StyledSectionTitle slice={slice} />
      </div>
      <div
        className={clsx({
          "add-gap": slice?.primary.buttons?.length > 0,
        })}
      >
        <ResultsContainer slice={slice} />
      </div>
      <StyledButtonContainer slice={slice} />
    </StyledContainer>
  );
};

export default Main;
