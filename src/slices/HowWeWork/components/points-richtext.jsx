import React from "react";
import StyledSinglePointRichText from "@/app/components/styled-single-point-richtext";

const PointsRichtext = ({
  variant = "primary",
  points = [],
  className = "",
}) => {
  if (!points || points?.length < 1) return null;
  return (
    <div className={className}>
      <div className="point-container">
        {points?.map(({ point }, idx) => {
          return (
            <StyledSinglePointRichText
              key={point}
              point={point}
              idx={idx}
              variant={variant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PointsRichtext;
