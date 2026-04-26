import clsx from "clsx";
import Divider from "./divider";

const StyledContainer = ({
  as: Comp = "div",
  className = "",
  children,
  slice = {},
  paddingX = true,
  parentClass = "",
  darkBg = false,
  maxWLarge,
}) => {
  const paddingXStyles = "px-[16px] md:px-[40px] xl:px-[80px]";
  const noBg = slice.primary?.no_background;

  const pt = slice.primary?.top_padding || "None";
  const pb = slice.primary?.bottom_padding || "None";
  return (
    <>
      <Comp
        className={clsx({
          [paddingXStyles]: paddingX,
          "pt-0": pt === "None",
          "pb-0": pb === "None",
          "pt-[20px] md:pt-[40px] xl:pt-[60px]": pt === "Half",
          "pb-[20px] md:pb-[40px] xl:pb-[60px]": pb === "Half",
          "pt-[40px] md:pt-[80px] xl:pt-[120px]": pt === "Full",
          "pb-[40px] md:pb-[80px] xl:pb-[120px]": pb === "Full",
          [className]: true,
          "section-bg": !noBg && !darkBg,
          "section-dark-bg": !noBg && darkBg,
        })}
      >
        <div
          className={clsx({
            "mx-auto w-full max-w-[1280px] relative z-[10]": true,
            "max-w-[1280x]": !maxWLarge,
            "max-w-[1360px]": maxWLarge,
            [parentClass]: true,
          })}
        >
          {children}
        </div>
      </Comp>
      {slice?.primary?.with_border && <Divider noBg={noBg} />}
    </>
  );
};

export default StyledContainer;
