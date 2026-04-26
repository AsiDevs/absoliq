"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import CarouselCard from "./carousel-card";
import Image from "next/image";
import Left from "@/app/assets/icons/left.svg";
import Right from "@/app/assets/icons/right.svg";

import "swiper/css";
import "swiper/css/navigation";
import "./carousel-slider.css";

const getNavigationClassNames = (navigationId = "") => {
  const safeId = String(navigationId).replace(/[^a-zA-Z0-9_-]/g, "");

  return {
    prevClassName: `carousels-arrow-left-${safeId}`,
    nextClassName: `carousels-arrow-right-${safeId}`,
  };
};

const CarouselSlider = ({ cards = [], navigationId }) => {
  if (!cards.length) return null;

  const { prevClassName, nextClassName } =
    getNavigationClassNames(navigationId);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView="auto"
        watchOverflow={true}
        navigation={{
          prevEl: `.${prevClassName}`,
          nextEl: `.${nextClassName}`,
        }}
        className="carousels-swiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={`${index}-${card?.icon?.url || "card"}`}
            className="!w-auto"
          >
            <CarouselCard card={card} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const CarouselNavigation = ({ className = "", navigationId }) => {
  const buttonClassName =
    "flex h-[42px] w-[42px] items-center justify-center rounded-[3px] transition-colors duration-200 bg-primary-dark cursor-pointer";
  const { prevClassName, nextClassName } =
    getNavigationClassNames(navigationId);

  return (
    <div className={`flex items-center justify-start gap-3 ${className}`}>
      <button
        type="button"
        aria-label="Previous slide"
        className={`${prevClassName} ${buttonClassName}`}
      >
        <Image src={Left.src} alt="Left arrow" width={16} height={16} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className={`${nextClassName} ${buttonClassName}`}
      >
        <Image src={Right.src} alt="Right arrow" width={16} height={16} />
      </button>
    </div>
  );
};

export default CarouselSlider;
