import { MdArrowForward } from "react-icons/md";
import clsx from "clsx";
import StyledButton from "@/app/components/styled-button";

const StepActions = ({
  onContinue,
  label = "Continue",
  type = "button",
  className,
  siteBtn = false,
  disabled = false,
}) => {
  if (siteBtn)
    return (
      <StyledButton
        variant="primary"
        type={type}
        label={label}
        onClick={onContinue}
        disabled={disabled}
      />
    );
  return (
    <div
      className={clsx(
        "mt-6 md:max-w-[95.5%] mx-auto flex justify-center",
        className,
      )}
    >
      <button
        variant="primary"
        type={type}
        onClick={onContinue}
        disabled={disabled}
        className="w-full btn btn-primary font-normal!"
      >
        <span className="block mt-1">{label}</span>
        <span>
          <MdArrowForward />
        </span>
      </button>
    </div>
  );
};

export default StepActions;
