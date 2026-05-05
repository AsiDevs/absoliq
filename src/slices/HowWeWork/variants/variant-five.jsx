import React from "react";
import StyledContainerVariant from "@/app/components/styled-container-variant";
import StyledSectionTitle from "@/app/components/styled-section-title";
import AnimateIn from "@/app/components/framer/animate-in";
import TilesV2 from "../components/tiles-v2";
import StyledButtonContainer from "@/app/components/styled-button/styled-button-container";

const VariantFive = ({ slice }) => {
  return (
    <StyledContainerVariant slice={slice} maxWLarge className="2xl:px-0!">
      <div className="">
        <AnimateIn>
          <StyledSectionTitle
            slice={slice}
            leftAligned
            className={"max-w-none!"}
          />
        </AnimateIn>
        <TilesV2 slice={slice} />
        <div className="mt-[46px]">
          <StyledButtonContainer slice={slice} leftAligned />
        </div>
      </div>
    </StyledContainerVariant>
  );
};

export default VariantFive;
