import clsx from "clsx";

const RoastProgress = ({ activeIndex = 0, total = 11 }) => {
  const safeTotal = Math.max(total, 1);
  const safeActiveIndex = Math.min(Math.max(activeIndex, 0), safeTotal - 1);
  const progressPercent =
    safeTotal === 1 ? 100 : (safeActiveIndex / (safeTotal - 1)) * 100;

  return (
    <div
      className="relative mx-auto w-full max-w-[760px] px-4"
      aria-label={`Step ${safeActiveIndex + 1} of ${safeTotal}`}
    >
      <div className="absolute inset-x-[24px] top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-[#d9d9d9] sm:inset-x-[27px] md:inset-x-[30px]">
        <div
          className="h-full rounded-full bg-primary-dark transition-[width] duration-700 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="relative z-10 flex flex-nowrap items-center justify-between">
        {Array.from({ length: safeTotal }).map((_, index) => {
          const isActive = index <= safeActiveIndex;
          return (
            <span
              key={index}
              className={clsx(
                "h-4 w-4 flex-none rounded-full transition-[background-color,transform] duration-500 ease-out sm:h-[22px] sm:w-[22px] md:h-[28px] md:w-[28px]",
                isActive ? "scale-100 bg-primary-dark" : "scale-95 bg-[#d9d9d9]",
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RoastProgress;
