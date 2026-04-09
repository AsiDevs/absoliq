import StyledContainer from "@/app/components/styled-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import StyledSectionTitle from "@/app/components/styled-section-title";
import Points from "../components/points";
import AnimateIn from "@/app/components/framer/animate-in";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice} maxWLarge className="xl:px-0!">
      <div className="px-4 md:px-6 py-6 md:py-8 xl:p-20 rounded-[18px] bg-primary-white">
        <div className="xl:flex flex-row justify-between gap-x-5">
          <AnimateIn className="xl:max-w-[630px]">
            <StyledSectionTitle slice={slice} leftAligned />
          </AnimateIn>
          <AnimateIn className="xl:max-w-[550px] xl:pt-30">
            <StyledPrismicRichTextSingle
              field={slice?.primary?.wwf_description}
              className="text-body-medium mb-8 md:mb-12"
            />
            <Points slice={slice} />
          </AnimateIn>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Main;
