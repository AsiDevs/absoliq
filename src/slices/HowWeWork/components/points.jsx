import AnimateIn from "@/app/components/framer/animate-in";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import React from "react";
import StyledSinglePoint from "@/app/components/stlyed-single-point";

const Points = ({
  slice,
  variant = "primary",
  points = [],
  prefix,
  suffix,
  summary,
  className = "",
}) => {
  if (!points || points?.length < 1) return null;
  return (
    <div className={className}>
      {prefix && (
        <AnimateIn className={"mb-5"}>
          <StyledPrismicRichTextSingle
            field={prefix}
            className="text-title-base-blog text-text-secondary"
          />
        </AnimateIn>
      )}
      <div>
        <div className="point-container">
          {points?.map(({ point }, idx) => {
            return (
              <StyledSinglePoint
                key={point}
                point={point}
                idx={idx}
                variant={variant}
              />
            );
          })}
        </div>
        {summary && (
          <AnimateIn delay={points?.length * 0.1} className={"mt-5"}>
            <StyledPrismicRichTextSingle
              field={summary}
              className="text-title-base-blog text-text-secondary"
            />
          </AnimateIn>
        )}
      </div>
      {suffix && (
        <AnimateIn delay={points?.length * 0.1} className={"mt-8 md:mt-12"}>
          <StyledPrismicRichTextSingle
            field={suffix}
            className="text-title-base text-text-secondary"
          />
        </AnimateIn>
      )}
    </div>
  );
};

export default Points;
