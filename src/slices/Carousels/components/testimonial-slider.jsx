"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import TestimonialCard from "./testimonial-card";

import "swiper/css";
import "./carousel-slider.css";

const getNavigationClassNames = (navigationId = "") => {
  const safeId = String(navigationId).replace(/[^a-zA-Z0-9_-]/g, "");

  return {
    prevClassName: `carousels-arrow-left-${safeId}`,
    nextClassName: `carousels-arrow-right-${safeId}`,
  };
};

const TestimonialSlider = ({ cards = [], navigationId }) => {
  if (!cards.length) return null;

  const { prevClassName, nextClassName } =
    getNavigationClassNames(navigationId);

  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={16}
      slidesPerView="auto"
      watchOverflow={true}
      navigation={{
        prevEl: `.${prevClassName}`,
        nextEl: `.${nextClassName}`,
      }}
      className="carousels-swiper testimonials-swiper"
      breakpoints={{
        768: {
          spaceBetween: 24,
        },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide
          key={`${index}-${card?.logo?.url || card?.stat_one || "testimonial"}`}
          className="!h-auto !w-auto"
        >
          <TestimonialCard card={card} idx={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
