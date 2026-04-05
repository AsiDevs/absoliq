import clsx from "clsx";
import StyledPrismicRichTextSingle from "./styled-prismic-richtext-single";
import Image from "next/image";
import AbsoliqImage from "../assets/icons/absoliq.svg";

const StyledSectionTitle = ({
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
    <div
      className={clsx({
        "flex flex-col gap-y-2 add-gap max-w-[688px] mx-auto": true,
        wrapperClassName: true,
        "text-center items-center": !leftAligned,
        "text-left items-start": leftAligned,
      })}
    >
      {caption && (
        <div
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
        </div>
      )}
      {title && (
        <StyledPrismicRichTextSingle
          className="text-title-2x-large"
          field={title}
        />
      )}
      {description && (
        <StyledPrismicRichTextSingle
          className="text-body-small"
          field={description}
        />
      )}
    </div>
  );
};

export default StyledSectionTitle;
