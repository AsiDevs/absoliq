import React from "react";
import LogoList from "../components/logo-list";
import FadeOverlay from "../components/fade-overlay";
import StyledContainer from "@/app/components/styled-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <StyledPrismicRichTextSingle
        field={slice?.primary?.title}
        className={"text-body-small text-center mb-3 md:mb-6"}
      />
      <div className="relative overflow-hidden rounded-[12px]">
        <FadeOverlay />
        <LogoList images={slice?.primary?.images} />
      </div>
    </StyledContainer>
  );
};

export default Main;
