import React, { useId } from "react";
import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import StyledButtonContainer from "@/app/components/styled-button/styled-button-container";
import CarouselSlider, {
  CarouselNavigation,
} from "../components/carousel-slider";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";

const Main = ({ slice }) => {
  const buttons = slice?.primary?.buttons;
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
      <div className="px-4 md:px-10 xl:px-20 add-gap max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-y-8 xl:flex-row justify-between xl:items-end">
          <StyledSectionTitle slice={slice} leftAligned className="mb-0!" />
          {buttons?.length < 1 && (
            <CarouselNavigation navigationId={navigationId} />
          )}
        </div>

        {buttons?.length > 0 && (
          <div className="flex items-end justify-between gap-2 mt-8">
            <div className="flex flex-col gap-2">
              <StyledButtonContainer slice={slice} leftAligned />
              <StyledPrismicRichTextSingle
                field={slice?.primary?.cta_text}
                className="text-body-small"
              />
            </div>
            <CarouselNavigation navigationId={navigationId} />
          </div>
        )}
      </div>
      <div className="overflow-hidden">
        <CarouselSlider cards={cards} navigationId={navigationId} />
      </div>
    </StyledContainer>
  );
};

export default Main;
