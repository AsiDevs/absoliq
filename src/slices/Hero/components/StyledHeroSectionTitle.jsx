import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import clsx from "clsx";

const StyledHeroSectionTitle = ({ slice, wrapperClassName }) => {
  return (
    <div className={clsx("text-center", wrapperClassName)}>
      <StyledPrismicRichTextSingle
        field={slice?.primary?.subtitle}
        className="text-body-base text-primary-light"
      />
      <StyledPrismicRichTextSingle
        field={slice?.primary?.title}
        className="text-title-3x-large text-text-heading font-medium mx-4 leading-[88px]! md:mx-0 my-[10px] md:my-[20px]"
      />
      <StyledPrismicRichTextSingle
        field={slice?.primary?.description}
        className="text-body-base text-text-base md:mx-[49px] xl:mx-0 xl:mr-[44px]"
      />
    </div>
  );
};

export default StyledHeroSectionTitle;
