import StyledContainer from "@/app/components/styled-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

const RichTextSlice = ({ slice }) => {
  const defaultComponents = {
    heading1: ({ children }) => (
      <h1 className="text-title-3x-large mt-12 mb-7 first:mt-0 last:mb-0">
        {children}
      </h1>
    ),
    heading2: ({ children }) => (
      <h2 className="text-title-2x-large mt-12 mb-7 first:mt-0 last:mb-0">
        {children}
      </h2>
    ),
    heading3: ({ children }) => (
      <h3 className="text-title-x-large mt-12 mb-7 first:mt-0 last:mb-0">
        {children}
      </h3>
    ),
    heading4: ({ children }) => (
      <h4 className="text-title-large mt-12 mb-7 first:mt-0 last:mb-0">
        {children}
      </h4>
    ),
    heading5: ({ children }) => (
      <h5 className="text-title-medium mt-12 mb-7 first:mt-0 last:mb-0">
        {children}
      </h5>
    ),
    heading6: ({ children }) => (
      <h6 className="text-title-base mb-5">{children}</h6>
    ),
    paragraph: ({ children }) => (
      <p className="text-body-base mb-7 last:mb-0  text-text-secondary font-normal">
        {children}
      </p>
    ),
    oList: ({ children }) => (
      <ol className="pl-4 mb-7 last:mb-0 md:pl-6 text-body-base text-text-secondary">
        {children}
      </ol>
    ),
    oListItem: ({ children }) => (
      <li className="pl-1 mb-1 list-decimal last:mb-0 md:pl-2 text-body-base">
        {children}
      </li>
    ),
    list: ({ children }) => (
      <ul className="pl-4 mb-7 last:mb-0 md:pl-6 text-body-base text-text-secondary">
        {children}
      </ul>
    ),
    listItem: ({ children }) => (
      <li className="pl-1 mb-1 list-disc last:mb-0 md:pl-2 text-body-base text-text-secondary">
        {children}
      </li>
    ),
    preformatted: ({ children }) => (
      <pre className="p-4 rounded-sm mb-7 bg-slate-100 last:mb-0 md:p-8text-body-base text-text-secondary">
        <code>{children}</code>
      </pre>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-body-base text-text-secondary">
        {children}
      </strong>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicNextLink
        field={node.data}
        className="underline decoration-1 underline-offset-2 text-body-base text-text-secondary"
      >
        {children}
      </PrismicNextLink>
    ),
  };
  return (
    <StyledContainer slice={slice}>
      <div className="flex flex-col items-center justify-center max-w-200 mx-auto">
        <StyledPrismicRichTextSingle
          field={slice?.primary?.title}
          className={
            "pt-[20px] text-title-large font-semibold xl:pb-[10px] w-full"
          }
        />
        <div className="py-[20px] body text-body-large">
          <BasePrismicRichText
            components={{ ...defaultComponents }}
            field={slice?.primary?.content}
          />
        </div>
      </div>
    </StyledContainer>
  );
};

export default RichTextSlice;
