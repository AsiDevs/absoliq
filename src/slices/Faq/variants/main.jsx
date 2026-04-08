import FAQList from "../components/faq-list";
import StyledButtonContainer from "@/app/components/styled-button/styled-button-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import { PrismicNextImage } from "@prismicio/next";

const Main = ({ slice }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-y-8 md:gap-y-10 xl:gap-y-0 xl:gap-x-21">
      <div className="flex flex-col justify-between xl:max-w-[520px]">
        <StyledPrismicRichTextSingle
          className="text-title-2x-large text-text-heading"
          field={slice?.primary?.title}
        />
        <div className="hidden xl:block">
          <DescriptionButtonContainer slice={slice} />
        </div>
      </div>
      <FAQList list={slice?.primary?.faqs} />
      <div className="xl:hidden">
        <DescriptionButtonContainer slice={slice} />
      </div>
    </div>
  );
};

const DescriptionButtonContainer = ({ slice }) => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-3 xl:flex-col xl:items-start">
      <div className="flex items-center gap-x-4">
        <PrismicNextImage
          field={slice?.primary?.description_image}
          width={71}
          height={42}
          alt="faq description tag image"
          className="max-w-17.75"
        />
        <StyledPrismicRichTextSingle
          className="text-body-small text-text-heading"
          field={slice?.primary?.description}
        />
      </div>
      <StyledButtonContainer slice={slice} />
    </div>
  );
};

export default Main;
