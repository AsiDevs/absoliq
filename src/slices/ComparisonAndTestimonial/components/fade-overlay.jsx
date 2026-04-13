import clsx from "clsx";

const FadeOverlay = () => {
  return (
    <>
      <Overlay className={"bg-linear-to-r left-[-2px]"} />
      <Overlay className={"bg-linear-to-l right-[-2px]"} />
    </>
  );
};

export default FadeOverlay;

const Overlay = ({ className = "" }) => {
  return (
    <span
      className={clsx({
        "from-[rgba(255,255,255,1)] through-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.2)] h-[calc(100%+4px)] absolute top-[-2-px] hidden md:block md:w-25 xl:w-80 select-none pointer-events-none z-2": true,
        [className]: true,
      })}
    />
  );
};
