import clsx from "clsx";
import { Check } from "lucide-react";

const ChannelOption = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-[128px] flex-col items-center justify-start gap-5 text-center cursor-pointer"
    >
      <span
        className={clsx(
          "relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white transition-all md:h-[72px] md:w-[72px]",
          selected && "outline outline-[4px] outline-primary-dark",
        )}
      >
        {Icon && (
          <Icon
            className={clsx(
              "h-6 w-6",
              selected ? "text-primary-dark" : "text-[#777]",
            )}
            strokeWidth={2.4}
          />
        )}
        {selected && (
          <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6  items-center justify-center rounded-full bg-primary-dark text-white">
            <Check className="h-4 w-4" strokeWidth={3} />
          </span>
        )}
      </span>
      <span className="max-w-[180px] text-body-large text-text-placeholder">
        {label}
      </span>
    </button>
  );
};

export default ChannelOption;
