import { PrismicNextImage } from "@prismicio/next";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import AnimateIn from "@/app/components/framer/animate-in";

const TestimonialStat = ({ value, description }) => {
  if (!value && !description) return null;

  return (
    <div className="rounded-sm bg-[#F3F3F3] p-3">
      {value && <p className="text-title-medium">{value}</p>}
      {description && <p className="text-body-small-s">{description}</p>}
    </div>
  );
};

const TestimonialCard = ({ card, idx }) => {
  return (
    <AnimateIn
      delay={0.15 * idx}
      className="flex h-full w-[90vw] max-w-[90vw] flex-col rounded-md bg-white p-3 md:w-[522px] md:max-w-[522px]"
    >
      <div className="flex h-full flex-col gap-y-[45px]">
        {card?.logo?.url && (
          <PrismicNextImage
            field={card.logo}
            className="w-auto max-w-[70px] object-contain md:h-20"
          />
        )}

        <div className="border-l-[2px] border-[#111111] pl-7 ml-4">
          <StyledPrismicRichTextSingle
            field={card?.title}
            className="text-title-base"
          />
        </div>

        <div className="mt-auto grid grid-cols-1 gap-3 md:grid-cols-2">
          <TestimonialStat
            value={card?.stat_one}
            description={card?.stat_one_description}
          />
          <TestimonialStat
            value={card?.stat_two}
            description={card?.stat_two_description}
          />
        </div>
      </div>
    </AnimateIn>
  );
};

export default TestimonialCard;
