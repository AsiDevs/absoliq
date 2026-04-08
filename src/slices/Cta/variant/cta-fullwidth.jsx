"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

import StyledButtonContainer from "@/app/components/styled-button/styled-button-container";
import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import CTAButtonDescription from "../components/cta-button-description";
import CTALogoImage from "../components/cta-logo-image";

const CTAFullWidth = ({ slice, third = false }) => {
  const ref = useRef(null);

  // Track scroll relative to THIS section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move from below → into position
  const rawY = useTransform(scrollYProgress, [0.1, 0.5], [450, 0]);

  // Smooth the motion (important for production feel)
  const y = useSpring(rawY, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <div ref={ref} className="relative overflow-hidden">
      <StyledContainer slice={slice} darkBg>
        <StyledSectionTitle slice={slice} textWhite />

        <div className="pb-4 md:pb-8 xl:pb-11">
          <StyledButtonContainer slice={slice} />
          <CTAButtonDescription slice={slice} />
        </div>
      </StyledContainer>

      {/* Animated logo */}
      <CTALogoImage y={y} />
    </div>
  );
};

export default CTAFullWidth;
