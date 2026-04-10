import AnimateIn from "@/app/components/framer/animate-in";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import React from "react";
import StyledSinglePoint from "@/app/components/stlyed-single-point";

const Points = ({ slice }) => {
  const points = slice?.primary?.points;
  return (
    <div>
      <AnimateIn className={"mb-5"}>
        <StyledPrismicRichTextSingle
          field={slice?.primary?.points_prefix}
          className="text-title-base-blog text-text-secondary"
        />
      </AnimateIn>
      <div className="point-container mb-8 md:mb-12">
        {points?.map(({ point }, idx) => {
          return <StyledSinglePoint key={point} point={point} idx={idx} />;
        })}
      </div>
      <AnimateIn delay={points?.length * 0.1}>
        <StyledPrismicRichTextSingle
          field={slice?.primary?.points_suffix}
          className="text-title-base text-text-secondary"
        />
      </AnimateIn>
    </div>
  );
};

export default Points;
