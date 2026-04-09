"use client";
import React from "react";
import { motion } from "motion/react";

const AnimateIn = ({
  className,
  children,
  options = {},
  role,
  onClick,
  delay = 0,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "tween", // smooth fade
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        delay,
        ...options,
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
        margin: "-10% 0px",
      }}
      className={className}
      role={role}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIn;
