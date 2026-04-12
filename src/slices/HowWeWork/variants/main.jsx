import StyledContainerVariant from "@/app/components/styled-container-variant";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import StyledSectionTitle from "@/app/components/styled-section-title";
import Points from "../components/points";
import AnimateIn from "@/app/components/framer/animate-in";
import Tiles from "../components/tiles";

const Main = ({ slice }) => {
  return (
    <StyledContainerVariant slice={slice} maxWLarge className="2xl:px-0!">
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
      <Tiles slice={slice} />
    </StyledContainerVariant>
  );
};

export default Main;
