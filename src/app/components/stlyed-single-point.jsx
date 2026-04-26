import React from "react";
import AnimateIn from "./framer/animate-in";
import Image from "next/image";
import clsx from "clsx";
import Point from "@/app/assets/icons/point.svg";

const StyledSinglePoint = ({ variant = "primary", point, idx, className }) => {
  if (!point) return null;
  return (
    <AnimateIn
      delay={idx * 0.1}
      className={clsx({
        "flex items-start justify-start gap-x-3": true,
        [className]: true,
      })}
    >
      <div
        className={clsx({
          "rounded-[4.5px] w-7.5 h-7.5 min-w-7.5 min-h-7.5 flex items-center justify-center": true,
          "bg-primary-dark": variant === "primary",
          "bg-secondary-light": variant === "secondary",
        })}
      >
        <Image src={Point.src} alt="point" width={18} height={18.75} />
      </div>
      <p className="text-body-base text-text-heading pt-1">{point}</p>
    </AnimateIn>
  );
};

export default StyledSinglePoint;
