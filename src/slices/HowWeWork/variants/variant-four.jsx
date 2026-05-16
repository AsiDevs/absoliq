import StyledContainerVariant from "@/app/components/styled-container-variant";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import StyledSectionTitle from "@/app/components/styled-section-title";
import AnimateIn from "@/app/components/framer/animate-in";
import PointsRichtext from "../components/points-richtext";

const VariantFour = ({ slice }) => {
  return (
    <StyledContainerVariant slice={slice} maxWLarge className="2xl:px-0!">
      <div className="xl:flex flex-row justify-between gap-x-5">
        <AnimateIn className="xl:max-w-[630px]">
          <StyledSectionTitle slice={slice} leftAligned />
        </AnimateIn>
        <AnimateIn className="xl:max-w-[550px] xl:pt-[290px]">
          <PointsRichtext
            points={slice?.primary?.points_two}
            prefix={slice?.primary?.points_prefix}
            suffix={slice?.primary?.points_suffix}
            slice={slice}
          />
          <AnimateIn delay={slice?.primary?.points_two?.length * 0.1}>
            <StyledPrismicRichTextSingle
              field={slice?.primary?.wwf_description}
              className="text-body-medium mt-8 md:mt-12"
            />
          </AnimateIn>
        </AnimateIn>
      </div>
    </StyledContainerVariant>
  );
};

export default VariantFour;
