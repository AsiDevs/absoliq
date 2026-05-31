import clsx from "clsx";

const StepShell = ({
  children,
  eyebrow,
  title,
  description,
  className = "",
  titleClassName = "",
  bodyMaxW = true,
}) => {
  return (
    <div
      className={clsx(
        "mx-auto flex w-full max-w-[1064px] flex-col items-center justify-center mt-10 md:mt-15 text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-body-large mb-5 max-w-[880px] text-text-placeholder">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={clsx(
            "text-title-x-large mx-auto max-w-[972px] font-medium text-text-heading",
            titleClassName,
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className="text-body-large mx-auto mt-7 max-w-[950px] text-text-placeholder">
          {description}
        </p>
      )}
      <div
        className={clsx({
          "mt-5 w-full mx-auto": true,
          "max-w-[414px]": bodyMaxW,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default StepShell;
