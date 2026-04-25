import dynamic from "next/dynamic";

import React from "react";
import StyledContainer from "@/app/components/styled-container";
import AnimateIn from "@/app/components/framer/animate-in";
import { PrismicNextImage } from "@prismicio/next";

const ContactForm = dynamic(() => import("../components/contact-form"));
const Newsletter = dynamic(() => import("../components/newsletter"));

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice} className="2xl:px-0!" maxWLarge>
      <div className="flex flex-col xl:flex-row xl:items-stretch gap-7">
        <AnimateIn className={"w-full xl:flex-1"}>
          {slice?.primary?.type === "Newsletter" ? (
            <Newsletter slice={slice} />
          ) : (
            <ContactForm slice={slice} />
          )}
        </AnimateIn>
        <AnimateIn className="w-full xl:relative xl:flex-1 xl:min-h-0 xl:overflow-hidden">
          <PrismicNextImage
            field={slice?.primary?.image}
            className="rounded-xl h-[370px] md:h-[742px] xl:absolute xl:inset-0 xl:h-full object-center object-cover w-full"
          />
        </AnimateIn>
      </div>
    </StyledContainer>
  );
};

export default Main;
