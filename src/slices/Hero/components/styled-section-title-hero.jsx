import clsx from "clsx";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import Image from "next/image";
import AbsoliqImage from "../../../app/assets/icons/absoliq.svg";
import AnimateIn from "@/app/components/framer/animate-in";
import AnimateUp from "@/app/components/framer/animate-up";

const StyledSectionTitleHero = ({
  slice,
  wrapperClassName,
  childClassName,
  leftAligned = false,
  textWhite = false,
}) => {
  const caption = slice?.primary?.caption || "";
  const title = slice?.primary?.title || "";
  const description = slice?.primary?.description || "";

  return (
    <AnimateIn
      transition={{
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }}
      className={clsx({
        "flex flex-col gap-y-2 mb-10": true,
        wrapperClassName: true,
        "text-center items-center max-w-[920px] mx-auto": !leftAligned,
        "text-left items-start max-w-[955px]": leftAligned,
      })}
    >
      {caption && (
        <div className="w-full ">
          <AnimateUp
            className={clsx({
              "flex gap-2 items-center xl:mb-2.5": true,
              "justify-center": !leftAligned,
              "justify-start": leftAligned,
              "text-text-light": textWhite,
              "text-text-heading": !textWhite,
              childClassName: true,
            })}
          >
            <Image
              src={AbsoliqImage.src}
              alt="Absoliq"
              height={18}
              width={20}
              className="mb-1.5"
            />
            <StyledPrismicRichTextSingle
              className="text-title-base-blog font-bold"
              field={caption}
            />
          </AnimateUp>
        </div>
      )}
      {title && (
        <div className="w-full overflow-hidden">
          <AnimateUp>
            <StyledPrismicRichTextSingle
              className="text-title-3x-large"
              field={title}
            />
          </AnimateUp>
        </div>
      )}
      {description && (
        <div className="w-full overflow-hidden">
          <AnimateUp>
            <StyledPrismicRichTextSingle
              className="text-body-small"
              field={description}
            />
          </AnimateUp>
        </div>
      )}
    </AnimateIn>
  );
};

export default StyledSectionTitleHero;
