import React, { useId } from "react";
import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import { CarouselNavigation } from "../components/carousel-slider";
import TestimonialSlider from "../components/testimonial-slider";

const Testimonies = ({ slice }) => {
  const cards = slice?.primary?.cards || [];
  const generatedId = useId().replaceAll(":", "");
  const navigationId = slice?.id || generatedId;

  if (cards.length < 1) return null;

  return (
    <StyledContainer
      slice={slice}
      paddingX={false}
      parentClass="max-w-[1600px]!"
    >
      <div className="mx-auto">
        <div className="px-4 md:px-10 xl:px-20 add-gap max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-y-8 xl:flex-row justify-between xl:items-end">
            <StyledSectionTitle slice={slice} leftAligned className="mb-0!" />
            <CarouselNavigation navigationId={navigationId} />
          </div>
        </div>

        <div className="overflow-hidden">
          <TestimonialSlider cards={cards} navigationId={navigationId} />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Testimonies;
