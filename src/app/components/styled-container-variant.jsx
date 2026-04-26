import clsx from "clsx";
import Divider from "./divider";

const StyledContainerVariant = ({
  as: Comp = "div",
  className = "",
  children,
  slice = {},
  paddingX = true,
  darkBg = false,
}) => {
  const paddingXStyles = "px-[16px] md:px-[40px] xl:px-[80px] 2xl:px-0";
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
          "pt-[60px] md:pt-[80px] xl:pt-[120px]": pt === "Full",
          "pb-[60px] md:pb-[80px] xl:pb-[120px]": pb === "Full",
          [className]: true,
          "section-bg": !noBg && !darkBg,
          "section-dark-bg": !noBg && darkBg,
        })}
      >
        <div
          className={clsx({
            "mx-auto w-full max-w-[1280px] relative z-[10] max-w-[1360px] relative z-[10]": true,
          })}
        >
          <div
            className={clsx({
              "px-4 md:px-6 py-6 md:py-8 xl:p-10 2xl:p-20 rounded-[18px]": true,
              "bg-primary-white": !slice?.primary?.remove_background,
              "bg-transparent": slice?.primary?.remove_background,
            })}
          >
            {children}
          </div>
        </div>
      </Comp>
      {slice?.primary?.with_border && <Divider noBg={noBg} />}
    </>
  );
};

export default StyledContainerVariant;
