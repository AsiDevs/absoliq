import React from "react";
import Point from "./point";

const Points = ({ slice }) => {
  return (
    <div className="flex flex-col gap-y-10 lg:grid grid-cols-12 lg:gap-x-6 xl:gap-x-20">
      <PointsContainer
        title={slice?.primary?.negatives_title}
        points={slice?.primary?.negatives}
        variant="negative"
      />
      <PointsContainer
        title={slice?.primary?.positives_title}
        points={slice?.primary?.positives}
      />
    </div>
  );
};

export default Points;

const PointsContainer = ({ title, points, variant = "positive" }) => {
  return (
    <div className="col-span-12 md:col-span-6">
      <h3 className="text-title-medium text-text-secondary font-medium text-center mb-6 md:mb-8 lg:max-w-110 xl:max-w-none mx-auto">
        {title}
      </h3>
      <div className="flex flex-col gap-y-3">
        {points?.map(({ point }, idx) => {
          return (
            <Point
              point={point}
              idx={idx}
              key={idx + point}
              variant={variant}
            />
          );
        })}
      </div>
    </div>
  );
};
