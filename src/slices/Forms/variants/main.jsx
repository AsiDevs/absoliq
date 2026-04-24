import React from "react";
import StyledContainer from "@/app/components/styled-container";
import AnimateIn from "@/app/components/framer/animate-in";
import ContactForm from "../components/contact-form";
import { PrismicNextImage } from "@prismicio/next";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice} className="2xl:px-0!" maxWLarge>
      <div className="">
        <AnimateIn>
          <ContactForm slice={slice} />
        </AnimateIn>
        <AnimateIn>
          <PrismicNextImage
            field={slice?.primary?.image}
            className="rounded-xl h-[370px] md:h-[742px] xl:h-auto object-center object-cover w-full"
          />
        </AnimateIn>
      </div>
    </StyledContainer>
  );
};

export default Main;
