import React from "react";
import AnimateIn from "@/app/components/framer/animate-in";

const TilesContainer = ({ slice }) => {
  const tiles = slice?.primary?.tiles;
  if (!tiles || tiles?.length < 1) return null;
  return (
    <div className="flex flex-col xl:flex-row gap-y-[38px] md:gap-y-[52px] xl:gap-x-[140px]">
      {tiles?.map((tile, idx) => {
        return <SingleTile key={tile?.title} tile={tile} idx={idx} />;
      })}
    </div>
  );
};

const SingleTile = ({ tile, idx }) => {
  return (
    <AnimateIn
      options={{
        delay: idx * 0.3,
      }}
      className="flex xl:flex-col items-start gap-8 xl:gap-7 text-left xl:text-center"
    >
      <div className="border-t border-t-primary-light border-b border-b-primary-light p-[9.23px] md:p-3 w-fit rounded-xl xl:mx-auto">
        <div className="bg-[#0065FF4D] p-2 rounded-lg w-[61px] h-[61px] md:w-20 md:h-20">
          <div className="text-[40px] md:text-[52px] uppercase text-primary-dark overflow-hidden rounded-lg border border-primary-light flex justify-center w-[49.23px] h-[49.23px] md:w-16 md:h-16">
            {tile?.label}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-title-large text-text-heading mb-3 md:mb-6">
          {tile?.title}
        </h3>
        <p className="text-body-small test-text-secondary">
          {tile?.description}
        </p>
      </div>
    </AnimateIn>
  );
};

export default TilesContainer;
