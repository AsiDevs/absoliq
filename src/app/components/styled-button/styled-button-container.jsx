import StyledButton from ".";
import clsx from "clsx";

const StyledButtonContainer = ({ slice, leftAligned = false }) => {
  return (
    <div
      className={clsx({
        "flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-6": true,
        "items-center md:justify-center": !leftAligned,
        "items-start md:justify-start": leftAligned,
      })}
    >
      {slice.primary.buttons.map(({ link, variant }) => (
        <StyledButton
          key={link?.key}
          link={link}
          variant={variant?.toLowerCase()}
        />
      ))}
    </div>
  );
};

export default StyledButtonContainer;
