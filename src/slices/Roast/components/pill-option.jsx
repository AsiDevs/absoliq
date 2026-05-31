import clsx from "clsx";
import { Check } from "lucide-react";

const PillOption = ({ label, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "group flex h-10 w-full items-center gap-6 rounded-full bg-white px-7 text-left text-body-large text-[#000] transition-all md:h-15 md:text-[32px] cursor-pointer outline outline-l outline-white hover:outline-primary-dark",
        selected && "outline-primary-dark",
      )}
    >
      <span
        className={clsx(
          "flex h-8 w-8 flex-none items-center justify-center rounded-full",
          selected
            ? "bg-primary-dark text-white"
            : "bg-[#d9d9d9] text-[#d9d9d9] group-hover:bg-primary-dark group-hover:text-white",
        )}
      >
        <Check
          className={clsx("h-7 w-7", !selected && "hidden group-hover:block")}
          strokeWidth={3}
        />
      </span>
      {label}
    </button>
  );
};

export default PillOption;
