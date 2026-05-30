import clsx from "clsx";
import { Check } from "lucide-react";

const PillOption = ({ label, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex h-[72px] w-full items-center gap-6 rounded-full bg-white px-7 text-left text-[24px] leading-8 text-[#211F24] transition-all md:h-[84px] md:text-[32px]",
        selected && "outline outline-[3px] outline-primary-dark",
      )}
    >
      <span
        className={clsx(
          "flex h-11 w-11 flex-none items-center justify-center rounded-full",
          selected ? "bg-primary-dark text-white" : "bg-[#d9d9d9] text-[#d9d9d9]",
        )}
      >
        {selected && <Check className="h-7 w-7" strokeWidth={3} />}
      </span>
      {label}
    </button>
  );
};

export default PillOption;
