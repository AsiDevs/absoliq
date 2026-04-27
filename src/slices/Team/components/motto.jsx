import React from "react";
import AnimateIn from "@/app/components/framer/animate-in";
import { PrismicRichText } from "@prismicio/react";

const Motto = ({ slice }) => {
  const motto = slice?.primary?.motto;
  if (!motto) return null;

  return (
    <AnimateIn className="mt-15 md:mt-20 xl:mt-30">
      <PrismicRichText
        field={motto}
        className={"text-center"}
        components={{
          heading2: ({ children }) => (
            <h2 className={"text-title-3x-large mb-6 md:mb-8 text-center"}>
              {children}
            </h2>
          ),
          paragraph: ({ children }) => (
            <p className={"text-body-small mb-2 text-center"}>{children}</p>
          ),
          heading4: ({ children }) => (
            <h4 className={"text-title-medium text-center"}>{children}</h4>
          ),
          strong: ({ children }) => (
            <strong className="font-medium">{children}</strong>
          ),
          list: ({ children }) => (
            <div className="space-y-5 md:space-y-6">{children}</div>
          ),
        }}
      />
    </AnimateIn>
  );
};

export default Motto;
