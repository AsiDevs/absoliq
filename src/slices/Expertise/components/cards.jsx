import React from "react";
import AnimateIn from "@/app/components/framer/animate-in";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { IoArrowForwardSharp } from "react-icons/io5";

const Cards = ({ slice }) => {
  return (
    <div className="max-w-266 mx-auto">
      <div className="">
        {slice?.primary?.tiles?.map((card, idx) => {
          return <HoverCard key={idx + card?.title} card={card} />;
        })}
      </div>
      <div className="">
        {slice?.primary?.tiles?.map((card, idx) => {
          return <SingleCard key={idx + card?.title} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Cards;

const SingleCard = ({ card }) => {
  return (
    <AnimateIn
      className={
        "border border-[#A7A7A7] rounded-2xl bg-primary-white overflow-hidden"
      }
    >
      <div className="pt-6 px-4">
        <h3 className="text-title-base text-text-heading mb-4">
          {card?.title}
        </h3>
        <StyledPrismicRichTextSingle
          field={card?.description}
          className="text-[16px] leading-6.5"
        />
        {card?.link && (
          <PrismicNextLink
            className={"btn btn-secondary px-0!"}
            field={card?.link}
          >
            <span className="icon">
              <IoArrowForwardSharp />
            </span>
          </PrismicNextLink>
        )}
      </div>
      <PrismicNextImage field={card?.image} className="w-full" />
    </AnimateIn>
  );
};

const HoverCard = ({ card }) => {
  return (
    <AnimateIn
      className={
        "flex flex-col items-center pt-8 pb-4.5 px-7 border border-[#A7A7A7] group bg-primary-white cursor-pointer"
      }
    >
      <div className="h-8 w-8 group relative mb-2.5">
        <PrismicNextImage
          field={card?.icon}
          className="absolute inset-0 w-full h-full transition-timing group-hover:opacity-0"
        />
        <PrismicNextImage
          field={card?.hover_icon}
          className="absolute inset-0 w-full h-full transition-timing opacity-0 group-hover:opacity-100"
        />
      </div>
      <h3 className="text-[18px] leading-6.5 text-[#6A6A6A] group-hover:text-text-heading">
        {card?.title}
      </h3>
    </AnimateIn>
  );
};
