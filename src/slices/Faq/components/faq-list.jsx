"use client";
import { useEffect, useRef, useState } from "react";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import { motion } from "motion/react";
import { animateIn } from "@/utils/framer";

const FAQList = ({ list, isBorder }) => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div>
      {list?.map(({ question, answer }, idx) => (
        <Accordion
          key={idx}
          title={question}
          content={answer}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          isBorder={isBorder}
          idx={idx}
        />
      ))}
    </div>
  );
};

export default FAQList;

function Accordion({ title, content, currentItem, setCurrentItem, idx }) {
  const { initial, whileInView, transition } = animateIn();
  const expanded = currentItem === idx;
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  const toggleExpanded = () => {
    setCurrentItem(expanded ? "" : idx);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? contentRef.current.scrollHeight : 0);
    }
  }, [expanded]);

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      transition={{
        delay: idx * 0.15,
        ...transition,
      }}
      role="presentation"
      className={
        "cursor-pointer py-5 bg-transparent border-b border-border-primary"
      }
      onClick={toggleExpanded}
    >
      {/* Header */}
      <div className="flex items-center justify-between text-left select-none">
        <StyledPrismicRichTextSingle
          field={title}
          className="text-body-medium"
        />

        {/* Plus / Minus Icon */}
        <div className="relative flex items-center justify-center">
          <div className="w-[18px] h-[2px] bg-text-base rounded-sm" />
          <div
            className={`absolute rounded-sm top-1/2 left-1/2 w-[2px] h-[18px] bg-text-base -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              expanded ? "scale-y-0 opacity-0" : ""
            }`}
          />
        </div>
      </div>

      {/* Content */}
      <div
        style={{ height }}
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          expanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div ref={contentRef} className="mt-6">
          <StyledPrismicRichTextSingle
            className="text-body-small"
            field={content}
          />
        </div>
      </div>
    </motion.div>
  );
}
