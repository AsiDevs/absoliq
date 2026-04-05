import StyledContainer from "@/app/components/styled-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import FadeOverlay from "@/slices/LogoCarousel/components/fade-overlay";
import LogoList from "@/slices/LogoCarousel/components/logo-list";
import clsx from "clsx";

const spacing = 30; // Please use an even number
const speedFactor = 4; // increasing the number will slow down the animation

const LogoCarousel = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <StyledContainer
        slice={slice}
        paddingX={!slice.primary.full_width}
        parentClass={clsx({ "max-w-full": slice.primary.full_width })}
      >
        <StyledPrismicRichTextSingle
          field={slice?.primary?.title}
          className={"test-lg text-center"}
        />
        <div className="relative overflow-hidden">
          <FadeOverlay enabled={slice?.primary?.fade_effect} />
          <LogoList
            images={slice?.primary?.images}
            spacing={spacing}
            speedFactor={speedFactor}
          />

          {slice?.primary?.two_rows && (
            <LogoList
              reverse
              images={slice?.primary?.images}
              spacing={spacing}
              speedFactor={speedFactor}
            />
          )}
        </div>
      </StyledContainer>
    </section>
  );
};

export default LogoCarousel;
