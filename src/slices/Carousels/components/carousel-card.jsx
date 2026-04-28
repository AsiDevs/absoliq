import AnimateIn from "@/app/components/framer/animate-in";
import { PrismicNextImage } from "@prismicio/next";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import clsx from "clsx";

const CarouselCard = ({ card, index }) => {
  const displayIndex = index + 1;

  return (
    <AnimateIn
      delay={0.15 * index}
      className="carousel-card relative h-full w-[280px] max-w-[280px] overflow-hidden rounded-md bg-[#fff] md:w-[320px] md:max-w-[320px] xl:w-[415px] xl:max-w-[415px]"
    >
      <div className="relative z-[2] flex flex-col p-6 gap-y-[150px] md:gap-y-[140px] h-full justify-between">
        <div>
          <div>
            {card?.icon?.url && (
              <PrismicNextImage
                field={card.icon}
                width={48}
                height={48}
                className="mb-3 h-12 w-12 object-contain"
              />
            )}
            <StyledPrismicRichTextSingle
              field={card?.caption}
              className="text-body-base mb-2"
            />
          </div>

          <StyledPrismicRichTextSingle
            field={card?.title}
            className="text-title-medium max-w-[340px]"
          />
        </div>

        <div>
          <StyledPrismicRichTextSingle
            field={card?.description}
            className="text-title-small"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className={clsx({
          "pointer-events-none absolute bottom-[-80px] z-[1] text-[340px] leading-none font-medium text-[#eceae6] opacity-65": true,
          "right-[-64px]": index === 0,
          "right-[-20px]": index !== 0,
        })}
      >
        {displayIndex}
      </div>
    </AnimateIn>
  );
};

export default CarouselCard;
