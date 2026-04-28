"use client";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import AnimateIn from "@/app/components/framer/animate-in";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { IoArrowForwardSharp } from "react-icons/io5";
import clsx from "clsx";
import "./hover-card.css";

// ✅ Single source of truth for transition duration
const TRANSITION_DURATION = 200;

const Cards = ({ slice }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const singleCardRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  useLayoutEffect(() => {
    if (!singleCardRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerHeight(entry.contentRect.height);
    });
    observer.observe(singleCardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => clearTimeout(transitionTimeoutRef.current);
  }, []);

  const handleMouseEnter = (idx) => {
    if (transitionTimeoutRef.current)
      clearTimeout(transitionTimeoutRef.current);
    setActiveIndex(idx);
    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayIndex(idx);
    }, TRANSITION_DURATION);
  };

  const activeCard = slice?.primary?.tiles?.[displayIndex];

  return (
    <div className="max-w-266 mx-auto">
      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex items-stretch">
        <div
          className="max-w-[305px] flex flex-col flex-shrink-0"
          style={{ height: containerHeight + 2 || "auto" }}
        >
          {slice?.primary?.tiles?.map((card, idx) => (
            <div
              key={idx + card?.title}
              onMouseEnter={() => handleMouseEnter(idx)}
              className={clsx(
                "basis-0 overflow-hidden",
                `transition-[flex-grow] duration-[200ms] ease-out`,
                activeIndex === idx ? "grow-[1.15]" : "grow",
              )}
            >
              <HoverCard
                card={card}
                isActive={activeIndex === idx}
                isFirst={idx === 0}
                isLast={idx === slice?.primary?.tiles?.length - 1}
              />
            </div>
          ))}
        </div>

        <div
          ref={singleCardRef}
          className="w-full border border-l-0 border-[#A7A7A7] rounded-tr-2xl rounded-br-2xl bg-primary-white overflow-hidden single-card"
        >
          <CardContentRender card={activeCard}>
            <CardContent card={activeCard} />
            <CardImage
              image={slice?.primary?.image}
              tiltAngle={-1 + activeIndex * 1}
            />
          </CardContentRender>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="flex flex-col gap-y-8 lg:hidden">
        {slice?.primary?.tiles?.map((card, idx) => (
          <SingleCard key={idx + card?.title} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

const CardContentRender = ({ card, children }) => {
  if (!card?.link)
    return <div className="flex flex-col justify-between">{children}</div>;
  return (
    <PrismicNextLink
      className="flex flex-col justify-between"
      field={card?.link}
    >
      {children}
    </PrismicNextLink>
  );
};

const SingleCard = ({ card }) => {
  if (!card?.link) return <SingleCardContent card={card} />;
  return (
    <PrismicNextLink field={card?.link}>
      <SingleCardContent card={card} />
    </PrismicNextLink>
  );
};

const SingleCardContent = ({ card }) => {
  return (
    <AnimateIn className="border border-[#A7A7A7] rounded-2xl bg-primary-white overflow-hidden single-card">
      <div className="pt-6 px-4">
        <h3 className="text-title-base text-text-heading mb-4">
          {card?.title}
        </h3>
        <StyledPrismicRichTextSingle
          field={card?.description}
          className="text-[16px] leading-6.5"
        />
        {card?.link && (
          <button className="btn btn-secondary px-0!" field={card?.link}>
            <span className="icon">
              <IoArrowForwardSharp />
            </span>
          </button>
        )}
      </div>
      <CardImage image={card?.image} />
    </AnimateIn>
  );
};

const CardContent = ({ card }) => {
  return (
    <div className="pt-6 lg:pt-10 px-4 lg:px-15">
      <h3 className="text-title-base text-text-heading mb-4">{card?.title}</h3>
      <StyledPrismicRichTextSingle
        field={card?.description}
        className="text-[16px] leading-6.5"
      />
      {card?.link && (
        <span className="btn btn-secondary px-0!">
          <span className="icon">
            <IoArrowForwardSharp />
          </span>
        </span>
      )}
    </div>
  );
};

const HoverCard = ({ card, isFirst, isLast, isActive }) => {
  return (
    <AnimateIn
      className={clsx({
        "flex flex-col border-r border-l items-center pt-8 pb-4.5 px-7 border-[#A7A7A7] bg-primary-white cursor-pointer transition-timing h-full": true,
        "border-t rounded-tl-2xl": isFirst,
        "border-b rounded-bl-2xl": isLast,
        "border-b border-t": !isFirst && !isLast,
        "border-r-primary-dark": isActive,
      })}
    >
      <div className="h-8 w-8 relative mb-2.5">
        <PrismicNextImage
          field={card?.icon}
          className={clsx(
            "absolute inset-0 w-full h-full transition-timing min-w-8 min-h-8",
            { "opacity-0": isActive },
          )}
        />
        <PrismicNextImage
          field={card?.hover_icon}
          className={clsx(
            "absolute inset-0 w-full h-full transition-timing min-w-8 min-h-8",
            {
              "opacity-0": !isActive,
              "opacity-100": isActive,
            },
          )}
        />
      </div>
      <h3
        className={clsx("text-[18px] leading-6.5 text-center", {
          "text-[#6A6A6A]": !isActive,
          "text-text-heading": isActive,
        })}
      >
        {card?.title}
      </h3>
    </AnimateIn>
  );
};

const CardImage = ({ image, tiltAngle = 0 }) => (
  <div className="overflow-hidden">
    <PrismicNextImage
      field={image}
      className="w-full h-[202px]"
      style={{
        transform: `rotate(${tiltAngle}deg)`,
        transition: "transform 200ms ease-out", // must match TRANSITION_DURATION
      }}
    />
  </div>
);
