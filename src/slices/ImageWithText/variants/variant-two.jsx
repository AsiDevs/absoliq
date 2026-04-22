import StyledContainer from "@/app/components/styled-container";
import AnimateIn from "@/app/components/framer/animate-in";
import { PrismicNextImage } from "@prismicio/next";
import StyledSectionTitle from "@/app/components/styled-section-title";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import StyledSinglePoint from "@/app/components/stlyed-single-point";

const VariantTwo = ({ slice }) => {
  const description = slice?.primary?.body_description;
  const image = slice?.primary?.image;
  const points = slice?.primary?.points;

  return (
    <StyledContainer slice={slice} className="2xl:px-0!" maxWLarge>
      <div className="grid grid-cols-12 gap-y-7 xl:gap-y-0 xl:gap-x-7">
        <AnimateIn
          className="rounded-xl bg-primary-white px-4 py-6 md:p-12 col-span-12 xl:col-span-6"
          options={{ delay: 0 }}
        >
          <div>
            <div className="mb-18 md:mb-50 xl:mb-45">
              <StyledSectionTitle slice={slice} leftAligned />
            </div>
            <div className="point-container">
              {points?.map(({ point }, idx) => {
                return (
                  <StyledSinglePoint key={point} point={point} idx={idx} />
                );
              })}
            </div>
            <AnimateIn delay={points?.length * 0.1} className={"mt-6"}>
              <StyledPrismicRichTextSingle
                field={description}
                className="text-body-medium text-text-secondary"
              />
            </AnimateIn>
          </div>
        </AnimateIn>
        <AnimateIn
          className="col-span-12 xl:col-span-6"
          options={{ delay: 0.1 }}
        >
          <div className="relative rounded-xl h-full overflow-hidden">
            <PrismicNextImage
              field={image}
              className="object-cover block h-full"
            />
          </div>
        </AnimateIn>
      </div>
    </StyledContainer>
  );
};

export default VariantTwo;
