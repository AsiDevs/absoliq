"use client";
import { useState } from "react";
import TestimonialCard from "./testimonial-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, A11y } from "swiper/modules";
import { PrismicNextImage } from "@prismicio/next";
import AnimateIn from "@/app/components/framer/animate-in";
import "./testimony.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import FadeOverlay from "./fade-overlay";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const TestimonyCarousel = ({ slice }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Thumbnails slice={slice} setThumbsSwiper={setThumbsSwiper} />
      <div className="relative overflow-hidden">
        <FadeOverlay />
        <Carousel slice={slice} thumbsSwiper={thumbsSwiper} />
        <CarouselNav />
      </div>
    </>
  );
};

export default TestimonyCarousel;

const Thumbnails = ({ slice, setThumbsSwiper }) => {
  return (
    <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={7}
      slidesPerView={"auto"}
      loop={true}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="pfp-slider"
    >
      {slice?.primary?.testimonies?.map((testimony, idx) => {
        return (
          <SwiperSlide
            key={idx}
            className="max-w-13 min-w-13 max-h-13 min-h-13 flex! justify-center cursor-pointer"
          >
            <AnimateIn>
              <PrismicNextImage
                field={testimony?.image}
                width={48}
                height={48}
                className="max-w-10 min-w-10 thumbnail-image max-h-10 min-h-10"
              />
            </AnimateIn>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const Carousel = ({ slice, thumbsSwiper }) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      watchSlidesProgress={true}
      centeredSlides={true}
      thumbs={{ swiper: thumbsSwiper }}
      loop={true}
      navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
      modules={[FreeMode, Navigation, Thumbs, A11y]}
      breakpoints={{
        768: {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3.5,
        },
      }}
      className="testimony-carousel"
    >
      {slice?.primary?.testimonies?.map((testimony, idx) => {
        return (
          <SwiperSlide key={idx}>
            <TestimonialCard
              key={idx + testimony?.name}
              testimony={testimony}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const CarouselNav = () => {
  return (
    <AnimateIn className="flex justify-center text-text-heading gap-x-3.75 mt-8 md:mt-15">
      <button className="arrow-left arrow">
        <GoArrowLeft size={18} />
      </button>
      <button className="arrow-right arrow">
        <GoArrowRight size={18} />
      </button>
    </AnimateIn>
  );
};
