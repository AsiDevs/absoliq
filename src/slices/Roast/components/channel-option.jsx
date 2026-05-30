import clsx from "clsx";
import { Check } from "lucide-react";

const ChannelOption = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-[128px] flex-col items-center justify-start gap-5 text-center"
    >
      <span
        className={clsx(
          "relative flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white transition-all md:h-[88px] md:w-[88px]",
          selected && "outline outline-[6px] outline-primary-dark",
        )}
      >
        {Icon && (
          <Icon
            className={clsx(
              "h-9 w-9",
              selected ? "text-primary-dark" : "text-[#777]",
            )}
            strokeWidth={2.4}
          />
        )}
        {selected && (
          <span className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary-dark text-white">
            <Check className="h-4 w-4" strokeWidth={3} />
          </span>
        )}
      </span>
      <span className="max-w-[180px] text-[22px] font-bold leading-7 text-[#777] md:text-[28px] md:leading-8">
        {label}
      </span>
    </button>
  );
};

export default ChannelOption;
