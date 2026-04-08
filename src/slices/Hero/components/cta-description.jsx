import clsx from "clsx";
import React from "react";
import AnimateIn from "@/app/components/framer/animate-in";

const CTADescription = ({ slice, leftAligned }) => {
  const ctaDescription = slice?.primary?.cta_description || "";
  if (!ctaDescription) return;
  return (
    <AnimateIn
      options={{
        delay: 0.4,
      }}
    >
      <p
        className={clsx({
          "text-body-small mt-2.25": true,
          "text-center": !leftAligned,
          "text-left": leftAligned,
        })}
      >
        {ctaDescription}
      </p>
    </AnimateIn>
  );
};

export default CTADescription;
