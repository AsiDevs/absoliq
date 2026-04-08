"use client";

import React, { useRef } from "react";
import "./logo-list.css";
import { PrismicNextImage } from "@prismicio/next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import AnimateIn from "@/app/components/framer/animate-in";
import { del } from "motion/react-client";
import { delay } from "motion";

export function LogoList({ images }) {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Freeze exactly where it is
    swiper.setTranslate(swiper.getTranslate());

    // Stop autoplay
    swiper.autoplay.stop();

    // Remove transition to avoid jump
    swiper.wrapperEl.style.transitionDuration = "0ms";
  };

  const handleMouseLeave = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Restore transition
    swiper.wrapperEl.style.transitionDuration = `${swiper.params.speed}ms`;

    // Force next movement (critical for delay: 0)
    swiper.slideTo(swiper.activeIndex + 1, swiper.params.speed, false);

    // Restart autoplay
    swiper.autoplay.start();
  };

  return (
    <div
      className="logo-list-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="fade-mask">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={32}
          slidesPerView={3}
          loop={true}
          speed={9000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // IMPORTANT: we're handling manually
          }}
          allowTouchMove={false}
          modules={[Autoplay]}
          breakpoints={{
            768: { slidesPerView: 4, spaceBetween: 46 },
            1280: { slidesPerView: 4.5, spaceBetween: 96 },
          }}
          className="logo-carousel-swiper"
        >
          {images?.map(({ image }, idx) => (
            <SwiperSlide
              key={(image?.id || idx) + idx}
              className="py-1 md:py-1.5 xl:py-2 px-1.5 md:px-2 xl:px-3 grayscale hover:grayscale-0 transition-timing"
            >
              <AnimateIn options={{ delay: idx * 0.1 }}>
                <PrismicNextImage field={image} />
              </AnimateIn>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default LogoList;
