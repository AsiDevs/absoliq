import StyledSectionTitle from "@/app/components/styled-section-title";
import StyledContainerVariant from "@/app/components/styled-container-variant";
import React from "react";
import Testimonials from "../components/testimonials";
import Points from "../components/points";

const Main = ({ slice }) => {
  return (
    <StyledContainerVariant slice={slice}>
      <div className="max-w-155 mx-auto">
        <StyledSectionTitle slice={slice} />
      </div>
      <Points slice={slice} />
      <Testimonials slice={slice} />
    </StyledContainerVariant>
  );
};

export default Main;
