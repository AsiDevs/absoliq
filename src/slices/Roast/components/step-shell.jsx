import clsx from "clsx";

const StepShell = ({
  children,
  eyebrow,
  title,
  description,
  className = "",
  titleClassName = "",
}) => {
  return (
    <div
      className={clsx(
        "mx-auto flex min-h-[620px] w-full max-w-[1280px] flex-col items-center justify-center py-14 text-center md:py-20",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-body-large mb-4 max-w-[900px] font-bold text-[#777]">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={clsx(
            "text-title-x-large mx-auto max-w-[1180px] font-bold text-[#0f0f0f]",
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
      <div className="mt-10 w-full">{children}</div>
    </div>
  );
};

export default StepShell;
