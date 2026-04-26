"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

import StyledButtonContainer from "@/app/components/styled-button/styled-button-container";
import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import CTAButtonDescription from "../components/cta-button-description";
import CTALogoImage from "../components/cta-logo-image";
import clsx from "clsx";

const CTA = ({ slice }) => {
  const ref = useRef(null);

  const white_bg = slice?.primary?.white_backgorund;

  // Track scroll relative to THIS section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move from below → into position
  const rawY = useTransform(scrollYProgress, [0.1, 0.4], [450, 0]);

  // Smooth the motion (important for production feel)
  const y = useSpring(rawY, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <StyledContainer slice={slice} maxWLarge className="xl:px-10!">
      <div
        ref={ref}
        className={clsx({
          "overflow-hidden relative rounded-[18px] px-4 md:px-6 py-15 md:py-20 xl:py-30": true,
          "bg-primary-white": white_bg,
          "section-dark-bg": !white_bg,
        })}
      >
        <StyledSectionTitle slice={slice} textWhite={!white_bg} />

        <div className="pb-4 md:pb-8 xl:pb-11">
          <StyledButtonContainer slice={slice} />
          <CTAButtonDescription slice={slice} textWhite={!white_bg} />
        </div>

        {/* Animated logo */}
        <CTALogoImage y={y} inverse={white_bg} />
      </div>
    </StyledContainer>
  );
};

export default CTA;
