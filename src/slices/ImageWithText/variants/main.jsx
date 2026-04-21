import StyledContainer from "@/app/components/styled-container";
import AnimateIn from "@/app/components/framer/animate-in";
import { asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import StyledSectionTitle from "@/app/components/styled-section-title";

const Main = ({ slice }) => {
  const description = slice?.primary?.body_description;
  const image = slice?.primary?.image;

  return (
    <StyledContainer slice={slice} className="2xl:px-0!" maxWLarge>
      <div className="grid grid-cols-12 gap-y-7 xl:gap-y-0 xl:gap-x-7">
        <AnimateIn
          className="rounded-xl bg-primary-white px-4 py-6 md:p-12 col-span-12 xl:col-span-6"
          options={{ delay: 0 }}
        >
          <div className="">
            <div className="mb-18 md:mb-50 xl:mb-45">
              <StyledSectionTitle slice={slice} leftAligned />
            </div>
            {asText(description) && (
              <div>
                <PrismicRichText
                  field={description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className={"text-body-medium"}>{children}</p>
                    ),
                    heading4: ({ children }) => (
                      <h4 className={"text-title-base"}>{children}</h4>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-medium">{children}</strong>
                    ),
                    list: ({ children }) => (
                      <div className="space-y-5 md:space-y-6">{children}</div>
                    ),
                  }}
                />
              </div>
            )}
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

export default Main;
