"use client";
import StyledButton from ".";
import clsx from "clsx";
import { motion } from "motion/react";

const StyledButtonContainer = ({ slice, leftAligned = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }}
      className={clsx({
        "flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-6": true,
        "items-center md:justify-center": !leftAligned,
        "items-start md:justify-start": leftAligned,
      })}
    >
      {slice.primary.buttons.map(({ link, variant }) => (
        <motion.div
          key={link?.key}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
        >
          <StyledButton
            key={link?.key}
            link={link}
            variant={variant?.toLowerCase()}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StyledButtonContainer;
