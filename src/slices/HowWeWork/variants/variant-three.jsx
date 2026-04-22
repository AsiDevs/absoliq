import StyledContainer from "@/app/components/styled-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import StyledSectionTitle from "@/app/components/styled-section-title";
import Points from "../components/points";
import AnimateIn from "@/app/components/framer/animate-in";
import clsx from "clsx";

const VariantThree = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="xl:flex flex-row justify-between gap-x-5">
        <AnimateIn className="xl:max-w-[630px]">
          <StyledSectionTitle slice={slice} leftAligned />
        </AnimateIn>
        <div
          className={clsx({
            "xl:max-w-[550px]": true,
          })}
        >
          <AnimateIn className={"flex flex-col gap-y-8 md:gap-y-12"}>
            <StyledPrismicRichTextSingle
              field={slice?.primary?.wwf_description}
              className="text-body-medium text-[#000000B2]"
            />
            <Points
              points={slice?.primary?.points_two}
              prefix={slice?.primary?.points_prefix}
              slice={slice}
            />
            <StyledPrismicRichTextSingle
              field={slice?.primary?.points_two_suffix}
              className="text-body-medium text-text-secondary"
            />
          </AnimateIn>
        </div>
      </div>
    </StyledContainer>
  );
};

export default VariantThree;
