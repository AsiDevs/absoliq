import clsx from "clsx";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import AnimateIn from "@/app/components/framer/animate-in";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";

const Point = ({ point, idx, variant }) => {
  if (!point) return null;
  return (
    <AnimateIn
      delay={idx * 0.1}
      className={
        "flex bg-[#F3F3F3] rounded-md p-3.5 gap-x-4 items-center lg:min-h-20"
      }
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
      <StyledPrismicRichTextSingle className="text-body-base" field={point} />
    </AnimateIn>
  );
};

export default Point;
