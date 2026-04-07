"use client";

import React from "react";
import { motion } from "motion/react";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import RushLanka from "../../../app/assets/images/rush-lanka.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./result.css";

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
          1280: {
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

const initial = { opacity: 0, y: 40 };
const whileInView = { opacity: 1, y: 0 };
const transition = {
  duration: 0.8,
  ease: [0.215, 0.61, 0.355, 1],
};

const SingleResult = ({ result, idx }) => {
  if (!result?.link) return null;
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      transition={{
        delay: idx * 0.3,
        ...transition,
      }}
      className="result-link-container"
    >
      <PrismicNextLink
        href={result?.link}
        className="p-6 rounded-[12px] min-h-[320px] relative block bg-primary-white result-link group"
      >
        <div className="pb-10 md:pb-19">
          <div className="title-container flex items-center justify-between py-[3.5px] mb-2">
            <h3 className="text-[24px] text-text-heading group-hover:text-text-light result-transition-timing">
              {result?.title}
            </h3>
            <button className="w-7 h-7 overflow-hidden block relative rounded-sm bg-border-primary">
              <span className="before-hover">
                <MdKeyboardArrowRight size={16} color="#0D0D0D" />
              </span>
              <span className="after-hover">
                <MdKeyboardArrowRight size={16} color="#fff" />
              </span>
            </button>
          </div>
          <div className="tag-container flex items-center justify-start flex-wrap gap-2">
            <Tag tag={result?.tag_one} />
            <Tag tag={result?.tag_two} />
          </div>
        </div>
        <div className="stat-container max-w-45 mr-auto flex flex-col gap-y-5">
          <Stat
            stat={result?.stat_one}
            stat_description={result?.stat_one_description}
          />
          <Stat
            stat={result?.stat_two}
            stat_description={result?.stat_two_description}
          />
        </div>
        <Image
          src={RushLanka.src}
          alt="logo"
          width={158}
          height={239}
          className="absolute z-[8] max-w-[35%] md:max-w-[38.5%]  right-0 bottom-0"
        />
      </PrismicNextLink>
    </motion.div>
  );
};

const Tag = ({ tag }) => {
  if (!tag) return null;
  return (
    <div className="flex items-center justify-center bg-border-primary py-1 px-2 rounded-[90px] text-[13.5px] text-text-heading group-hover:text-text-light result-transition-timing">
      {tag}
    </div>
  );
};

const Stat = ({ stat, stat_description }) => {
  if (!stat & !stat_description) return null;
  return (
    <div>
      <p className="text-title-medium text-text-heading group-hover:text-text-light result-transition-timing">
        {stat}
      </p>
      <p className="text-body-small-s text-text-heading group-hover:text-text-light result-transition-timing">
        {stat_description}
      </p>
    </div>
  );
};

export default ResultsContainer;
