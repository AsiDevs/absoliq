import React from "react";
import AnimateIn from "@/app/components/framer/animate-in";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import { PrismicNextImage } from "@prismicio/next";

const TestimonialCard = ({ testimony }) => {
  return (
    <AnimateIn
      className={
        "flex flex-col gap-y-20 bg-[#FCFCFC] rounded-lg border border-border-primary py-3 px-4.5 testimonial-card"
      }
    >
      <StyledPrismicRichTextSingle field={testimony?.testimony} />
      <div className="flex items-center gap-x-2">
        <PrismicNextImage
          field={testimony?.image}
          width={48}
          height={48}
          className="w-full max-w-12 min-w-12"
        />
        <div>
          <h4 className="text-body-small text-text-heading">
            {testimony?.name}
          </h4>
          <p className="text-body-small-s text-text-heading">
            {testimony?.position}
          </p>
        </div>
      </div>
    </AnimateIn>
  );
};

export default TestimonialCard;
