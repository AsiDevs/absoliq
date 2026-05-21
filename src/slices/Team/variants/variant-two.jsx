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
  "left-[-3%] sm:left-0 top-[23%] sm:top-[28%]",
  "left-[18%] top-[-2%]",
  "right-[18%] top-[-2%]",
  "right-[-3%] sm:right-0 top-[23%] sm:top-[28%]",
  "right-[-3%] sm:right-0 bottom-[18%] sm:bottom-[23%]",
  "right-[18%] bottom-[0%]",
  "left-[18%] bottom-[0%]",
  "left-[-3%] sm:left-0 bottom-[18%] sm:bottom-[23%]",
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1338 748"
            fill="none"
            overflow="visible"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full text-primary-light/30"
          >
            <path
              d="M199.109 497.016C336.626 457.626 353.466 576.286 307.627 612.77C264.04 647.462 234.781 587.874 266.466 570.673C331.95 535.125 378.724 617.447 409.593 565.429C421.068 546.092 385.452 527.55 374.045 549.862C352.201 592.594 436.722 673.862 459.174 684.602C517.206 712.363 592.502 709.176 654.689 701.2C684.325 697.399 868.058 663.022 853.01 605.855C846.461 580.977 806.087 586.27 809.647 620.396C815.591 677.377 1012.65 734.935 1097.61 702.135C1173.81 672.719 1190.02 570.527 1143.95 517.351C1100.91 467.684 1001.99 464.601 889.494 498.641C851.909 510.014 751.043 582.834 742.653 647.936C740.098 667.756 749.172 716.608 793.14 725.963C837.108 735.318 692.404 179.377 548.193 135.543C403.982 91.709 455.654 176.577 382.465 241.386C340.467 278.575 320.768 250.778 262.468 250.778C235.693 250.778 210.196 261.877 191.593 287.236C162.969 326.258 142.069 382.287 102.576 412.096C73.2615 434.222 7.60827 436.641 1.84425 397.685C-12.3069 302.043 89.1848 316.905 122.536 331.088C128.325 333.55 136.807 338.929 150.637 349.142C208 391.504 255.033 446.584 306.406 495.622C332.784 520.8 345.613 529.893 358.732 537.647C494.354 617.818 705.766 595.21 825.197 495.922C878.479 451.625 925.613 391.552 947.802 325.333C965.577 272.287 970.239 208.304 953.534 154.38C945.326 127.887 931.096 101.343 911.368 78.1143C866.515 25.3041 806.237 -14.0003 727.657 5.64452C654.159 24.0187 629.432 109.482 650.948 172.16C680.07 256.994 800.213 332.601 888.56 342.417C998.011 354.578 1111.2 313.417 1155.17 261.966C1199.14 210.515 717.794 601.432 752.193 662.761C786.592 724.09 937.204 773.672 1031.69 730.64C1170.44 667.446 1207.54 536.519 1178.56 395.736C1172.01 363.93 1162.44 351.602 1147.69 340.543C1136.46 332.126 1113.4 324.959 1086.69 329.091C1066.95 332.144 1051.79 347.77 1041.82 360.635C1033.45 371.438 1031.69 388.253 1034.76 409.588C1039.76 444.221 1070.98 468.706 1114.95 476.189C1152.39 482.563 1228.14 466.835 1279.59 413.512C1319 372.671 1338.88 331.442 1336.65 267.578C1333.85 187.127 1221.59 160.934 1175.75 231.094C1129.91 301.254 61.592 536.406 199.109 497.016Z"
              stroke="currentColor"
              strokeLinejoin="round"
            />
          </svg>
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
        "absolute bottom-0 left-1/2 overflow-hidden rounded-[24px] border-2 border-[#FAF9F6] bg-[#25252A] transition-bouncy",
        "h-55 md:h-[250px] w-35 md:w-[166px]",
        {
          "[--stack-offset:0%]": isCenter,
          "[--stack-offset:-55%] md:[--stack-offset:-52%] xl:[--stack-offset:-74%]":
            isLeft,
          "[--stack-offset:55%] md:[--stack-offset:52%] xl:[--stack-offset:74%]":
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
          ? { scale: 1.03 }
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
