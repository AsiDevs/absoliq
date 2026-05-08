"use client";

import clsx from "clsx";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import StyledButton from "@/app/components/styled-button";
import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import AnimateUp from "@/app/components/framer/animate-up";

const DESKTOP_TILE_POSITIONS = [
  "xl:left-[16%] xl:top-[24%]",
  "xl:left-[35%] xl:top-[4%]",
  "xl:right-[35%] xl:top-[4%]",
  "xl:right-[16%] xl:top-[24%]",
  "xl:right-[16%] xl:bottom-[20%]",
  "xl:right-[35%] xl:bottom-[4%]",
  "xl:left-[35%] xl:bottom-[4%]",
  "xl:left-[16%] xl:bottom-[20%]",
];

const TABLET_TILE_POSITIONS = [
  "md:left-[8%] md:top-[24%]",
  "md:left-[30%] md:top-[-2%]",
  "md:right-[30%] md:top-[-2%]",
  "md:right-[8%] md:top-[24%]",
  "md:right-[8%] md:bottom-[20%]",
  "md:right-[30%] md:bottom-[0%]",
  "md:left-[30%] md:bottom-[0%]",
  "md:left-[8%] md:bottom-[20%]",
];

const MOBILE_TILE_POSITIONS = [
  "left-[-3%] top-[23%]",
  "left-[18%] top-[-2%]",
  "right-[18%] top-[-2%]",
  "right-[-3%] top-[23%]",
  "right-[-3%] bottom-[18%]",
  "right-[18%] bottom-[0%]",
  "left-[18%] bottom-[0%]",
  "left-[-3%] bottom-[18%]",
];

const VariantTwo = ({ slice }) => {
  const team = slice?.primary?.team ?? [];
  const tiles = slice?.primary?.tiles ?? [];
  const link = slice?.primary?.link;
  const buttonVariant = slice?.primary?.variant?.toLowerCase?.() ?? "primary";
  const hasLink = Boolean(link?.url || link?.uid || link?.id);

  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} leftAligned className="max-w-full" />
      <div className="mt-10 flex flex-col gap-8 md:mt-14 xl:mt-20">
        <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1180px] justify-center overflow-visible md:min-h-[620px] xl:min-h-[760px] xl:px-16 2xl:mt-[-160px]">
          {tiles.map((tile, idx) => (
            <Tile
              idx={idx}
              key={idx}
              label={tile?.tile}
              className={clsx(
                "absolute",
                MOBILE_TILE_POSITIONS[idx % MOBILE_TILE_POSITIONS.length],
                TABLET_TILE_POSITIONS[idx % TABLET_TILE_POSITIONS.length],
                DESKTOP_TILE_POSITIONS[idx % DESKTOP_TILE_POSITIONS.length],
              )}
            />
          ))}
          <div className="relative z-[2] mx-auto flex w-full max-w-[1100px] flex-col items-center justify-center gap-2 xl:flex-row md:items-center md:gap-x-10">
            <StyledPrismicRichTextSingle
              field={slice?.primary?.team_prefix}
              className="text-title-3x-large text-center md:text-right"
            />
            <div className="w-full max-w-[380px] sm:max-w-[420px] md:max-w-[500px]">
              <PortraitStack members={team} />
              <div className="-mt-8 flex justify-center md:-mt-9 xl:-mt-10 relative z-20">
                <StyledButton variant={buttonVariant} link={link} />
              </div>
            </div>
            <StyledPrismicRichTextSingle
              field={slice?.primary?.team_suffix}
              className="text-title-3x-large text-center md:text-left"
            />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

const Tile = ({ label, className = "", idx }) => {
  if (!label) return null;

  return (
    <AnimateUp
      delay={0.05 * idx}
      className={clsx(
        "flex min-h-[68px] h-[68px] w-[68px] rounded-[10px] bg-primary-dark text-text-light shadow-[0_12px_24px_rgba(0,101,255,0.18)] sm:min-h-[90px] sm:h-[90px] sm:w-[90px] text-center",
        "items-center justify-center px-3 md:py-3 md:text-center md:justify-center",
        className,
      )}
    >
      <span className="block max-w-[10ch] text-[11px] leading-[14px] sm:text-[14px] sm:leading-[18px]">
        {label}
      </span>
    </AnimateUp>
  );
};

const PortraitStack = ({ members }) => {
  const visibleMembers = members.slice(0, 3);
  const stackRef = React.useRef(null);
  const isRevealed = useInView(stackRef, {
    once: true,
    amount: 0.55,
  });

  if (visibleMembers.length === 0) {
    return (
      <div className="flex aspect-[1.04] w-full items-center justify-center rounded-[24px] border border-white/20 bg-white/6 px-6 text-center text-body-small text-text-light/80">
        Add team images to the repeater to populate this layout.
      </div>
    );
  }

  return (
    <div
      ref={stackRef}
      className="relative flex min-h-[250px] w-full items-end justify-center overflow-visible"
    >
      {visibleMembers.map((member, idx) => (
        <PortraitCard
          key={idx}
          member={member}
          idx={idx}
          total={visibleMembers.length}
          isRevealed={isRevealed}
        />
      ))}
    </div>
  );
};

const PortraitCard = ({ member, idx, total, isRevealed }) => {
  const shouldReduceMotion = useReducedMotion();
  const isCenter = total === 1 || (total > 1 && idx === 1);
  const isLeft = total > 1 && idx === 0;
  const isRight = total > 2 && idx === total - 1;
  const hoverOffset = isLeft
    ? "calc(-50% + var(--stack-offset) - 3%)"
    : isRight
      ? "calc(-50% + var(--stack-offset) + 3%)"
      : "calc(-50% + var(--stack-offset))";

  return (
    <motion.div
      className={clsx(
        "absolute bottom-0 left-1/2 overflow-hidden rounded-[24px] border-2 border-[#FAF9F6] bg-[#25252A]",
        "h-[250px] w-[166px]",
        {
          "[--stack-offset:0%]": isCenter,
          "[--stack-offset:-10%] md:[--stack-offset:-52%] xl:[--stack-offset:-74%]":
            isLeft,
          "[--stack-offset:10%] md:[--stack-offset:52%] xl:[--stack-offset:74%]":
            isRight,
          "z-[1]": isLeft,
          "z-[3]": isCenter,
          "z-[2]": isRight,
        },
      )}
      initial={{
        x: "-50%",
        rotate: 0,
        scale: 1,
      }}
      animate={{
        x:
          shouldReduceMotion || !isRevealed || isCenter
            ? "-50%"
            : "calc(-50% + var(--stack-offset))",
        scale: 1,
        rotate:
          shouldReduceMotion || !isRevealed ? 0 : isLeft ? -9 : isRight ? 9 : 0,
      }}
      whileHover={
        shouldReduceMotion || !isRevealed || isCenter
          ? undefined
          : {
              x: hoverOffset,
              rotate: isLeft ? -13 : 13,
              scale: 1.03,
            }
      }
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 16,
        mass: 0.9,
        delay: isCenter ? 0.04 : idx * 0.14,
      }}
    >
      <PrismicNextImage
        field={member?.image}
        fill
        sizes="166px"
        className="object-cover"
      />
    </motion.div>
  );
};

export default VariantTwo;
