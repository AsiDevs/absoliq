import React from "react";
import AnimateIn from "@/app/components/framer/animate-in";

const Connector = () => (
  <div className="hidden xl:flex items-center mt-13.25 self-start w-35">
    <div className="h-px w-full bg-primary-light/40" />
  </div>
);

const TilesContainer = ({ slice }) => {
  const tiles = slice?.primary?.tiles;
  if (!tiles || tiles?.length < 1) return null;
  return (
    <div className="flex flex-col xl:flex-row xl:items-start gap-y-[38px] md:gap-y-[52px]">
      {tiles?.map((tile, idx) => (
        <React.Fragment key={tile?.title}>
          {idx > 0 && <Connector />}
          <SingleTile tile={tile} idx={idx} isLast={idx === tiles.length - 1} />
        </React.Fragment>
      ))}
    </div>
  );
};

const SingleTile = ({ tile, idx, isLast }) => {
  return (
    <AnimateIn
      options={{
        delay: idx * 0.3,
      }}
      className="relative flex xl:flex-col xl:flex-1 items-start gap-8 xl:gap-7 text-left xl:text-center"
    >
      {!isLast && (
        <div className="xl:hidden absolute left-10 md:left-13 top-[81.46px] md:top-[106px] w-px bg-primary-light/40 h-[calc(100%-43.46px)] md:h-[calc(100%-54px)] pointer-events-none" />
      )}
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
