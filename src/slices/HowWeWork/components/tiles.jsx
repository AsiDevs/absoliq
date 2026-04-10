"use client";

import { useLayoutEffect, useRef, useState } from "react";
import AnimateIn from "@/app/components/framer/animate-in";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import clsx from "clsx";

const Tiles = ({ slice }) => {
  const title = slice?.primary?.tiles_title;
  const tiles = slice?.primary?.tiles;
  if (!tiles || !title) return null;
  return (
    <div className="pt-15 md:pt-20 xl:30">
      {title && (
        <AnimateIn className={"mb-8"}>
          <StyledPrismicRichTextSingle
            field={title}
            className="text-title-large text-text-secondary font-bold"
          />
        </AnimateIn>
      )}
      <TitleContainer tiles={tiles} />
    </div>
  );
};

export default Tiles;

const chunkItems = (items, size = 3) => {
  const rows = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
};

const TitleContainer = ({ tiles, titleH = 14 }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState("auto");

  const rows = chunkItems(tiles, 3);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");

    const calculateHeight = () => {
      if (!containerRef.current) return;

      const rowHeightPx = titleH * 16; // em → px approximation (assuming 1em = 16px)
      const totalHeight = rowHeightPx * rows.length;

      if (mq.matches) {
        setHeight(`${totalHeight}px`);
      } else {
        setHeight("auto");
      }
    };

    calculateHeight();

    mq.addEventListener("change", calculateHeight);

    const resizeObserver = new ResizeObserver(() => {
      calculateHeight();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      mq.removeEventListener("change", calculateHeight);
      resizeObserver.disconnect();
    };
  }, [rows.length, titleH]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-1 overflow-hidden"
      style={{ height }}
    >
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} items={row} />
      ))}
    </div>
  );
};

const Row = ({ items, minH = "220px", onHover }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-1 transition-bouncy h-full hover:h-[125%]">
      {items?.map((item, index) => (
        <Tile tile={item} key={index} isSingleItem={items?.length === 1} />
      ))}
    </div>
  );
};

const Tile = ({ tile, isSingleItem }) => {
  return (
    <div
      className={clsx({
        "rounded-md p-6 bg-[#F3F1EE] w-full transition-bouncy bouncy flex flex-col justify-between group": true,
        "hover:w-[125%]": !isSingleItem,
      })}
    >
      <h3 className="text-title-base mb-20 lg:mb-0 font-medium lg:max-w-[320px]">
        {tile?.title}
      </h3>
      <p className="text-body-medium transition-bouncy lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible pointer-events-none lg:max-w-[350px]">
        {tile?.description}
      </p>
    </div>
  );
};
