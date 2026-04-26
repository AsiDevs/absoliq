"use client";

import { useLayoutEffect, useRef, useState } from "react";
import AnimateIn from "@/app/components/framer/animate-in";
import { FiPlus } from "react-icons/fi";
import clsx from "clsx";
import StyledSinglePoint from "@/app/components/stlyed-single-point";
import "./icons.css";

const Tiles = ({ slice }) => {
  const tiles = slice?.primary?.tiles;
  if (!tiles || tiles.length < 1) return null;

  return <TitleContainer tiles={tiles} />;
};

export default Tiles;

const chunkItems = (items, size = 3) => {
  const rows = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
};

const TitleContainer = ({ tiles, titleH = 20 }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState("auto");

  const rows = chunkItems(tiles, 3);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");

    const calculateHeight = () => {
      if (!containerRef.current) return;

      const rowHeightPx = titleH * 16;
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
      className="flex flex-col gap-4.5 overflow-hidden  transition-bouncy "
      style={{ height }}
    >
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} items={row} />
      ))}
    </div>
  );
};

const Row = ({ items }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4.5 transition-bouncy h-full hover:h-[125%]">
      {items?.map((item, index) => (
        <Tile
          tile={item}
          key={index}
          isSingleItem={items?.length === 1}
          idx={index}
        />
      ))}
    </div>
  );
};

const Tile = ({ tile, isSingleItem, idx }) => {
  const description = tile?.points?.[0]?.text?.split("\n");
  return (
    <AnimateIn
      className={clsx({
        "tile rounded-md p-6 bg-[#FFF] w-full transition-bouncy bouncy flex flex-col justify-between group relative": true,
        "hover:w-[125%]": !isSingleItem,
      })}
      delay={0.1 * idx}
    >
      <h3 className="text-title-base mb-8 lg:mb-0 font-medium">
        {tile?.title}
      </h3>
      <div className="transition-timing lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible pointer-events-none lg:max-w-[350px] gap-y-1.5 flex flex-wrap lg:w-[95%]">
        {description?.map((point) => {
          return (
            <StyledSinglePoint
              className={"w-full md:w-1/2 lg:w-full"}
              key={point}
              point={point}
              idx={0}
            />
          );
        })}
      </div>
      <div className="hidden lg:flex w-fit absolute right-6 bottom-6">
        <div className="bg-primary-dark group-hover:bg-secondary-dark p-2.75 rounded-md icon-primary">
          <FiPlus
            className="transition-timing group-hover:rotate-270 text-text-light"
            size={16}
          />
        </div>
      </div>
    </AnimateIn>
  );
};
