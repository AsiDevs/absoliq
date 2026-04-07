import StyledSectionTitle from "@/app/components/styled-section-title";
import StyledContainer from "@/app/components/styled-container";
import React from "react";
import clsx from "clsx";
import TilesContainer from "../components/tiles-container";
import StyledButtonContainer from "@/app/components/styled-button/styled-button-container";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} />
      <div
        className={clsx({
          "add-gap": slice?.primary.buttons?.length > 0,
        })}
      >
        <TilesContainer slice={slice} />
      </div>
      <StyledButtonContainer slice={slice} />
    </StyledContainer>
  );
};

export default Main;
