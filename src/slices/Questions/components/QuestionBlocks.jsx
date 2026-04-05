"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";

const QuestionBlocks = ({ list, isBorder, isGridView }) => {
  const [currentItem, setCurrentItem] = useState("");

  const half = Math.ceil(list.length / 2.4);
  const firstHalf = list.slice(0, half);
  const secondHalf = list.slice(half);

  return (
    <div>
      {isGridView ? (
        <div
          className={clsx({
            "space-y-[8px] md:space-y-[12px]": !isBorder,
            "xl:rounded-[10px] xl:bg-secondary-light xl:p-[3px]": isBorder,
            " xl:flex xl:flex-row xl:gap-x-[12px] xl:items-baseline":
              isGridView || false,
          })}
        >
          <div className="space-y-[8px]  md:space-y-[12px] xl:flex xl:flex-col ">
            {firstHalf.map(({ question, answer }, idx) => (
              <Accordion
                key={idx}
                isFirst={idx === 0}
                title={question}
                content={answer}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                isBorder={isBorder}
                idx={idx}
              />
            ))}
          </div>
          <div className="space-y-[8px] md:space-y-[12px] xl:flex xl:flex-col">
            {secondHalf.map(({ question, answer }, idx) => (
              <Accordion
                key={idx}
                isFirst={idx === 0}
                title={question}
                content={answer}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                isBorder={isBorder}
                idx={idx + firstHalf.length}
              />
            ))}
          </div>
        </div>
      ) : (
        <div
          className={clsx({
            "space-y-3": !isBorder,
            "rounded-[10px] bg-secondary-light p-[3px]": isBorder,
          })}
        >
          {list.map(({ question, answer }, idx) => (
            <Accordion
              key={idx}
              isFirst={idx === 0}
              title={question}
              content={answer}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              isBorder={isBorder}
              idx={idx}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionBlocks;

function Accordion({
  title,
  content,
  currentItem,
  setCurrentItem,
  isFirst = false,
  isBorder = false,
  idx,
}) {
  const expanded = currentItem === idx;
  const [height, setHeight] = useState(0);

  const toggleExpanded = () => {
    if (currentItem === idx) {
      setCurrentItem("");
    } else {
      setCurrentItem(idx);
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight + 200);
  }, []);

  return (
    <div
      role={"presentation"}
      className={clsx({
        "cursor-pointer px-6 py-[30px] bg-transparent ": true,
        "border-t border-text-base": !isFirst && isBorder,
        "rounded-[8px]": !isBorder,
      })}
      onClick={toggleExpanded}
    >
      <div className="flex flex-row items-center justify-between text-left select-none ">
        <StyledPrismicRichTextSingle
          field={title}
          className={`text-body-medium`}
        />
        <div
          className={clsx({
            "relative flex justify-center border-text-base items-center border rounded-[50%] w-full max-w-[20px] h-[20px]": true,
            "border-primary-light bg-primary-light": expanded,
          })}
        >
          <div
            className={clsx({
              "w-[10px] h-[2px] ": true,
              "bg-primary-white": expanded,
              "bg-text-base": !expanded,
            })}
          />
          <div
            className={clsx({
              "transition-all  duration-400 absolute top-[50%] left-[50%] -mt-[5px] -ml-px w-[2px] h-[10px] bg-text-base": true,
              "scale-y-1 ": !expanded,
              "scale-y-0 ": expanded,
            })}
          />
        </div>
      </div>
      <div
        className={`pt-0 overflow-hidden transition-[max-height] duration-500 ease-in-out`}
        style={{ maxHeight: expanded ? `${height}px` : `0px` }}
      >
        <div ref={ref}>
          <div className="mt-3 text-body-caption">
            <StyledPrismicRichTextSingle field={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
