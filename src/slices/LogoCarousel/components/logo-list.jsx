"use client";

import React from "react";
import "./logo-list.css";
import { PrismicNextImage } from "@prismicio/next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

export function LogoList({ images }) {
  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={3}
      loop={true}
      speed={9000}
      autoplay={{
        delay: 0, // KEY: removes step pauses
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      allowTouchMove={false} // optional: makes it feel like a marquee
      modules={[Autoplay]}
      breakpoints={{
        768: {
          slidesPerView: 4,
          spaceBetween: 46,
        },
        1280: {
          slidesPerView: 4.5,
          spaceBetween: 96,
        },
      }}
      className="logo-carousel-swiper"
    >
      {images?.map(({ image }, idx) => (
        <SwiperSlide
          key={image?.id + idx}
          className="py-1 md:py-1.5 xl:py-2 px-1.5 md:px-2 xl:px-3"
        >
          <PrismicNextImage field={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LogoList;
