import clsx from "clsx";

const RoastProgress = ({ activeIndex = 0, total = 11 }) => {
  return (
    <div
      className="mx-auto flex w-full max-w-[760px] items-center justify-center px-4"
      aria-label={`Step ${Math.min(activeIndex + 1, total)} of ${total}`}
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index <= activeIndex;
        return (
          <div key={index} className="flex items-center last:flex-none">
            <span
              className={clsx(
                "relative z-10 h-[22px] w-[22px] rounded-full md:h-[28px] md:w-[28px]",
                isActive ? "bg-primary-dark" : "bg-[#d9d9d9]",
              )}
            />
            {index < total - 1 && (
              <span
                className={clsx(
                  "-mx-[1px] h-[3px] w-[42px] md:w-[58px]",
                  index < activeIndex ? "bg-primary-dark" : "bg-[#d9d9d9]",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RoastProgress;
