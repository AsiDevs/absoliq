"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "motion/react";

const CTADescription = ({ slice, leftAligned }) => {
  const ctaDescription = slice?.primary?.cta_description || "";
  if (!ctaDescription) return;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.4,
      }}
    >
      <p
        className={clsx({
          "text-body-small mt-2.25": true,
          "text-center": !leftAligned,
          "text-left": leftAligned,
        })}
      >
        {ctaDescription}
      </p>
    </motion.div>
  );
};

export default CTADescription;
