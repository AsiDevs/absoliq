import clsx from "clsx";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import AnimateIn from "@/app/components/framer/animate-in";

const Point = ({ point, idx, variant }) => {
  if (!point) return null;
  return (
    <AnimateIn
      delay={idx * 0.1}
      className={"flex bg-[#F3F3F3] rounded-md p-3.5 gap-x-4 items-center"}
    >
      <div
        className={clsx({
          "h-10.5 w-10.5 min-h-10.5 min-w-10.5 rounded-[6.3px] text-[white] flex items-center justify-center text-[20px]": true,
          "bg-border-primary": variant === "negative",
          "bg-primary-dark": variant === "positive",
        })}
      >
        {variant === "negative" && <FaMinus />}
        {variant === "positive" && <FaPlus />}
      </div>
      <p className="text-body-base">{point}</p>
    </AnimateIn>
  );
};

export default Point;
