"use client";

import clsx from "clsx";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import Image from "next/image";
import AbsoliqImage from "../../../app/assets/icons/absoliq.svg";
import { motion } from "motion/react";

const initial = { opacity: 0, y: 40 };
const whileInView = { opacity: 1, y: 0 };
const transition = {
  duration: 0.8,
  ease: [0.215, 0.61, 0.355, 1],
};

const StyledSectionTitleHero = ({
  slice,
  wrapperClassName,
  childClassName,
  leftAligned = false,
  textWhite = false,
}) => {
  const caption = slice?.primary?.caption || "";
  const title = slice?.primary?.title || "";
  const description = slice?.primary?.description || "";

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
        "flex flex-col gap-y-2 mb-10": true,
        wrapperClassName: true,
        "text-center items-center max-w-[920px] mx-auto": !leftAligned,
        "text-left items-start max-w-[955px]": leftAligned,
      })}
    >
      {caption && (
        <div className="w-full ">
          <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            transition={{
              ...transition,
            }}
            className={clsx({
              "flex gap-2 items-center xl:mb-2.5": true,
              "justify-center": !leftAligned,
              "justify-start": leftAligned,
              "text-text-light": textWhite,
              "text-text-heading": !textWhite,
              childClassName: true,
            })}
          >
            <Image
              src={AbsoliqImage.src}
              alt="Absoliq"
              height={18}
              width={20}
              className="mb-1.5"
            />
            <StyledPrismicRichTextSingle
              className="text-title-base-blog font-bold"
              field={caption}
            />
          </motion.div>
        </div>
      )}
      {title && (
        <div className="w-full overflow-hidden">
          <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            transition={{
              ...transition,
            }}
          >
            <StyledPrismicRichTextSingle
              className="text-title-3x-large"
              field={title}
            />
          </motion.div>
        </div>
      )}
      {description && (
        <div className="w-full overflow-hidden">
          <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            transition={{
              ...transition,
            }}
          >
            <StyledPrismicRichTextSingle
              className="text-body-small"
              field={description}
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default StyledSectionTitleHero;
