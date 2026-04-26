import StyledButton from ".";
import clsx from "clsx";
import AnimateIn from "../framer/animate-in";

const StyledButtonContainer = ({ slice, leftAligned = false }) => {
  const buttons = slice?.primary?.buttons;
  if (!buttons || buttons?.length < 1) return null;

  return (
    <div
      className={clsx({
        "flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-6": true,
        "items-center md:justify-center": !leftAligned,
        "items-start md:justify-start": leftAligned,
      })}
    >
      {buttons?.map(({ link, variant }, idx) => (
        <AnimateIn
          key={link?.key}
          options={{
            delay: idx * 0.15,
          }}
        >
          <StyledButton
            key={link?.key}
            link={link}
            variant={variant?.toLowerCase()}
          />
        </AnimateIn>
      ))}
    </div>
  );
};

export default StyledButtonContainer;
