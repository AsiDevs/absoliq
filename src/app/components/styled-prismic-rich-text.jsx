import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import Point from "@/app/assets/icons/point.svg";
import Image from "next/image";
import clsx from "clsx";

/** @type {import("@prismicio/react").JSXMapSerializer} */
const defaultComponents = {
  heading1: ({ children }) => (
    <h1 className="text-title-3x-large mt-12 mb-5 first:mt-0 last:mb-0">
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-title-x-large mb-5">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-title-medium mb-5 first:mt-0 last:mb-0 font-medium">
      {children}
    </h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-title-large mt-12 mb-5 first:mt-0 last:mb-0">
      {children}
    </h4>
  ),
  heading5: ({ children }) => (
    <h5 className="text-title-medium mt-12 mb-5 first:mt-0 last:mb-0">
      {children}
    </h5>
  ),
  heading6: ({ children }) => (
    <h6 className="text-title-base mb-5">{children}</h6>
  ),
  paragraph: ({ children }) => (
    <p className="text-body-base pb-5 text-[#212121]">{children}</p>
  ),
  oList: ({ children }) => (
    <ol className="pl-4 mb-5 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="pl-1 mb-1 list-decimal last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => <ul className="pl-0 mb-5 last:mb-0">{children}</ul>,
  listItem: ({ children }) => (
    <li className="pl-1 mb-1 list-disc last:mb-0 md:pl-2 flex items-start justify-start gap-x-3">
      <span
        className={clsx({
          "rounded-[4.5px] w-7.5 h-7.5 min-w-7.5 min-h-7.5 flex items-center justify-center bg-primary-dark block": true,
        })}
      >
        <Image src={Point.src} alt="point" width={18} height={18.75} />
      </span>
      <span className="block mt-1">{children}</span>
    </li>
  ),
  preformatted: ({ children }) => (
    <pre className="p-4 text-sm rounded-sm mb-5 bg-slate-100 last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
};

export function StyledPrismicRichText({ components, className, ...props }) {
  if (className) {
    return (
      <div className={className}>
        <BasePrismicRichText
          components={{ ...defaultComponents, ...components }}
          {...props}
        />
      </div>
    );
  }
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
