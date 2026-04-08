"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

const AnimateUp = ({
  className,
  children,
  options = {},
  role,
  onClick,
  delay = 0,
  distance = 40, // default upward movement
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance, // respect reduced motion
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // smooth, natural movement
        stiffness: 100,
        damping: 18,
        mass: 0.8,
        delay,
        ...options, // allow overrides
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-10% 0px", // triggers slightly before fully visible
      }}
      className={className}
      role={role}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default AnimateUp;
