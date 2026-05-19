"use client";

import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimateUp from "@/app/components/framer/animate-up";

import "swiper/css";
import "./result.css";
import { PrismicImage } from "@prismicio/react";

const ResultsContainer = ({ slice }) => {
  const results = slice?.primary?.results;
  if (!results || results?.length < 1) return null;
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.15}
        breakpoints={{
          768: {
            slidesPerView: 1.75,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className="results-swiper"
      >
        {results?.map((result, idx) => {
          return (
            <SwiperSlide key={result?.title + idx}>
              <SingleResult result={result} idx={idx} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const SingleResult = ({ result, idx }) => {
  if (!result?.link) return null;
  return (
    <AnimateUp
      options={{
        delay: idx * 0.3,
      }}
      className="result-link-container"
    >
      <PrismicNextLink
        href={result?.link}
        className="p-6 rounded-[12px] min-h-[320px] relative block bg-primary-white result-link"
      >
        <div className="pb-10 md:pb-19">
          <div className="title-container flex items-center justify-between py-[3.5px] mb-2">
            <h3 className="text-[24px] text-text-heading result-title result-transition-timing">
              {result?.title}
            </h3>
            <span
              aria-hidden="true"
              className="result-action w-7 h-7 overflow-hidden block relative rounded-sm bg-border-primary"
            >
              <span className="before-hover">
                <MdKeyboardArrowRight size={16} color="#0D0D0D" />
              </span>
              <span className="after-hover">
                <MdKeyboardArrowRight size={16} color="#fff" />
              </span>
            </span>
          </div>
          <div className="tag-container flex items-center justify-start flex-wrap gap-2">
            <Tag tag={result?.tag_one} />
            <Tag tag={result?.tag_two} />
          </div>
        </div>
        <div className="stat-container max-w-42 mr-auto flex flex-col gap-y-5">
          <Stat
            stat={result?.stat_one}
            stat_description={result?.stat_one_description}
          />
          <Stat
            stat={result?.stat_two}
            stat_description={result?.stat_two_description}
          />
        </div>
        <PrismicImage
          field={result?.logo}
          className="result-logo result-logo-default absolute z-[8] w-full h-auto max-w-[35%] md:max-w-[38.5%] right-0 bottom-0 result-transition-timing"
        />
        <PrismicImage
          field={result?.logo_inverse}
          className="result-logo result-logo-inverse absolute z-[8] w-full max-w-[35%] md:max-w-[38.5%] right-0 bottom-0 result-transition-timing opacity-0"
        />
      </PrismicNextLink>
    </AnimateUp>
  );
};

const Tag = ({ tag }) => {
  if (!tag) return null;
  return (
    <div className="result-tag flex items-center justify-center bg-border-primary py-1 pt-1.25 px-2 rounded-[90px] text-[13.5px] leading-5 text-text-heading result-transition-timing">
      {tag}
    </div>
  );
};

const Stat = ({ stat, stat_description }) => {
  if (!stat & !stat_description) return null;
  return (
    <div>
      <p className="result-stat-value text-title-medium text-text-heading result-transition-timing">
        {stat}
      </p>
      <p className="result-stat-description text-body-small-s text-text-heading result-transition-timing">
        {stat_description}
      </p>
    </div>
  );
};

export default ResultsContainer;
