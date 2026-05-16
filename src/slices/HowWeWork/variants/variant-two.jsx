import StyledContainerVariant from "@/app/components/styled-container-variant";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import StyledSectionTitle from "@/app/components/styled-section-title";
import Points from "../components/points";
import AnimateIn from "@/app/components/framer/animate-in";
import clsx from "clsx";

const VariantTwo = ({ slice }) => {
  return (
    <StyledContainerVariant slice={slice} maxWLarge className="2xl:px-0!">
      <div className="xl:flex flex-row justify-between gap-x-5">
        <AnimateIn className="xl:max-w-[630px]">
          <StyledSectionTitle slice={slice} leftAligned />
        </AnimateIn>
        <div
          className={clsx({
            "xl:max-w-[550px] xl:pt-30": true,
          })}
        >
          <AnimateIn className={"flex flex-col gap-y-8 md:gap-y-12"}>
            <AnimateIn>
              <StyledPrismicRichTextSingle
                field={slice?.primary?.wwf_description}
                className="text-body-medium text-[#000000B2]"
              />
            </AnimateIn>
            <Points
              points={slice?.primary?.points}
              prefix={slice?.primary?.points_prefix}
              slice={slice}
              variant="secondary"
              className="mb-8 md:mb-12"
            />
          </AnimateIn>
          <AnimateIn>
            <Points
              points={slice?.primary?.points_two}
              prefix={slice?.primary?.points_two_prefix}
              suffix={slice?.primary?.points_two_suffix}
              summary={slice?.primary?.points_summary}
              slice={slice}
            />
          </AnimateIn>
        </div>
      </div>
    </StyledContainerVariant>
  );
};

export default VariantTwo;
