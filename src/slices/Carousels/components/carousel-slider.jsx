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

const CarouselSlider = ({ cards = [], showNavigation = false }) => {
  if (!cards.length) return null;

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView="auto"
        navigation={
          showNavigation
            ? {
                prevEl: ".carousels-arrow-left",
                nextEl: ".carousels-arrow-right",
              }
            : false
        }
        breakpoints={{
          768: {
            spaceBetween: 20,
          },
          1280: {
            spaceBetween: 24,
          },
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

export const CarouselNavigation = ({ className = "" }) => {
  const buttonClassName =
    "flex h-[42px] w-[42px] items-center justify-center rounded-[3px] transition-colors duration-200 bg-primary-dark cursor-pointer";

  return (
    <div className={`flex items-center justify-start gap-3 ${className}`}>
      <button
        type="button"
        aria-label="Previous slide"
        className={`carousels-arrow-left ${buttonClassName}`}
      >
        <Image src={Left.src} alt="Left arrow" width={16} height={16} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className={`carousels-arrow-right ${buttonClassName}`}
      >
        <Image src={Right.src} alt="Right arrow" width={16} height={16} />
      </button>
    </div>
  );
};

export default CarouselSlider;
